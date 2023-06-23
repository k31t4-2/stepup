import React from 'react'

export const StyledJsx = () => {
  return (
    <>
      <div className='container'>
        <p className='title'>- Styled JSX- </p>
        <button className='button'>FIGHT!</button>
      </div>

      {/*デフォルトでは、hoverなどのアクションは使えない*/}
      <style jsx="true">{`
      .container {
        background-color: white;
        color:black;
        border: skyblue 2px solid;
        border-radius: 20px;
        padding:1.6rem;
        margin: 0 20px;
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .title{
        font-size: 4rem;
      }

      .button{
        border:none;
        padding: 8px 12px;
        color: white;
        background-color: black;
        border-radius: 5px;
        font-size: 2.2rem;
        margin-top: 10px;
      }
      `}</style>
    </>
  )
}
