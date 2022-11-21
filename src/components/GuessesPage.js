import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import GuessesContainer from "./GuessesContainer";
import NavBar from "./NavBar";

export default function GuessesPage() {
    const [matches, setMatches] = useState([])
    const [guesses, setguesses] = useState([])
    const {user} = useContext(UserContext)

    useEffect(() => {
        axios.get("https://bolaowc-api.onrender.com/matches", {headers: {username: user?.username}})
        .then((res) => {
            // console.log(res.data.matches.matchesTable)
            setMatches(res.data.matches.matchesTable)
            setguesses(res.data.guesses)  
        }). catch ((err) => {
            // alert(err.message)
        })
    }, [])
    return(
        <Container>
            <NavBar />
            <Content>
                <MatchesContainer>
                <Title>Fase de grupos</Title>
                {matches.map((match) => {
                    return(
                        <>
                        <TitleDiv>
                            <MatchTitle>{match.date}</MatchTitle>
                        </TitleDiv>
                        <GuessesContainer matches={match.matches} guesses={guesses}/>
                        </>
                    )
                })}
                {/* <TitleDiv>
                <MatchTitle>20/11</MatchTitle>
                </TitleDiv>
                <Guess />
                <TitleDiv>
                <MatchTitle>21/11</MatchTitle>
                </TitleDiv>
                <Guess />
                <Guess />
                <Guess />
                <TitleDiv>
                <MatchTitle>22/11</MatchTitle>
                </TitleDiv>
                <Guess />
                <Guess /> */}
                </MatchesContainer>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 58px);
    margin-top: 58px;
    background-color: #EEEEE4;
    background-color: #240441;
    background-color: #1b0530;
    display: flex;
    justify-content: center;
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
    font-size: 22px;
    margin-top: 20px;
`
const MatchTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #FFF;
    font-size: 19px;
`

const TitleDiv = styled.div`
    width: 95%;
    height: 30px;
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`

const MatchesContainer = styled.div`
    width: 80%;
    min-height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 40px;
    border-radius: 8px;
`