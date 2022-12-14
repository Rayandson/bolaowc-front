import styled from "styled-components"
import "../style/icons.css"
import { FaTable } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";
import { TbSoccerField } from "react-icons/tb";
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveContext } from "../contexts/ActiveContext";

export default function Footer() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const {active, setActive} = useContext(ActiveContext)

    function redirect(route, tab) {
        navigate(route)
        setActive(tab)
    }

        return (
            <>
            <StyledFooter>
                <MenuContainer>
                    <li active={active} onClick={() => redirect("/groups", "groups")}><FaTable className={active === "groups" ? "table-active" : "table-inactive"} /></li>
                    <li active={active} onClick={() => redirect("/matches", "matches")}><TbSoccerField className={active === "matches" ? "field-active" : "field-inactive"}/></li>
                    <li active={active} onClick={() => redirect("/guesses", "guesses")}><HiShieldCheck className={active === "guesses" ? "shield-active" : "shield-inactive"}/></li>
                    <li active={active} onClick={() => redirect("/ranking", "ranking")}><FaMedal className={active === "ranking" ? "medal-active" : "medal-inactive"}/></li>
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
    li {
        cursor: pointer;
    }
`
