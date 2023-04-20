import React from 'react'
import logo from '../Footer/images/CoconutStudioLg.png'
import './Footer.css'

const Footer= () => {
    return (
        <>
           <div className="footer">
                
               
               <div className="created">
                <h1 className='hv'>HEATH</h1>
                <h4 className='copyright'>Copyright © 2023 Heathvonn Styles | All Rights Reserved </h4>
                <h4> Designed by Coconut Studios</h4>
                <img src={logo} width="180" height="190"/>
               </div>
              
           </div> 
        </>
    )
}

export default Footer
