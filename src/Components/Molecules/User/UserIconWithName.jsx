import React from 'react'
import styled from "styled-components";

export const UserIconWithName = (props) => {
  // このコンポーネントの役割は画像と名前だけ受け取る役割なので、userを受け取らずに最初からimageと名前だけ受け取るようにする
  const { image,name } = props
  return (
    <SContainer>
      <SImg
        height={160}
        width={160}
        src={image}
        alt={name}
      />
      <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  border-radius: 50%;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`
