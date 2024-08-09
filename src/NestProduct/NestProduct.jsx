import React from 'react'
import logo from "./logo.jpeg"
import "./NestProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'


import Select from 'react-select'


export const NestProduct = () => {

  const option = [
    {label:30, value:1},
    {
     label:32, value:2
    },
    {
      label:34, value:3
    }
  ]

  const pay = () =>{
    window.location.href="/payment"
  }

  const table1 = [
    {id:1, value1:"Material Composition", value2:"100% Cotton"},
    {id:2, value1:"Fit type", value2:"Classic Fit"},
    {id:3, value1:"Sleeves type", value2:"Long Sleeves"},
    {id:4, value1:"Collor Style", value2:"Spread Collar"},
    {id:5, value1:"Country of Origin", value2:"india"}
  ]

  const option2 = [
    {id:1, label:1},
    {id:2, label:2},
    {id:3, label:3},
    {id:4, label:4},
    {id:5, label:5}

  ]
  return (
    <>
    <div className='top-con'>
        <div className='logo-con'>
        <img className='logo-side' src={logo} />
        </div>

        <div className='catagory'>
            <p className='logo-name'>ByCorner Fashion</p>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>SportsWear</p>
            <p>Sales & Deals</p>
            <p>Home</p>
        </div>
    </div>


    <div className='kkk'>
        <div className='in-smallimg'>
        <img className='s-img1'  src="https://m.media-amazon.com/images/I/51ojtoXIcaL._SY741_.jpg"/>
        <img className='l-img1' src="https://m.media-amazon.com/images/I/51ojtoXIcaL._SY741_.jpg"/>

        <img className='s-img2' src="https://m.media-amazon.com/images/I/51MKZziyGhL._SY550_.jpg"  />
        <img className='l-img2' src="https://m.media-amazon.com/images/I/51MKZziyGhL._SY550_.jpg"  />

        <img className='s-img3' src="https://m.media-amazon.com/images/I/51+4UBgLC2L._SY550_.jpg"  />
        <img className='l-img3' src="https://m.media-amazon.com/images/I/51+4UBgLC2L._SY550_.jpg"  />

        <img className='s-img4' src="https://m.media-amazon.com/images/I/51q68s48h+L._SY550_.jpg"  />
        <img className='l-img4' src="https://m.media-amazon.com/images/I/51q68s48h+L._SY550_.jpg" />


   </div>

    </div>

   <div className='po'>
    <p>Rating<p className='rating-img'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></p></p>
    <span className='visit-blue'>Visit the Louis Philippe Store</span>
    <p className='louis'>Louis Philippe Permapress Regular Fit
    <br />Breathable and Softer Hand Feel Textured
    <br />Formal Shirt</p>
   <a className='search-thispage'> Search this page</a>
   <div className='empty-code1'></div>
  <p className='amount'> <FontAwesomeIcon icon={faIndianRupeeSign} />1,900 </p>
  <span>include of all taxes</span>
  <p><pold className="emibold">EMI</pold> starts at <FontAwesomeIcon icon={faIndianRupeeSign} />160. No Cost EMI available <span className='emioption'>EMI option </span></p>
  
  
  <div className='empty-con2'></div>
  <p className='off'>offers</p>
  <div  className='emi-double'>
    <div  style={{display:"flex",justifyContent:"center",width:"200px"}} className='emi1'>
    <p className='emi-double-child'> <bold className="no-cost"> No Cost EMI </bold><br />Upto <FontAwesomeIcon icon={faIndianRupeeSign} />148.57 EMI <br />interest saving on... <br />   <span className='offer1'>1 offer <FontAwesomeIcon icon={faChevronRight} /></span>
</p>
   </div>

   <div style={{display:"flex",justifyContent:"center",width:"200px"}} className='emi2'>
  
   <p><bold className='partner-offer'>Partner Offer</bold><br /> 
  <span className='partner-child'>Get GST invoice and <br />save up to 28% on… <br /><span className='offer2'>
1 offer <FontAwesomeIcon icon={faChevronRight}/></span>
</span></p>
   </div>
  </div>

  </div>
  
<div className='select-container'>
<p style={{fontSize:"17px"}} className='size-name'>size:</p>

<select >
  {
    option.map(option =>(
      <option value={option.value}>{option.label}</option>

    ))
  }
 
</select>
</div>

<div className='colorSize'>
<img style={{marginTop:"10px", border:"1px solid"}}  className='smalimage1' src="https://m.media-amazon.com/images/I/51ojtoXIcaL._SY741_.jpg"/>
</div>

<div className='productDetail'>
<p style={{marginTop:"10px", fontWeight:"500"}}> Product details</p>
<table  className='tt'>
    {
      table1.map((item) => (
        <tr className='table-row' key={item.id}>
          <td >{item.value1}</td>
          <tr>{item.value2}</tr>
        </tr>

      
      ))
    }
 
</table>

</div>


<div  className='limpro'>
  <img style={{marginTop:"20px", width:"50px", height:"40px"}} className='lim' src="https://m.media-amazon.com/images/G/31/img15/rcx-events/test/HQP_VQL2._CB485935692_.png" alt="" />
  <p style={{marginTop:"16px"}}>Please note that orders which exceed the quantity limit will be auto-canceled. This is applicable across sellers.</p>
</div>


<div style={{display:"flex", width:"400px", height:"590px", flexDirection:"column",justifyContent:"center",alignItems:"center"}} className='order-con'>
  <p style={{fontSize:"30px",marginTop:"20px",marginRight:"170px"}}><FontAwesomeIcon icon={faIndianRupeeSign} />1,900</p>
  <p>Rating<p className='rating-img2'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></p></p>

  <p style={{color:"red"}}><FontAwesomeIcon icon={faIndianRupeeSign} />80 delivery <span>Saturday, 24 August.</span></p>
  <p><bold style={{fontWeight:"500"}}>Order within </bold> <span style={{fontSize:"13px"}}>16 hrs 34 mins.</span></p>
  <span>Detail</span>
  <p><FontAwesomeIcon icon={faLocationDot} /> <span style={{color:"blue",fontSize:"13px"}}>Delivery to <bold style={{color:"black"}}>Madurai 625002</bold></span></p>
  <p style={{color:"green"}}>Update Location</p>

  <p style={{fontSize:"20px",fontWeight:"6`00",color:"orangered"}}>In Stock</p>
  <p>Quantity: <select>
    {
      option2.map((option2) => (
        <option value={option2.id}> {option2.label}</option>
      ))
    }
    
    </select></p>  
   <div>
    <button  className='add-cart'>Add to Cart</button>
    <button onClick={pay} className='buy-now'>Buy Now</button>
    </div>
    <p><FontAwesomeIcon icon={faLock} /> Secure transaction</p>
</div>




    </>
  )
}
