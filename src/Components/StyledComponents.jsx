import React from 'react'
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <Button>FIGHT!</Button>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  color:black;
  border: skyblue 2px solid;
  border-radius: 20px;
  padding:1.6rem;
  margin: 0 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Title = styled.p`
  font-size: 4rem;
`
const Button = styled.button`
  border:none;
  padding: 8px 12px;
  color: white;
  background-color: black;
  border-radius: 5px;
  font-size: 2.2rem;
  margin-top: 10px;
`
