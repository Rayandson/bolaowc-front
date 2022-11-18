import styled from "styled-components";
import NavBar from "./NavBar";


export default function Matches() {
    return(
        <>
        <Container>
            <NavBar />
        </Container>
        </>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 58px);
    margin-top: 58px;
    background-color: #EEEEE4;
`