import React from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Page404 = () => {

  const { history } = useHistory();

  const onCLickToTop = () => history.push("/Home");

  return (
    <div>
      <h1>Page404</h1>
      <p>ページが見つかりません。</p>
      <Link to="/Home">Topへ戻る</Link>
      <button onClick={onCLickToTop}>トップへ戻る</button>
    </div>

  )
}
