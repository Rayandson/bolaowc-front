import styled from "styled-components"
import Guess from "./Guess"

export default function GuessesContainer(props) {
    const matches = props.matches
    const guesses = props.guesses
    return(
        <Container>
            {matches.map((match) => <Guess matchInfo={match} guesses={guesses}/>)}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`