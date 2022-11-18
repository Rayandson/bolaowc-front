import styled from "styled-components"


export default function Groups() {
    return (
        <GroupContainer>
            <TitleContainer>
                <h1>Grupo A</h1>
            </TitleContainer>
            <TeamsContainer>
                <TeamContainer>
                    <img src="https://aux.iconspalace.com/uploads/1967713405.png"/>
                    <p>Brasil</p>
                </TeamContainer>
                <TeamContainer>
                    <img src="https://aux.iconspalace.com/uploads/1922419712.png"/>
                    <p>Brasil</p>
                </TeamContainer>
                <TeamContainer>
                    <img src="https://aux2.iconspalace.com/uploads/378472002.png"/>
                    <p>Brasil</p>
                </TeamContainer>
                <TeamContainer>
                    <img src="https://aux.iconspalace.com/uploads/1210740017.png"/>
                    <p>Brasil</p>
                </TeamContainer>
            </TeamsContainer>
        </GroupContainer>
    )
}

const GroupContainer = styled.div`
   width: 200px;
   height: 150px;
   background-color: #FFFFFF;
   display: flex;
   flex-direction: column;
   
   border-radius: 10px;
`
const TitleContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: #550A65;
    /* background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%); */
    background-image: linear-gradient(-225deg, #473B7B 10%, #3584A7 81%, #30D2BE 10%);
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;

`

const TeamsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* border: solid 1px black; */
border-radius: 0 0 10px 10px;
`

const TeamContainer = styled.div`
    width: 100%;
    height: 30px;
    color: #6B1933;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
        width: 25px;
    }
`