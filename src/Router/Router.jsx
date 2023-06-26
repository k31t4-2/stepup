import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { Top } from '../Components/Pages/Top'
import { Users } from '../Components/Pages/Users'
import { DefaultLayout } from '../Components/Templates/DefaultLayout';
import { HeaderOnly } from '../Components/Templates/HeaderOnly';


export const Router = () => {
  return (
    <BrowserRouter> {/* routingを使うときは必ず囲う */}
      <Switch>      {/* 画面遷移をする*/}
        <Route exact path="/"> {/*Exactを付けるのはpathの値が全部あっている時だけ */}
          <DefaultLayout>
           <Top/>
          </DefaultLayout>
        </Route>

        <Route path="/users">
          <HeaderOnly />
          <Users/>
        </Route>

      </Switch>

    </BrowserRouter>
  )
}
