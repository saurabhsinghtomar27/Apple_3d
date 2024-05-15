import React from 'react'
import Animated from "../assets/images/logo-animated.svg"
function Loader() {
  return (
   <div className='loader'>
   <img className="logo" src={Animated} alt="logo" />
   </div>
  )
}

export default Loader