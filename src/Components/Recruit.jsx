import React from 'react'
import { Link } from 'react-router-dom'

export const Recruit = () => {
  const array = [...Array(100).keys()];
  console.log(array);

  return (
    <div>
      <h1>こちらは採用情報です。</h1>
      <Link to={{ pathname:"/Recruit/RecruitDetail",state:array }}>採用情報の紹介をしています。</Link>
      <br />
      <Link to="/Recruit/200">User Parameter</Link>
      <br />
      <Link to="/Recruit/200?name=KeitaSekimoto">Query Parameter</Link>
      </div>
  )
}
