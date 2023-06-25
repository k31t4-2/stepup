import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const About = () => {


  // historyを使うと、Linkを使わずとも画面遷移を行うことができる
  const history = useHistory();
  const onClickDetailA = () => history.push("/About/AboutDetailA");
  const onClickDetailB = () => history.push("/About/AboutDetailB");

  return (
    <>
      <h1>私はキャンプ歴3年目のまだまだ初心者です。</h1>
      <Link to="/About/AboutDetailA">こちらでは自己紹介をしています。</Link>
      <button onClick={onClickDetailA}>自己紹介へ飛ぶ</button>
      <br />
      <Link to="/About/AboutDetailB">キャンプを始めた経緯を説明しています。</Link>
      <button onClick={onClickDetailB}>キャンプを始めた経緯を見る</button>
    </>
  )
}
