import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div><img src="images/dices.png" alt="" /></div>
        <div className='content'>
            <h1>Dise Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div `
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

.content {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;
const Button = styled.button`
background-color: black;
color: white;
padding: 10px 18px;
width: 220px;
border: none;
border-radius: 5px;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`;