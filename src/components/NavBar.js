import styled from "styled-components"
import "../style/icons.css"
import { BiUser } from "react-icons/bi";
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    function redirect(route) {
        navigate(route)
    }

        return (
            <>
            <Header>
                <Logo onClick={() => redirect("/")}>BOLÃO WC</Logo>
                <MenuContainer>
                    <li onClick={() => redirect("/groups")}>GRUPOS</li>
                    <li onClick={() => redirect("/matches")}>JOGOS</li>
                    <li onClick={() => redirect("/guesses")}>PALPITES</li>
                    <li onClick={() => redirect("/ranking")}>RANKING</li>
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
    color: #fff;
    li:first-child {
        color: #D1BC6C;
    }
    li {
        cursor: pointer;
    }
`