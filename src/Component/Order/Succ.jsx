import React from 'react'
import "./Succ.css"
import order from "./finalgif.gif"
import logofinal from "./logo.jpeg"
export const Succ = () => {
  return (
    <div>
        <img className='logofinal' src={logofinal} alt="" />
        <img className='finalgif' src={order} alt="" />
        <h1 className='place-suc'>Order PLaced Successfuly</h1>
    </div>
  )
}
