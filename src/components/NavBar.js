import styled from "styled-components"
import "../style/icons.css"
import { BiUser } from "react-icons/bi";
import { UserContext } from "../contexts/UserContext"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveContext } from "../contexts/ActiveContext";

export default function NavBar() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const {active, setActive} = useContext(ActiveContext)

    function redirect(route, tab) {
        navigate(route)
        setActive(tab)
        window.scrollTo(0, 0);
    }

        return (
            <>
            <Header>
                <Logo onClick={() => redirect("/")}>BOLÃO WC</Logo>
                <MenuContainer>
                    <GroupsLi active={active} onClick={() => redirect("/groups", "groups")}>GRUPOS</GroupsLi>
                    <MatchesLi active={active} onClick={() => redirect("/matches", "matches")}>JOGOS</MatchesLi>
                    <GuessesLi active={active} onClick={() => redirect("/guesses", "guesses")}>PALPITES</GuessesLi>
                    <RankingLi active={active} onClick={() => redirect("/ranking", "ranking")}>RANKING</RankingLi>
                </MenuContainer>
                <UserContainer>
                    <p>Olá, {user?.name}</p>
                    <BiUser className="user-icon"></BiUser>  
                </UserContainer>
            </Header>
            
            <HeaderMobile>
                <Logo onClick={() => redirect("/")}>BOLÃO WC</Logo> 
                <UserContainer>
                    <BiUser className="user-icon"></BiUser>  
                </UserContainer>
            </HeaderMobile>
            </>
        )
    
}

const Header = styled.header`
    width: 100%;
    height: 58px;
    background-color: #460A65;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    @media (max-width: 680px) {
        display: none;
    }
`

const HeaderMobile = styled.header`
    width: 100%;
    height: 53px;
    background-color: #460A65;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    display: none;
    @media (max-width: 680px) {
        display: flex;
    }
`

const Logo = styled.h1`
    color: #FFF;
    font-family: 'Pattaya', sans-serif;
    font-size: 18px;
`

const UserContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    p {
        font-size: 17px;
        color: #fff;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`

const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    li {
        cursor: pointer;
    }
`

const GroupsLi = styled.li`
    color: ${props => props.active === "groups" ? "#D1BC6C" : "#FFF"};
`

const MatchesLi = styled.li`
    color: ${props => props.active === "matches" ? "#D1BC6C" : "#FFF"};
`
const GuessesLi = styled.li`
    color: ${props => props.active === "guesses" ? "#D1BC6C" : "#FFF"};
`
const RankingLi = styled.li`
    color: ${props => props.active === "ranking" ? "#D1BC6C" : "#FFF"};
`