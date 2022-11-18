import styled from "styled-components";
import NavBar from "./NavBar";
import Group from "./Group"
import Logo from "../assets/img/worldcup.png"
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext"
import axios from "axios";


export default function GroupsPage() {
    const [groups, setGroups] = useState(undefined)
    const {user} = useContext(UserContext)
    console.log(user)

    useEffect(() => {
        axios.get("https://bolaowc-api.onrender.com/groups", {headers: {username: user.username}})
        .then((res) => {
            setGroups(res.data)
            console.log(res.data)
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
                
            </Container>
    
        )
    } 
}

const Container = styled.div`
    min-height: calc(100vh - 58px);
    margin-top: 58px;
    background-color: #EEEEE4;
    padding: 70px 20px;
    display: flex;
   justify-content: center;
   align-items: center;
   gap: 60px;
`

const GroupsContainer = styled.div`
    width: 70vw;
    height: 400px;
    /* background-color: orange; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

const LogoContainer = styled.div`
 img {
        width: 250px;
        height: 250px;
    }
`