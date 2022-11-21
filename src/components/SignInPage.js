import axios from "axios"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"


export default function SignInPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();

    function signIn(e) {
        axios.post("https://bolaowc-api.onrender.com/sign-in", {username, password})
        .then((res) => {
        navigate("/groups")
        setUsername("")
        setPassword("")
        setUser(res.data)
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
        <h2>Bem-vindo, entre agora!</h2>
        <StyledForm onSubmit={signIn}>
        <StyledInput placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
        <StyledInput type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <Botao type="submit" value="Entrar" />
        </StyledForm>
        <p>Ainda não possui uma conta ? <Link to="/sign-up"><span>Cadastrar</span></Link></p>
        
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
    /* background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%); */
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    cursor: pointer;
`