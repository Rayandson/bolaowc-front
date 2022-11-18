import styled from "styled-components"
import "../style/icons.css"
import { BiUser } from "react-icons/bi";
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";

export default function NavBar() {
    const {user} = useContext(UserContext)

    return (
        <>
        <Header>
            <Logo>BOLÃO WC</Logo>
            <MenuContainer>
                <li>GRUPOS</li>
                <li>JOGOS</li>
                <li>PALPITES</li>
                <li>RANKING</li>
            </MenuContainer>
            <UserContainer>
                <p>Olá, {user.name}</p>
                <BiUser className="user-icon"></BiUser>  
            </UserContainer>
        </Header>
        </>
    )
}

const Header = styled.header`
    width: 100%;
    height: 58px;
    /* background-color: #A72032; */
    background-color: #460A65;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
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
`