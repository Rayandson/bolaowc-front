import styled from "styled-components"

export default function Match() {
    return(
        <MatchContainer>
            <Vs>X</Vs>

        </MatchContainer>
    )
}

const MatchContainer = styled.div`
    width: 80%;
    height: 60px;
    background-color: #FFF;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Vs = styled.p`
  font-family: 'Roboto', sans-serif;
font-weight: 700;
`