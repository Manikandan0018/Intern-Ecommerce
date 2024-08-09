import React from 'react'
import logopayment from './logo.jpeg'
import "./Payment.css"
import gpay from "./gpay.png"
import paytm from "./paytm.jpg"
import phonepey from "./phonepey.jpg"

export const Payment = () => {
  const netpay =[
    
    {netid:1,netitem:"State bank of india"},
    {netid:2,netitem:"indian bank"},
    {netid:3,netitem:"bank of baroda"},
    {netid:4,netitem:"canara bank"},
    {netid:5,netitem:"Andhra Bank"},
    {netid:6,netitem:"City union Bank"}
  ]

  const order = () =>{
    window.location.href="./succ"
  }


  return (
    <>
    <div className='top-logo'>
      <img className='img-logo-top' src={logopayment} alt="" />
      <p className='checkout'>Checkout</p>
    </div>

    <div className='del-add'>
      <p className='delivery-add'>Delivery address</p>
      <p>Manikandan <br />Melmaruvathur ariyalur dt north Street <br />temple opposite <br />621719 </p>
     
      <p className='add-dell'>Add New delivery Address</p>
   
    </div>
    <div className='del-empty'></div>

    <p className='sel-pay'>Select a Payment method</p>

    <div className='your-con'>
      <p className='available-bal'>Your available balance</p>
      <div>
      <input className='inp-enter' type="text" placeholder='Enter code' />
      <button className='app'>Apply</button>
      </div>

      <p>Another Payment Method</p>
      <div className='del-empty2'></div>

      <div className='net'>
        <p><input type="checkbox" /> Cash on Delivery</p>
      <input type="checkbox" /> <span>Net Banking <select name="" id="">
        {
          netpay.map((netvalue)=>(
            <option value={netvalue.netid}>{netvalue.netitem}</option>
          ))
        }
        
        </select></span>
        </div>

      <input type="checkbox" /> <span>Other UPI Apps</span>
      <div className='payment-photo'>
        <img className='gpay' src={gpay} alt="" />
        <img className='paytm' src={paytm} alt="" />
        <img className='ph-pey' src={phonepey} alt="" />
      </div>
      <button onClick={order} className='order-now'>Order Now</button>
    </div>

   
    
    </>
  )
}
