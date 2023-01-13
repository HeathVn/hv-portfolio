import React from 'react'
import logo from '../Footer/images/vonstyles.png'
import './Footer.css'

const Footer= () => {
    return (
        <>
           <div className="footer">
                
               
               <div className="created">
                <h1 className='hv'>HEATH</h1>
                <h4 className='copyright'>Copyright © 2023 VonStyles Designs | All Rights Reserved </h4>
                <img src={logo} width="160" height="190"/>
               </div>
              
           </div> 
        </>
    )
}

export default Footer
