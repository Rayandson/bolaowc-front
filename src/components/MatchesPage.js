import styled from "styled-components";
import Footer from "./Footer";
import Match from "./Match";
import NavBar from "./NavBar";


export default function MatchesPage() {
    return(
        <Container>
            <NavBar />
            <Content>
                <Title>1ª rodada</Title>
                <Match />
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
    font-size: 22px;
`