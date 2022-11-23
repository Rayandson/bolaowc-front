import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"
import dayjs from "dayjs"

export default function Guess(props) {
    const dayJsObject = dayjs()
    const currentHour = Number(dayJsObject.format('HH'))
    const today = dayJsObject.format('DD/MM')
    const todayNumber = Number(dayJsObject.format('DD'))
    const matchDay = Number(props.matchInfo.date.slice(0 ,2))
    const currentMonth = Number(dayJsObject.format('MM'))
    const matchMonth = Number(props.matchInfo.date.slice(3))
    console.log(matchMonth)
    const matchDate = props.matchInfo.date
    const matchHour = Number(props.matchInfo.time.slice(0, 2))
    const matchName = props.matchInfo.match
    // console.log(props.matchInfo)
    const matchInfo = props.matchInfo
    const guesses = props.guesses
    const {user} = useContext(UserContext)
    const [guessExists, setGuessExists] = useState(false)
    const [guessTeamA, setGuessTeamA] = useState("")
    const [guessTeamB, setGuessTeamB] = useState("")
    const [teamAInput, setTeamAInput] = useState("")
    const [teamBInput, setTeamBInput] = useState("")
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        matchStarted()
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

    // setInterval(desativaBotao, 100000)

    // function desativaBotao() {
    //     setDisabled(true)
    // }

    function matchStarted() {
        if(today === matchDate) {
            if(currentHour >= matchHour) {
                setDisabled(true)
            }
        }
    }

    setInterval(matchStarted, 600000)

    function sendGuess() {
        setDisabled(true)
        axios.post("https://bolaowc-api.onrender.com/guesses", {username: user.username, matches:[{match: matchName, teamA: {country: props.matchInfo.teamA.country, score: Number(teamAInput)}, teamB:{country: props.matchInfo.teamB.country, score: Number(teamBInput)}}]}, {headers: {username: user.username}})
        .then((res) => {
            console.log(res.data)
        }).catch((e) => {
            alert(e.message)
        })
    }

    if(guessExists === false && (!today === matchDate && !currentHour >= matchHour)) {
        if(todayNumber < matchDay && currentMonth === matchMonth) {
        return(
            <MatchContainer>
                <TimeMobile>{matchInfo.time}</TimeMobile>
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
                <ScoreInput type="number" onChange={(e) => setTeamAInput(e.target.value)} value={teamAInput}/>
                <Vs>X</Vs>
                <ScoreInput type="number" onChange={(e) => setTeamBInput(e.target.value)} value={teamBInput}/>
                <TeamBDiv />
                </GuessDiv>
                <Botao disabled={disabled} teamAInput={teamAInput} teamBInput={teamBInput} onClick={sendGuess}>Enviar</Botao>
            </MatchContainer>
        )
        }
    }
    else if(guessExists === true || (today === matchDate && currentHour >= matchHour) || (todayNumber > matchDay && currentMonth >= matchMonth)) {
        
    return(
        <MatchContainer>
            <TimeMobile>{matchInfo.time}</TimeMobile>
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
    } else {
return(
            <MatchContainer>
                <TimeMobile>{matchInfo.time}</TimeMobile>
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
                <ScoreInput type="number" onChange={(e) => setTeamAInput(e.target.value)} value={teamAInput}/>
                <Vs>X</Vs>
                <ScoreInput type="number" onChange={(e) => setTeamBInput(e.target.value)} value={teamBInput}/>
                <TeamBDiv />
                </GuessDiv>
                <Botao disabled={disabled} teamAInput={teamAInput} teamBInput={teamBInput} onClick={sendGuess}>Enviar</Botao>
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
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    img {
        width: 22px;
    }
`

const Palpite = styled.div`
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: center;
    color: green;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 17px;
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
    font-size: 18px;
    font-weight: 500;
    img {
        width: 23px;
    }
`

const Content =styled.div`
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const TeamsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 400px) {
        width: 100%;
    }
`

const Score = styled.div`
    width: 25px;
    height: 25px;
    background-color: #FAFAFA;
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
    @media(max-width: 680px) {
        display: none;
    }
`
const TimeMobile = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    display: none;
    margin-bottom: 5px;
    margin-top: 25px;
    @media(max-width: 680px) {
        display: block;
    }
`

const Stadium = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    position: absolute;
    right: 10px;
    top: 8px;
    @media(max-width: 680px) {
        display: none;
    }
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
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

const Botao = styled.button`
width: 60px;
height: 25px;
border-radius: 5px;
/* background-color: purple; */
background-color:  ${props => (props.disabled === false) ? "purple" : "grey"};
margin-top: 15px;
border: none;
color: #fff;
pointer-events: ${props => (props.disabled === true || (props.teamAInput === "" || props.teamBInput === "")) ? "none" : "all"};
cursor: pointer;
`