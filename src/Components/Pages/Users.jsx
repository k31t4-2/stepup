import React from 'react'
import styled from "styled-components";
import { SearchInput } from '../Molecules/SearchInput';
import { UserCard } from '../Organisms/User/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id:val,
    name:`相模原キャンプ場${val}`,
    image:'https://source.unsplash.com/35GQ-o6oBk4',
    address:"神奈川県相模原市ooooo",
    tel:"0123456789",
    booking:"不要",
    website:"sample@.com",
   }
 })

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
      {users.map((user) => (
        <UserCard keys={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-gap: 20px;

`
