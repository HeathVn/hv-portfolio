import React from 'react'
import './Banner.css'

import teamwork from './images/teamwork.png'

const Banner = () => {
  return (
    <div className='bannerCon'>

        <img className='team' src={teamwork} alt='Inclusion icons created by Freepik - Flaticon'/>
        <div className='banner'>
        <div className='bannerInnerCon'>
           {/* <a href="https://www.flaticon.com/free-icons/inclusion" title="inclusion icons">Inclusion icons created by Freepik - Flaticon</a> */}
           
           <h3 className='inspiration'>Fueled by creativity and eager to make a positive impact on the world</h3>
        </div>
        </div>
    </div>
  )
}

export default Banner