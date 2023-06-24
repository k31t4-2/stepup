import React from 'react'
import { Switch, Route } from "react-router-dom"
import { About } from '../About'
import { AboutDetailA } from '../AboutDetailA'
import { AboutDetailB } from '../AboutDetailB'
import { Home } from '../Home'
import { Recruit } from '../Recruit'



export const Router = () => {
  return (
    <>
        {/* コンポーネントごとにどのページにレンダリングするか設定 */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>


          <Route
            path="/About"
            render={({ match: {url} }) => (
              <Switch>
                <Route exact path={url}>
                  <About />
                </Route>

                <Route path={`${url}/AboutDetailA`}>
                  <AboutDetailA />
                </Route>

                <Route path={`${url}/AboutDetailB`}>
                  <AboutDetailB />
                </Route>
              </Switch>
            )}
          />

          <Route path="/Recruit">
            <Recruit />
          </Route>
        </Switch>
          </>
  )
}
