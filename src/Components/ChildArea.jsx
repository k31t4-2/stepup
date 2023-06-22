import React, { memo } from 'react'

const ChildArea = memo((props) => {
  const { open } = props;

  console.log("レンダリングがまもなく開始します。");

  const data = [...Array(2000).keys()];
  console.log(data);
  console.log("レンダリング終わりました");

  return (
    <>
      {open ? (
        <p>これは子コンポーネント</p>
      ) : (
        null)}

    </>
  )
})

export default ChildArea