import React from 'react'
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>私はキャンプ歴3年目のまだまだ初心者です。</h1>
      <Link to="/About/AboutDetailA">こちらでは自己紹介をしています。</Link>
      <br />
      <Link to="/AboutDetailB">キャンプを始めた経緯を説明しています。</Link>
    </>
  )
}
