import React from 'react'
import styled from "styled-components";
import { Card } from '../../Atoms/Cards/Card';
import { UserIconWithName } from "../../Molecules/User/UserIconWithName";

export const UserCard = (props) => {

  const { user } = props
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name}/>

      <SDl>
          <dt>住所</dt>
          <dd>{user.address}</dd>
          <dt>電話番号</dt>
          <dd>{user.tel}</dd>
          <dt>予約</dt>
          <dd>{user.booking}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
      </SDl>
    </Card>
  )
}

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;

  dt{
    float: left;
  }

  dd{
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`
