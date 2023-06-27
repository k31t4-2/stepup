import React,{ createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {

  const { children } = props;

  // 実際のデータは下のように固定値ではなく、stateを定義していくことになる
  // どのコンポーネントからでも参照・変更ができるようにするため。
  const [userInfo, setUserInfo] = useState(null);

  return (
    // valueに入れた値にpropsを渡さずとも、どのコンポーネントからアクセスできる
    <UserContext.Provider value={{userInfo, setUserInfo}} >
      {children}
    </UserContext.Provider>
  )
}

// {{ *** }} これだとオブジェクトのooが返ってくる
// { *** } だとただ文字列が返ってくる
