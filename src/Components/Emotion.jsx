/** @jsxRuntime classic*/
/** @jsx jsx*/
import { jsx, css } from "@emotion/react";
import styled  from "@emotion/styled";

// 上の3行は必ず記述。
// 2行目が反映されなかったら、1行目を記述する

export const Emotion = () => {

  // Emotion１つ目の書き方
  const ContainerStyle = css`
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
  `;

  // Emotion2つ目の書き方
  const titleStyle = css({
    fontSize: "4rem",
    fontFamily:"cursive",
  })

  return (
    <div css={ContainerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>Fight</SButton>
    </div>
  )
}

const SButton = styled.button`
  border:none;
  padding: 8px 12px;
  color: white;
  background-color: black;
  border-radius: 5px;
  font-size: 2.2rem;
  margin-top: 10px;
`
