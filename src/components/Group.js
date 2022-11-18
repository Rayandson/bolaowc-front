import styled from "styled-components"


export default function Groups({group}) {
    return (
        <GroupContainer>
            <TitleContainer>
                <h1>Grupo {group.group}</h1>
            </TitleContainer>
            <TeamsContainer>
            {group.countries.map((country) => {
                return(
                <TeamContainer>
                    <img src={country.flag}/>
                    <p>{country.country}</p>
                </TeamContainer>
                )
            })}
                
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
align-items: center;
/* border: solid 1px black; */
border-radius: 0 0 10px 10px;
`

const TeamContainer = styled.div`
    width: 80%;
    height: 30px;
    color: #6B1933;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 25px;
    }
`