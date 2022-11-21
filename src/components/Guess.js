import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Guess(props) {
    const matchName = props.matchInfo.match
    const matchInfo = props.matchInfo
    const guesses = props.guesses
    const [guessExists, setGuessExists] = useState(false)
    const [guessTeamA, setGuessTeamA] = useState("")
    const [guessTeamB, setGuessTeamB] = useState("")

    useEffect(() => {
        for(let i=0; i<guesses.length; i++) {
            for(let j=0; j<guesses[i].matches.length; j++) {
                if(matchName === guesses[i].matches[j].match) {
                    setGuessExists(true)
                    setGuessTeamA(guesses[i].matches[j].teamA.score)
                    setGuessTeamB(guesses[i].matches[j].teamB.score)
                }
            }
        }
    
    }, [])

    if(guessExists === false) {
        return(
            <MatchContainer>
    
                <Content>
                <Time>{matchInfo.time}</Time>
                <TeamsContainer>
                <TeamADiv>
                    <p>{matchInfo.teamA.country}</p>
                    <img src={matchInfo.teamA.flag} />
                </TeamADiv>
                <Score>
                    <p>{matchInfo.teamA.score}</p>
                </Score>
                <Vs>X</Vs>
                <Score>
                    <p>{matchInfo.teamB.score}</p>
                </Score>
                <TeamBDiv>
                    <img src={matchInfo.teamB.flag} />
                    <p>{matchInfo.teamB.country}</p>  
                </TeamBDiv>
                </TeamsContainer>
                <Stadium>{matchInfo.stadium}</Stadium>
                </Content>
                <GuessDiv>
                <Palpite>
                <h2>Palpite:</h2>
                </Palpite>
                <ScoreInput type="number"/>
                <Vs>X</Vs>
                <ScoreInput type="number"/>
                <TeamBDiv />
                </GuessDiv>
                <Botao>Enviar</Botao>
            </MatchContainer>
        )
    }
    if(guessExists === true) {
        
    return(
        <MatchContainer>

            <Content>
            <Time>{matchInfo.time}</Time>
            <TeamsContainer>
            <TeamADiv>
                <p>{matchInfo.teamA.country}</p>
                <img src={matchInfo.teamA.flag} />
            </TeamADiv>
            <Score>
                <p>{matchInfo.teamA.score}</p>
            </Score>
            <Vs>X</Vs>
            <Score>
                <p>{matchInfo.teamB.score}</p>
            </Score>
            <TeamBDiv>
                <img src={matchInfo.teamB.flag} />
                <p>{matchInfo.teamB.country}</p>  
            </TeamBDiv>
            </TeamsContainer>
            <Stadium>{matchInfo.stadium}</Stadium>
            </Content>
            <GuessDiv>
            <Palpite>
            <h2>Palpite:</h2>
            </Palpite>
            <Score>
                <p>{guessTeamA}</p>
            </Score>
            <Vs>X</Vs>
            <Score>
                <p>{guessTeamB}</p>
            </Score>
            <TeamBDiv />
            </GuessDiv>
        </MatchContainer>
    )
    }
}

const MatchContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
`

const Vs = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`

const TeamADiv =styled.div`
    width: 150px;
    height: 30px;
    /* background-color: orange; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    img {
        width: 22px;
    }
`

const Palpite = styled.div`
    width: 150px;
    height: 30px;
    /* background-color: orange; */
    display: flex;
    justify-content: center;
    color: green;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`
const TeamBDiv =styled.div`
    width: 150px;
    height: 30px;
    /* background-color: orange; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    img {
        width: 22px;
    }
`

const Content =styled.div`
    width: 95%;
    height: 30px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const TeamsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
`

const Score = styled.div`
    width: 25px;
    height: 25px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 20px;
    }
`

const Time = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    position: absolute;
    left: 10px;
    top: 8px;
`
const Stadium = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    position: absolute;
    right: 10px;
    top: 8px;
`

const GuessDiv = styled.div`
    width: 95%;
    height: 30px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const ScoreInput = styled.input`
    width: 25px;
    height: 25px;
    margin: 0 5px;
    background-color: #ededed;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    text-align: center;
`

const Botao = styled.button`
width: 60px;
height: 25px;
border-radius: 5px;
background-color: purple;
margin-top: 15px;
border: none;
color: #fff;
`