import React from 'react'

const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <p>これは子コンポーネント</p>
      ) : (
        null)}

    </>
  )
}

export default ChildArea
