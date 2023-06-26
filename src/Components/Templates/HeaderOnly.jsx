import React from 'react'
import { Header } from '../Atoms/Layout/Header'


export const HeaderOnly = (props) => {

  const { children } = props

  return (
    <>
      <Header/>
      {children}
    </>
  )
}
