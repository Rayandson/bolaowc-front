import styled from "styled-components";
import NavBar from "./NavBar";
import Group from "./Group"
import Logo from "../assets/img/worldcup.png"


export default function GroupsPage() {
    return(
        <>
        <Container>
            <NavBar />
            <GroupsContainer>
                <Group />
                <Group />
                <Group />
                <Group />
                <Group />
                <Group />
                <Group />
                <Group />
            </GroupsContainer>
            <LogoContainer>
            <img src={Logo}></img>
            </LogoContainer>
            
        </Container>
        </>
    )
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