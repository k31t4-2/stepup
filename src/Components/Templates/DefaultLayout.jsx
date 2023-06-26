import React from 'react'
import { Header } from '../Atoms/Layout/Header'
import { Footer } from '../Atoms/Layout/Footer'


export const DefaultLayout = (props) => {

  const { children } = props

  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
