import styled from "styled-components"

export default function SignUp() {
    return(
        <>
        <Container>
        <Logo>BOLÃO WC</Logo>
        <h2>Criar sua Conta</h2>
        <StyledForm>
        <StyledInput placeholder="Primeiro nome"/>
        <StyledInput placeholder="Username"/>
        <StyledInput type="email" placeholder="Email"/>
        <StyledInput type="password" placeholder="Senha"/>
        <Botao type="submit" value="Cadastrar" />
        </StyledForm>
        <p>Já possui uma conta ? <span>Entrar</span></p>
        
        </Container>
        </>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #240441;
    h2 {
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 23px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    p {
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 500;
        margin-top: 20px;
        span {
            color:#008ffc;
        }
    }
   
`

const Logo = styled.h1`
    color: #FFF;
    font-family: 'Pattaya', sans-serif;
    font-size: 30px;
    margin-bottom: 25px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
            
`

const StyledInput = styled.input`
    width: 370px;
    height: 40px;
    /* border: solid 2px #908E97; */
    border: none;
    border-radius: 5px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    outline: none;
    padding-left: 8px;
        &::placeholder {
            color: grey;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

        }
`

const Botao = styled.input`
    width: 370px;
    height: 40px;
    /* border: solid 2px #908E97; */
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    outline: none;
    margin-top: 20px;
    background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
`