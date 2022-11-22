import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SignUpPage() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function signUp(e) {
        axios.post("https://bolaowc-api.onrender.com/sign-up", {name, username, email, password})
        .then((res) => {
        console.log(res)
        navigate("/")
        setName("")
        setUsername("")
        setEmail("")
        setPassword("")
        })
        .catch((err) => {
            alert(err.message)
        })
        e.preventDefault();
    }

    return(
        <>
        <Container>
        <Logo>BOLÃO WC</Logo>
        <h2>Criar sua Conta</h2>
        <StyledForm onSubmit={signUp}>
        <StyledInput placeholder="Primeiro nome" onChange={(e) => setName(e.target.value)} value={name}/>
        <StyledInput placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
        <StyledInput type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <StyledInput type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <Botao type="submit" value="Cadastrar" />
        </StyledForm>
        <p>Já possui uma conta ? <Link to="/"><span>Entrar</span></Link></p>
        
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
        a {
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 15px;
        color: #fff;
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
    @media(max-width: 385px) {
        width: 90%;
    }    
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
    padding-left: 14px;
        &::placeholder {
            color: #afaeae;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

        }
        @media(max-width: 385px) {
        width: 100%;
    }
`

const Botao = styled.input`
    width: 370px;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    outline: none;
    margin-top: 20px;
    background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    cursor: pointer;
    @media(max-width: 385px) {
        width: 100%;
    }
`