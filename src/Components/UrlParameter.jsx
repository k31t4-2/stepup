import React from 'react'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'

export const UrlParameter = () => {

  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);


  return (
    <>
      <div>- UrlParameter Page -</div>
      <p>パラメータのidは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </>
  )
}
