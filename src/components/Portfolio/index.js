import React from 'react'

import './Portfolio.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import  {CardActionArea}  from '@mui/material';
import { Grid } from '@material-ui/core';
import { motion } from "framer-motion"
import {BsFillInfoCircleFill} from 'react-icons/bs'
import {FaEye} from 'react-icons/fa'

import CryptoConnect from '../Portfolio/images/CryptoConnect.jpeg'
import WebDev from '../Portfolio/images/webdev.jpg'
import Wavy from '../Portfolio/images/wavy.mp4'
import Jluxxe from '../Portfolio/images/jluxxe.mp4'
import Business from '../Portfolio/images/business.mp4'

import Display from '../Portfolio/images/display.png'



const Portfolio = () => {
    return (
        <div id="portfolio">
          <div className="con" >

         {/*<br></br>
          <h1 className="port">Portfolio</h1> */}
          
          <div className='displayCon'>
            <div className='displayInbetweenCon'>
              <div className='displayInnerCon'>
               <img src={Display} className="display"/>
              </div>
            </div>
          </div>

          <div className='projectsContainer'>
           
           <motion.div 
              initial={{ opacity: 0, x:150 }}
              whileInView={{ opacity: 1, x:0 }}
              transition={{ delay: 0.5, type: "spring",bounce: 0.7, duration: 2 }}
           
             className='firstRow'>
             <Card sx={{ 
                       maxWidth: 750,  
                       left:10, 
                       top:70,
                       position:"relative",
                       display:'flex',
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       },
                      }}
                id="root1"
             >
             <CardActionArea style={{display:'inline',border:'8px solid white'}}>
              <CardMedia
               component="img"
               height="300"
               width="250"
               image= {CryptoConnect}
               alt="Crypto Connect Course Project"
               sx={{ 
                 
                '@media screen and (max-width: 800px)': {
                 
                  height:240,
                  width:420
                  
                }, 
}}
             />
             </CardActionArea>

             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <CardContent sx={{ flex: '1 0 auto' }}>
                 <Typography component="div" variant="h5">
                     CryptoConnect
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                     Course Project
                 </Typography>
               </CardContent>
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
               <IconButton>
                 <BsFillInfoCircleFill />
               </IconButton>
               <IconButton >
                  <FaEye className="eye" />
               </IconButton>
              
             </Box>
             </Box>
             </Card>

             </motion.div>


             <motion.div 
             
             initial={{ opacity: 0, x:150 }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{ delay: 1, type: "spring",bounce: 0.7, duration: 2 }}
             
             className='secondRow'>
             <Card sx={{ 
                       maxWidth: 830,  
                       left:10, 
                       top:70,
                       position:"relative",
                       display:'flex',
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       },
                      }}
                id="root1"
             >
             <CardActionArea style={{display:'inline',border:'8px solid white'}}>
              <CardMedia
               component="img"
               height="350"
               width="250"
               image= {WebDev}
               alt="Crypto Connect Course Project"
               sx={{ 
                 
                '@media screen and (max-width: 800px)': {
                 
                  height:240,
                  width:420
                  
                }, 
}}
             />
             </CardActionArea>

             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <CardContent sx={{ flex: '1 0 auto' }}>
                 <Typography component="div" variant="h5">
                     VonStyles Designs
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                     Personal Project
                 </Typography>
               </CardContent>
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
               <IconButton>
                 <BsFillInfoCircleFill />
               </IconButton>
               <a href="https://webdev-business-q4gl4.ondigitalocean.app/">
                 <IconButton >
                   <FaEye className="eye" />
                 </IconButton>
               </a>
             </Box>
             </Box>
             </Card>

             </motion.div>
          </div>

 {/*
          <Grid container justify="center" spacing="" style={{}}>
               
                
             <Grid id="card"  item justify="center" xs={11} sm={6} md={4} lg={6} >
                     <Card sx={{ 
                       maxWidth: 750, 
                       marginTop:10, 
                       marginLeft:15, 
                       marginRight:1, 
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       }, 
    }}>
           <CardActionArea style={{display:'inline',border:'1px solid white'}}>
             <CardMedia
               component="img"
               height="430"
               width="370"
               image= {CryptoConnect}
               alt="Crypto Connect Course Project"
               sx={{ 
                
                '@media screen and (max-width: 800px)': {
                 
                  height:240,
                  width:420
                  
                }, 
}}
             />
             <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: CryptoCurrency 
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Network Application Development Course Project
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: NodeJS, EJS, MongoDB/Mongoose, REST API
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: <a href="https://cryptoconnect-nodejs-app.herokuapp.com/" style={{color:'white'}}>Network Based Application Development Project</a>
              </CardContent>
           </CardActionArea>
          </Card>

                    </Grid>  

                    <Grid id="card2" item justify="center" xs={11} sm={6} md={4} lg={6} >
                     
                      <Card sx={{ 
                       maxWidth: 750, 
                       marginTop:10, 
                       marginLeft:1, 
                       marginRight:1, 
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       }, 
    }}>
           <CardActionArea style={{display:'inline',border:'1px solid white'}}>
             <CardMedia
               component="iframe"
               height="440"
               width="500"
               src= {Wavy}
               alt="Crypto Connect Course Project"
               allow="autoPlay"
               
             />
             <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: WavyBabyProductions 
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Personal Project/ Client Website Build
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: Bootstrap, ReactJS, Github
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: <a href="https://flame3950.github.io/WavyBabyProductionsCollab/" style={{color:'white'}}>WavyBabyProductions Website</a>
              </CardContent>
           </CardActionArea>
          </Card>
                    </Grid>  
                



         <Grid id="card3" item justify="center" xs={11} sm={6} md={4} lg={6} >
                     
                     <Card sx={{ 
                       maxWidth: 750, 
                       marginTop:10, 
                       marginLeft:15, 
                       marginRight:1, 
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       }, 
    }}>
          <CardActionArea style={{display:'inline',border:'1px solid white'}}>
            <CardMedia
              component="iframe"
              height="440"
              width="500"
              src= {Jluxxe}
              alt="Crypto Connect Course Project"
              allow="autoPlay"
              muted={true}
            />
            <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: Jluxxe Hair
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Shopify Client Website Build/ Customization
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: Shopify, Liquid.js
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source:  <a href="https://myjluxxehair.com/" style={{color:'white'}}>JLuxxe Hair</a>
              </CardContent>
          </CardActionArea>
         </Card>
                   </Grid> 


                   <Grid  item justify="center" xs={11} sm={6} md={4} lg={6} >
                     
                     <Card sx={{ 
                       maxWidth: 750, 
                       marginTop:10, 
                       marginLeft:1, 
                       marginRight:1, 
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       }, 
    }}>
          <CardActionArea style={{display:'inline',border:'1px solid white'}}>
            <CardMedia
              component="iframe"
              height="440"
              width="500"
              src= {Business}
              alt="Crypto Connect Course Project"
              allow="autoPlay"
              muted={true}
            />
            <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: HvLegacyDesigns
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Personal React Project
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: ReactJS, CommerceJS, NodeJS
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: 
              </CardContent>
          </CardActionArea>
         </Card>
                   </Grid> 
            </Grid>

  */}
          

         
          </div>
        </div>
    )
}

export default Portfolio
