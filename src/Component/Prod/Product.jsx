import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"

import logo from "./logo.jpeg"
import beauty from "./beauty.png"
import handBag from "./handbag-slide.png"
import kid from "./kid-slide.png"
import men from "./men-slide.png"
import shoe from "./shoe-slide.png"
import travel from "./travel-slide.png"
import watch from "./watch-slide.png"
import women from "./women-slide.png"
import sun from './sunglas-slide.png'
import gif from './gif.gif'
import lady from './lady.png'
import women1 from './women1.png'
import women2 from './women2.png'
import women3 from './women3.png'
import women4 from './women4.png'
import women5 from './women5.png'
import women6 from './women6.png'

import brawo1 from './brand-women2.png'
import brawo2 from './brand-men.png'
import bramen from './brand-polo.png'
import pata from './brand-women.png'
import nestvibe from './nestVibe.png'
import trending from './Trending.png'

import menshirt from "./menshirt1.jpg"
import menshirt2 from './menshirt2.jpg'
import menshirt3 from './menshirt3.jpg'
import menpant from './menpant.jpg'
import menpant2 from './menpant2.jpg'
import menshirt4 from './menshirt4.jpg'
import menshirt5 from './menshirt5.jpg'
import menshirt6 from './menshirt6.jpg'
import menshirt7 from './menshirt7.jpg'












import Marquee from 'react-fast-marquee'
import 'react-toastify/dist/ReactToastify.css';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faSortDown} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'




export const Product = () => {

  const [aagi ,setAagi] = useState(false);
  const [aagi1 ,setAagi1] = useState(false);
  const [aagi2 ,setAagi2] = useState(false);
  const [aagi3 ,setAagi3] = useState(false);
  const [aagi4 ,setAagi4] = useState(false);
  const [aagi5 ,setAagi5] = useState(false);
  const [aagi6 ,setAagi6] = useState(false);
  const [aagi7 ,setAagi7] = useState(false);
  const [aagi8 ,setAagi8] = useState(false);

const nestProduct = () => {
  window.location.href="/nestPro"

}
  
  const option = [
    {
      label: "Relevance" , value:1
    },
    {
      label: "New Arrivals" , value:2
    },
     {
      label: "Price (High to Low)" , value:3
    },
     {
      label: "Price (Low to High)" , value:4
    },
    {
      label: "Ratings" , value:5
    }, 
    {
      label: "Discount" , value:6
    },
  ]
    // useEffect(()=>{
    //     toast.success("Welcome", {position:"top-center"});
    //  });
  return (
   <>
    <div className='container'>
      
        <img className='logo' src={logo} alt="" />
        
          <input className='sear' placeholder='Search mens,womens,child product or Qr code Item.... ' type="search" />
          <div className='search-icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
       <div className='inn'>
        <p className='men'>MEN</p>
        <p className='women'>WOMEN</p>
        <p className='child'>CHILD</p>
        <p className='down'>DOWNLOAD APP</p>
        <div className='mobile'>
        <FontAwesomeIcon icon={faMobileScreenButton} />
        </div>
        <div>
          
        </div>
        <p className='cart'>Cart    <FontAwesomeIcon  icon={faCartShopping} /> </p>
       
        <p className='profile'>Profile</p>
        <div className='user'>
        <FontAwesomeIcon icon={faUser} />
        </div>
     </div>

 
      
    </div>

    <div>
      <div className='empty'></div>
      <img className='gif' src={gif} alt="" />


    </div>


    <div className='slidder'>
      <Marquee pauseOnHover autoFill="true">
        <img className='slid' src={beauty} alt="" />
        <img className='slid' src={men} alt="" />
        <img className='slid' src={women} alt="" />
        <img className='slid' src={watch} alt="" />
        <img className='slid' src={kid} alt="" />
        <img className='slid' src={handBag} alt="" />
        <img className='slid' src={shoe} alt="" />
        <img className='slid' src={sun} alt="" />
        <img className='slid' src={travel} alt="" />

        
        
        </Marquee>  
        <div className='empty'></div>
  
     </div>

     <div>
      <img className='lady' src={lady} alt="" />
     </div>

     <div className='allWomen-inner'>
      <img className='womenInner' src={women1} alt="" />
      <img className='womenInner' src={women2} alt="" />
      <img className='womenInner' src={women3} alt="" />
      <img className='womenInner' src={women4} alt="" />
      <img className='womenInner' src={women5} alt="" />
      <img className='womenInner' src={women6} alt="" />

     </div>

     <div className='filter-container'> 

     <div className='filter-con'>
<div className='sel'>
  
  <p className='pro-for'>Product For You</p>
  <p className='sort'>Sorted by : <select className='sel-opt'>
   {
    option.map(option => (
      <option className='opti' value={option.value}>{option.label}</option>
    ))
   }
  </select></p>

  <div className='fil'>
  <p> FILTERS </p>
  <p className='cle'>CLEAR ALL</p> 

</div>

<div className='spa'>
  <span className='tho-pro'>1000+ Products</span>
</div>
<div className='emp'></div>
  
</div>

<div className='color-cata'>
  <p className='nam-colo'>Color   <FontAwesomeIcon icon={faAngleDown} />
</p>
  <div className='emp'></div>
  
<div className='cat'>
<input className='cat-ser' type="search" placeholder='Search....'/>
<div className='color-ser'>
<FontAwesomeIcon icon={faMagnifyingGlass} />

</div>

  
    <div className='colo-compi'>
    <p className='colo'> Black</p>
    <p className='colo'>White</p>
    <p className='colo'>Maroon</p>
    <p className='colo'>MultiColor</p>
    <p className='colo'>Khaki</p>
    <p className='colo'>Brown</p>
    <p className='colo'>Gold</p>
    <p className='colo'>Grey</p>
    <p className='colo'>Orange</p>
    <p className='colo'>Beige</p>
    <p className='colo'>Red</p>
    <p className='colo'>Rose</p>
    <p className='colo-more'>Search More...</p>
  </div>



</div>
 
  </div>

<div>
<div className='checkbox-con'>
  <p className='catagory'>Catagory</p>
  <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Women T-shirts</span>
  </div>
  <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Analog Watches</span>
  </div> 
  <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Bedsheets</span>
  </div>
   <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Bike Covers</span>
  </div>
   <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Blouses</span>
  </div>
   <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Cups & Mugs</span>
  </div>
   <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Earrings & Studs</span>
  </div>
   <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Hair Accessories</span>
  </div> 
  <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Hair Oil</span>
  </div> 
  <div className='inn-checkbox'>
  <input className='checkbox-inp' type="checkbox" name="" id="" />
  <span className='chackbox-span'>Idols & Figurines</span>
  </div> <div className='inn-checkbox'>
  
</div>
<p className='check-show'>Show More</p>
</div>
</div>
</div>



<div className='brand-con'>
  <img className='brand-item' src={brawo1} alt="" />
  <img className='brand-item' src={brawo2} alt="" />
  <img className='brand-item' src={bramen} alt="" />
  <img className='brand-item' src={pata} alt="" />
   
</div>

<div className='trend-con'>
  <img className='trend-im' src={trending} alt="" />
</div>
</div>


<div>
  <img className='nestvibe' src={nestvibe} alt="" />
</div>


<div onClick={nestProduct} className='menitem-con'>
  <div className='inmen-con'>
  <div  className={aagi ? "aagi clicked": "aagi"} onClick={()=> {
    aagi ? setAagi(false): setAagi(true);

  }
  }
  
>

  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menshirt} alt="" />


  <span  className='menitem-span'>Louis Philippe <br></br>
  Permapress Regular Fit Wrinkle resistant<br></br>
  Solid formal Trouser</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,900 <strike>2,100</strike> (15% off)</span>
  <span className='freedel-span'>FREE Delivery by ByCorner</span>
  <button  className='buy-bt'>Buy</button>
  
</div>

<div className='inmen-con'>
  
<div  className={aagi1 ? "aagi1 clicked": "aagi1"} onClick={()=> {
    aagi1 ? setAagi1(false): setAagi1(true);

  }
  }
  
  >
  <FontAwesomeIcon icon={faHeart} />
  </div>

  <img className='menitem' src={menshirt2} alt="" />
  <span className='menitem-span'>Louis Philippe <br /> Regular Fit Cotton Silky Smooth Touch <br /> Soloid Polo Shirt</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} /> 2,349 <strike>3,000</strike> (23% off)</span>
  <span className='freedel-span'>FREE Delivery by ByCorner</span>
  <button  className='buy-bt'>Buy</button>
</div>

<div className='inmen-con'>
<div  className={aagi2 ? "aagi2 clicked": "aagi2"} onClick={()=> {
    aagi2 ? setAagi2(false): setAagi2(true);

  }
  }

  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menpant} alt="" />
  <span className='menitem-span'>Louis Philippe <br /> Permapress Regular Fit Wrinkle Resistence <br />Solid Formal Pant</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />1,900 <strike>2,000</strike> (10% off)</span>
  <span className='freedel-span'>FREE Delivery By ByCorner</span>
  <button  className='buy-bt'>Buy</button>

</div>

<div className='inmen-con'>
<div  className={aagi3 ? "aagi3 clicked": "aagi3"} onClick={()=> {
    aagi3 ? setAagi3(false): setAagi3(true);

  }
  }

  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menshirt3} alt="" />
  <span className='menitem-span'>Regular Fit Wrinkle Resistance Premium <br /> Cotton Solid Formal Shirt <br />Perapress Regular Fit Wrinkle Resistant</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />1,200 <strike>2,000</strike> (15% off) </span>
  <span className='freedel-span'>FREE Delivery By ByCorner</span>
  <button  className='buy-bt'>Buy</button>

</div>

<div className='inmen-con'>
<div  className={aagi4 ? "aagi4 clicked": "aagi4"} onClick={()=> {
    aagi4 ? setAagi4(false): setAagi4(true);

  }
  }

  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menshirt4} alt="" />
  <span className='menitem-span'>Regular Fit Cotton with Stretch <br /> Soft Finish Golf Leisure Polo Shirt <br />Solo Formal Shirt</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />1,640 <strike>3,000</strike> <span>(40% off)</span></span>
  <span className='freedel-span'>FREE Delivery By Corner</span>
  <button  className='buy-bt'>Buy</button>

</div>

<div className='inmen-con'>
<div  className={aagi5 ? "aagi5 clicked": "aagi5"} onClick={()=> {
    aagi5 ? setAagi5(false): setAagi5(true);

  }
  }
  
  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menpant2} alt="" />
  <span className='menitem-span'>Permapress Regular Fit Wrinkle Resistant <br />Soid Formal Trouser <br />Soft Finish Golf polo Pant</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />2,300 <strike>3,000</strike> (30% off)</span>
  <span className='freedel-span'>FREE Delivery By ByCorner</span>
  <button  className='buy-bt'>Buy</button>

</div>

<div className='inmen-con'>
<div  className={aagi6 ? "aagi6 clicked": "aagi6"} onClick={()=> {
    aagi6 ? setAagi6(false): setAagi6(true);

  }
  }
  
  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menshirt5} alt="" />
  <span className='menitem-span'>Loise Philipee <br /> Regular Fit Cotton Silky Smooth Touch <br />solid polo T-shirt</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />700 <strike>1,300</strike> <span>(20% off)</span></span>
  <span className='freedel-span'>FREE Delivery By ByCorner</span>
  <button  className='buy-bt'>Buy</button>

</div>

<div className='inmen-con'>
<div  className={aagi7 ? "aagi7 clicked": "aagi7"} onClick={()=> {
    aagi7 ? setAagi7(false): setAagi7(true);

  }
  }
  
  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menshirt6} alt="" />
  <span className='menitem-span'>Louis Philippe <br />Regular Slim fit solid polo T-Shirt <br />solid cottton T-shirt</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />450 <strike>1,300</strike> <span>(20% off)</span></span>
  <span className='freedel-span'>FREE Delivery By ByCorner</span>
  <button  className='buy-bt'>Buy</button>

</div>

<div className='inmen-con'>
<div  className={aagi8 ? "aagi8 clicked": "aagi8"} onClick={()=> {
    aagi8 ? setAagi8(false): setAagi8(true);

  }
  }
  
  >
  <FontAwesomeIcon icon={faHeart} />
  </div>
  <img className='menitem' src={menshirt7} alt="" />
  <span className='menitem-span'>Louis Philippe <br />Slim Fit Solid Polo T-Shirt <br /> Cooton T-Shirt</span>
  <span className='price-span'><FontAwesomeIcon icon={faIndianRupeeSign} />900 MRP: <strike>1,500</strike> <span>(30% off)</span></span>
  <span className='freedel-span'>FREE Delivery By ByCorner</span>
  <button  className='buy-bt'>Buy</button>

</div>



</div>

<div className='show-con'>
  <a className='in-show'>
    Show all Result
  </a>
</div>

<div className='end-con'>
  <div className='in-back'>
    <p>Back to top</p>
  </div>

  
  <div className='end-get'>
    <a>Get to Know Us</a>
    <a>About Us</a>
    <a>Careers</a>
    <a>Press Releases</a>
    <a>Amazing Science</a>
  </div>

  <div className='connect'>
    <p>Connect With Us</p>
    <p>Facebook</p>
    <p>Twitter</p>
    <p>Instagram</p>
  </div>

  <div className='make'>
    <a>Make Money With Us</a>
    <a>Sell on Amazing</a>
    <a>ByCorner Global Selling</a>
    <a>Became An Affiliate</a>
  </div>

  <div className='end-hel'>
    <a>Let Us Help You</a>
    <a>COVID-19 and Amazing</a>
    <a>Your Account</a>
    <a>100% Purchase Protection</a>
  </div>
</div>


   </>
  )
}
