/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Pulisic from './img/chelsea pulisic.jpg'
import Rubendiaz from './img/rubendiaz.jpg'
import Ronaldo from './img/ronaldo700.jpg'
import Auba from './img/AubaChelsea.jpg'

const BodyWork = () => {
  return (
    <div>
        <h1>news feed</h1>
        <div className='bodywork'>
           <nav className='eachNews'>
                <div>
                    <img src={Pulisic} alt='pulisic' width='400'
                    />
                </div>
                <div className='newsTitle'>
                    <a href='#' className='removeLine'><h3>pulisic scoring his first goal of the season</h3></a>
                </div>
           </nav>

           
           <nav className='eachNews'>
                <div>
                    <img src={Rubendiaz} alt='pulisic' width='400'
                    />
                </div>
                <div className='newsTitle'>
                    <a href='#' className='removeLine'><h3>Liverpool suffer great loss as Ruben diaz will be out for 8 weeks due to injury</h3></a>
                </div>
           </nav>

           
           <nav className='eachNews'>
                <div>
                    <img src={Ronaldo} alt='pulisic' width='400' height='300'
                    />
                </div>
                <div className='newsTitle'>
                    <a href='#' className='removeLine'><h3>Christiano Ronaldo scored his 700th club goal</h3></a>
                </div>
           </nav>

            
            <nav className='eachNews'>
                <div>
                    <img src={Auba} alt='pulisic' width='400'
                    />
                </div>
                <div className='newsTitle'>
                    <a href='#' className='removeLine'><h3>Chelsea forward Aubameyang has scored 3 goals in his last three appearance for the club.</h3></a>
                </div>
            </nav>
        </div>
    </div>
  )
}


export default BodyWork