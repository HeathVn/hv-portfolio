import React, {useEffect} from 'react'
/* import Poster from './images/bg4.jpg' */

import {HeroContainer, HeroBg, ImageLeft} from './About';
import {Nav} from '../Navbar/NavbarElements'
import './About.css';
import {motion} from 'framer-motion'

import {useLocation} from 'react-router-dom';



import Aos from "aos";
import "aos/dist/aos.css";

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import HTML from '../About/images/html.png'
import CSS from '../About/images/css.png'
import JS from '../About/images/js.png'
import VS from '../About/images/visual-studio.png'
import SQL from '../About/images/sql-file.png'
import NODE from '../About/images/nodejs.png'
import REACT from '../About/images/react.png'
import GIT from '../About/images/github.png'
import FRBSE from '../About/images/firebase.png'
import MONGO from '../About/images/mongodb.png'
import HEROKU from '../About/images/heroku.png'
import Hacker from '../About/images/hacker.mp4'

import {FaUserGraduate} from 'react-icons/fa'
import {ImSearch} from 'react-icons/im'

import Lightbox from 'react-lightbox-component';
import Res from '../About/images/resume.png';
import  TypeAnimation  from 'react-type-animation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { shadows } from '@mui/system';




const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      
      backgroundImage: 'linear-gradient(95deg, #00b712 0%, #5aff15 74%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: 'white',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient(95deg, #26D701 0%, #26D701 74%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <FaUserGraduate />,
    2: <FaUserGraduate />,
    3: <ImSearch/>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const StyledStepLabel = styled(StepLabel)({
  "& .css-qivjh0-MuiStepLabel-label.Mui-completed": {
    color: "white",
    fontWeight: "bold"

  },
  "& .css-qivjh0-MuiStepLabel-label.Mui-active": {
    color: "white",
    fontWeight: "bold"
  },
  "& .css-farnub.Mui-active": {
    color: "white",
    fontWeight: "bold"
  },
  "& .css-farnub.Mui-completed": {
    color: "white",
    fontWeight: "bold"
  }


  
});

const steps = ["Bachelor's Degree in Computer Science", "Master's Degree in Information Technology", 'Job Search'];


const About = () => {
  
   



    return (
     
     <div className="main" id="main">   
       
       <div className="aboutcon" id="about">
         

        <div className="aboutcon3" >
       
        {/* <br></br> 
        <h1 className="skills">Progress</h1>
        <br></br>*/}

         <div className="stepperCon">
          <Stepper className="stepper" alternativeLabel activeStep={2} connector={<ColorlibConnector />}>
             {steps.map((label) => (
               <Step key={label}>
                 <StyledStepLabel StepIconComponent={ColorlibStepIcon}  id="label">{label}</StyledStepLabel>
               </Step>
             ))}
            </Stepper>
          </div>

          {/* <br></br>
           <h1 className="skills">Experience</h1> */}

           <div className='badgeContainer'>
            <div className="innerBorder">
            <div className="aboutcon4">
              <img src={HTML} className="html"/>
              <img src={CSS} className="css"/>
              <img src={JS} className="js"/>
              <img src={VS} className="vs"/>
           </div>
           <div className="aboutcon5">
              <img src={SQL} className="sql"/>
              <img src={NODE} className="node"/>
              <img src={REACT} className="react"/>
              <img src={GIT} className="git"/>
             
           </div>
           <div className="aboutcon6">
              <img src={FRBSE} className="firebase"/>
              <img src={MONGO} className="mongo"/>
              <img src={HEROKU} className="heroku"/>  
           </div>
           </div>
           </div>
        </div>
       

        
        {/*
         <motion.div  className="aboutcon2">
         <br></br>
         <h1 className="resume">Resume</h1>
         
        </motion.div>
        */}
         {/* <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="photobox" styles={{float:'left'}}>
                <h1 className="about1">About Us</h1>
                <motion.img location ={location} key={location.pathname} 
                whileHover={{scale:1.1}} initial='out' animate='in' exit='out' variants={bounceAnimation} 
                alt="" id = "about" className="photo" src={Poster1} style={{ height:'27vh', width:'27vh'}}/> 
           </div >

           <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="3000">
           <ChatBubble  messages = {[{"type" : 0,"image": Poster2, "text": "Hello! Welcome to HvLegacyDesigns!"},
                                                      {"type" : 0,"image": Poster2, "text": "Here at HvLegacyDesigns we offer services which cater to both your Website Development and Graphic Design needs."}]} />
           </div> 
           */}
            
       </div> 
       <div className="aboutcon7">

       <br></br>
       



        <Card sx={{ 
                       marginRight:20,
                       position:"relative",
                       paddingLeft:4,
                       paddingRight:4,
                       boxShadow:3,
                       display:'flex',
                       '@media screen and (max-width: 800px)': {
                        
                        marginLeft:0, 
                        marginRight:0,
                         
                       },
                      }}
                id="root2"
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <CardContent >
               <TypeAnimation
                  sequence={['Hello! Welcome to my web portfolio',4000]}
                  wrapper="h3"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '20em' }}
                />

                <video  width={400} height={300} loop autoPlay muted>
                   <source src={Hacker} type="video/mp4" />
                </video>
                <button className="learnMore">Learn More</button>

               </CardContent>

          </Box>
        </Card>


       </div>
  </div>

    
    )
}

export default About;
