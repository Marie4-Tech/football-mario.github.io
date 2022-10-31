import React from 'react'
import Logo from './img/football marioedit.png'
import { FaBars } from "react-icons/fa"


const Header = () => {
  return (
    <header>
      <div className='header'>
      
      <div className='headitem1'>
        <FaBars />
        </div>
        <div className='headitem2'>
       <img src={Logo} alt='motivation' width="200" />
      </div>
      <form className='headitem3'>
        <input
        autoFocus
        id='search'
        type='text'
        placeholder='Search'
        
        />
      </form>
        </div>
        <hr />
    </header>
  )
}
export default Header