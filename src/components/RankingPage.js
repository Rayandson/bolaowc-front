import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import Footer from "./Footer";
import NavBar from "./NavBar";


export default function RankingPage() {
    const {user} = useContext(UserContext)

    useEffect(() => {
        axios.get("https://bolaowc-api.onrender.com/ranking", {headers: {username: user?.username}})
        .then((res) => {
            console.log(res.data)
        }).catch ((e) => alert(e.message))
    }, [])

    return(
        <Container>
            <NavBar />
            <Content>
                <Title>RANKING</Title>
                <CentralDiv>
                    <RankingContainer>
                    <TableHeader>
                        <LeftDiv>
                            <p>Pos</p>
                            <p>Usuário</p>
                        </LeftDiv> 
                        <p>Pts</p>
                    </TableHeader>
                    </RankingContainer>
                    <RulesContainer>

                    </RulesContainer>
                </CentralDiv>
            </Content>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 58px);
    margin-top: 58px;
    background-color: #1b0530;
    display: flex;
    justify-content: center;
    @media(max-width: 680px) {
        margin-top: 53px;
        min-height: calc(100vh - 53px);
    }
`

const Content = styled.div`
    width: 80%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 0;
    gap: 20px;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: #fff;
`

const CentralDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
background-color: orange;
`
const RankingContainer = styled.div`
    width: 500px;
    min-height: 400px;
    background-color: #FAFAFA;
    border-radius: 10px;
`

const TableHeader = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: blue;
padding: 3px 10px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 15px;

`
const LeftDiv = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    background-color: red;

`

const RulesContainer = styled.div`
    width: 300px;
    min-height: 300px;
    background-color: #FAFAFA;
`