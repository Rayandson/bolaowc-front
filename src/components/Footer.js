import styled from "styled-components"
import "../style/icons.css"
import { FaTable } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";
import { TbSoccerField } from "react-icons/tb";
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    function redirect(route) {
        navigate(route)
    }

        return (
            <>
            <StyledFooter>
                <MenuContainer>
                    <li onClick={() => redirect("/groups")}><FaTable className="white-table"/></li>
                    <li onClick={() => redirect("/matches")}><TbSoccerField className="white-field"/></li>
                    <li onClick={() => redirect("/guesses")}><HiShieldCheck className="white-shield"/></li>
                    <li onClick={() => redirect("/ranking")}><FaMedal className="medal-icon"/></li>
                </MenuContainer>
            </StyledFooter>
            </>
        )
    
}

const StyledFooter = styled.footer`
    width: 100%;
    height: 58px;
    background-color: #460A65;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    @media (max-width: 680px) {
        display: flex;
        height: 52px;
    }
`

const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    width: 100%;
    li:first-child {
        color: #D1BC6C;
    }
    li {
        cursor: pointer;
    }
`