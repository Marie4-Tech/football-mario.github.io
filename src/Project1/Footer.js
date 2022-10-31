import React from 'react'
import Logo from './img/football marioedit.png'
import Fb from './img/fb-color.png'
import In from './img/in-color.png'
import Tw from './img/tw-color.png'
import Yt from './img/yt-color.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={Logo} alt='logo' width='200' />
        </div>

        <div>
            <img src={Fb} alt='facebook' width='38' />
            <img src={In} alt='facebook' width='38' />
            <img src={Tw} alt='facebook' width='38' />
            <img src={Yt} alt='facebook' width='38' />
        </div>
    </div>
  )
}


export default Footer