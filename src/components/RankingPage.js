import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import Footer from "./Footer";
import NavBar from "./NavBar";


export default function RankingPage() {
    const {user} = useContext(UserContext)
    const [ranking, setranking] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("https://bolaowc-api.onrender.com/ranking", {headers: {username: user?.username}})
        .then((res) => {
            console.log(res.data[0].ranking)
            setranking(res.data[0].ranking)
        }).catch ((e) => {
            alert(e.message)
            navigate("/")
        })
    }, [])

    if(ranking.length === 0) {
        return(
            <Container>
            <NavBar />
            <LoadingMessage> Carregando...</LoadingMessage>
            <Footer />
            </Container>
        )
    }

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
                    {ranking.map((user) => {
                        return(
                    <TableLine>
                        <LeftDiv>
                            <p>{user.pos}</p>
                            <p>{user.username}</p>
                        </LeftDiv> 
                        <p>{user.pts}</p>
                    </TableLine>
                        )
                    })}
                    </RankingContainer>
                    <RulesContainer>
                        <RulesTitle>
                            <p>Pontuação</p>
                        </RulesTitle>
                            <Rule>
                                <Description>
                                    <p>Placar exato da partida</p>
                                </Description>
                                <Pts color="green">
                                    <p>20</p>
                                </Pts>
                            </Rule>
                            <Rule>
                                <Description>
                                    <p>Vencedor da partida + número de gols de uma das equipes</p>
                                </Description>
                                <Pts color="blue">
                                    <p>15</p>
                                </Pts>
                            </Rule>
                            <Rule>
                                <Description>
                                    <p>Acertar vencedor ou empate porém sem acertar o número de gols de nenhuma das equipes</p>
                                </Description>
                                <Pts color="yellow">
                                    <p>10</p>
                                </Pts>
                            </Rule>
                            <Rule>
                                <Description>
                                    <p>Apenas o número de gols de uma das equipes</p>
                                </Description>
                                <Pts color="orange">
                                    <p>5</p>
                                </Pts>
                            </Rule>
                            <Rule>
                                <Description>
                                    <p>Errou tudo</p>
                                </Description>
                                <Pts color="red">
                                    <p>0</p>
                                </Pts>
                            </Rule>
                            <RulesFooter>
                            <p>* Jogos do Brasil valem o dobro</p>
                            </RulesFooter>
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
    align-items: center;
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
    @media (max-width: 600px) {
    width: 90%;
}
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: #fff;
    margin-bottom: 20px;
`

const CentralDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: flex-start;

@media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
}
`
const RankingContainer = styled.div`
    width: 500px;
    min-height: 400px;
    background-color: #FAFAFA;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    @media (max-width: 600px) {
    width: 95%;
}
`

const TableHeader = styled.div`
width: 90%;
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px 10px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 15px;

`

const TableLine = styled.div`
width: 90%;
height: 44px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px 10px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 17px;
border-bottom: solid 1px #DDDDDD;
&:nth-child(2) {
    color: #2cc92c;
    font-weight: 700;
}

&:last-child {
    color: red;
}

`
const LeftDiv = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;

`

const RulesContainer = styled.div`
    width: 500px;
    min-height: 300px;
    background-color: #FAFAFA;
    @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 80px;
}
`

const RulesTitle = styled.div`
    width: 100%;
    height: 50px;
    background-color: darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 17px;
    color: #fff;
`

const Rule = styled.div`
    width: 100%;
    height: 50px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const RulesFooter = styled.div`
    width: 100%;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
`

const Description = styled.div`
    width: 85%;
    height: 100%;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: black;
    text-align: center;
    border-bottom: solid 1px #DDDDDD;
`

const Pts = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: #FFF;
    background-color: ${props => props.color === "green" ? "green" : props.color === "blue" ? "#0202d3" : props.color === "yellow" ? "black" : props.color === "orange" ? "#db8a00" : "#d80000" };
`

const LoadingMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #fff;
`