import React, { memo } from 'react'
import styled from "styled-components";
// import { UserContext } from '../../../Providers/UserProvider';

//値を参照することしかしないことをvalueで明示している
import { useRecoilValue } from "recoil";
import { userState } from '../../../Store/userState';

export const UserIconWithName = memo((props) => {

  console.log("UserIconWithName");

  // このコンポーネントの役割は画像と名前だけ受け取る役割なので、userを受け取らずに最初からimageと名前だけ受け取るようにする
  const { image, name } = props

  // 以下を設定するだけでglobalなstateを参照（取ってこれる）できる
  // const {userInfo} = useContext(UserContext);
  const userInfo = useRecoilValue(userState)
  const isAdmin = userInfo ? userInfo.isAdmin : false

  return (
    <SContainer>
      <SImg
        height={160}
        width={160}
        src={image}
        alt={name}
      />
      <SName>{name}</SName>
      {/* trueであれば編集という文字が表示される */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  )
})

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
const SEdit = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
