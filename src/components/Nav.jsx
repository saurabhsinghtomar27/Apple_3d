import React from 'react'
import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg'
import Bag from '../assets/images/store.svg'
function Nav() {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
               <li>
                <img src={Logo} alt="apple" />
               </li>
               <li>
                <a className='link-styled'>Store</a>
               </li>
               <li>
                <a className='link-styled'>Mac</a>
               </li>
               <li>
                <a className='link-styled'>iPad</a>
               </li>
               <li>
                <a className='link-styled'>iPhone</a>
               </li>
               <li>
                <a className='link-styled'>Watch</a>
               </li>
               <li>
                <a className='link-styled'>Airpods</a>
               </li>
               <li>
                <a className='link-styled'>Tv&Home</a>
               </li>
               <li>
                <a className='link-styled'>Entertaiment</a>
               </li>
               <li>
                <a className='link-styled'>Accessories</a>
               </li>
               <li>
                <a className='link-styled'>Support</a>
               </li>
               <li>
                <img src={Search} alt="search bar" />
               </li>
               <li>
                <img src={Bag} alt="search bar" />
               </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav