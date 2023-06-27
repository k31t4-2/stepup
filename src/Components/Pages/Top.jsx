import React from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from '../Atoms/Button/SecondaryButton';
// import { UserContext } from '../../Providers/UserProvider';

// 値は参照しないけど、更新だけしていくことを明示している
import { useSetRecoilState } from "recoil";
import { userState } from '../../Store/userState';


export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext)
  const setUserInfo = useSetRecoilState(userState)

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true})
    history.push("/users")
  };

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false})
    history.push("/users")
  }


  return (
    <SContainer>
      <h2>これはTOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
text-align: center;
`
