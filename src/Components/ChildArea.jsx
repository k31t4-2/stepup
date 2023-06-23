import React, { memo } from 'react'

const style = {
  color: "white",
  backgroundColor: "orange",
  width: "100%",
  height:"200px"
}

const ChildArea = memo((props) => {
  const { open,onClickClose } = props;

  console.log("レンダリングがまもなく開始します。");

  const data = [...Array(2000).keys()];
  console.log(data);
  console.log("レンダリング終わりました");

  return (
    <>
      {open ? (
        <div style={style}>
          <p>これは子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : (
        null)}

    </>
  )
})

export default ChildArea
