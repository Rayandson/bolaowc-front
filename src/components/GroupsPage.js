import styled from "styled-components";
import NavBar from "./NavBar";
import Group from "./Group"
import Logo from "../assets/img/worldcup.png"
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext"
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import Footer from "./Footer";

export default function GroupsPage() {
    const [groups, setGroups] = useState(undefined)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) {
            navigate("/")
        }
        axios.get("https://bolaowc-api.onrender.com/groups", {headers: {username: user?.username}})
        .then((res) => {
            setGroups(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    if(groups === undefined) {
        return(
            <Container>
                <NavBar />
                <h1>Carregando</h1>
            </Container>
        )
    } else {
        return(
       
            <Container>
                <NavBar />
                <GroupsContainer>
                {groups.map((group) => <Group group={group}/>)}   
                </GroupsContainer>
                <LogoContainer>
                <img src={Logo}></img>
                </LogoContainer>
                <Footer />
            </Container>
    
        )
    } 
}

const Container = styled.div`
    min-height: calc(100vh - 58px);
    margin-top: 58px;
    background-color: #1b0530;;
    padding: 70px 20px;
    display: flex;
   justify-content: center;
   align-items: center;
   gap: 60px;
   @media(max-width: 680px) {
        padding: 60px 0;
        margin-top: 53px;
        min-height: calc(100vh - 53px);
    }
`

const GroupsContainer = styled.div`
    width: 70vw;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width: 680px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 25px;
        justify-content: center;
    }
`

const LogoContainer = styled.div`
 img {
        width: 250px;
        height: 250px;
    }
    @media(max-width: 680px) {
        display: none;
    }
`