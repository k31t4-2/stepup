import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export const RecruitDetail = () => {

  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>色々な採用情報</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero facere, fugiat iusto rerum quibusdam? Voluptate ea ex quam, fugit ut, eveniet voluptatem, similique odio provident eum cum doloremque consectetur.</p>
      <p>今日のやることは{state.length}件あります。</p>
    </div>
  )
}
