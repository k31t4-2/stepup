import React from 'react'
import style from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>- CSS Modules -</p>
      <button className={style.button}>Fight!</button>
    </div>
  )
}
