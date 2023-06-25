import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Home } from '../Home'
import { RoutesAbout } from './RoutesAbout'
import { RoutesRecruit } from './RoutesRecruit'
import { Page404 } from '../Page404'


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
          render={({ match }) => (

          <Switch>
            {RoutesAbout.map((route) => (
              <Route
                key={route.path}
                path={`${match.url}${route.path}`}
                exact={route.exact}
              >
                {route.children}
              </Route>
            ))}
          </Switch>

          )}
        />

        <Route
          path="/Recruit"
          render={({ match }) => (
            <Switch>
              {RoutesRecruit.map((route) => (
                <Route
                  key={route.path}
                  path={`${match.url}${route.path}`}
                  exact={route.exact}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />



        <Route path="*">
          <Page404/>
        </Route>
      </Switch>
    </>
  )
}
