import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceSmileWink} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMessage} from "@fortawesome/free-solid-svg-icons";

//import {faFacebook} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const happy = <FontAwesomeIcon className='fontic' icon={faFaceSmileWink}/>
    const call = <FontAwesomeIcon className='fontic' icon={faPhone}/>
     const whats = <FontAwesomeIcon className='fontic' icon={faMessage}/>
   
//    const fb = <FontAwesomeIcon className='fontic' icon={faFacebook}/>
//   const insta = <FontAwesomeIcon className='fontic' icon={faInstagram}/>
//   const youtube = <FontAwesomeIcon className='fontic' icon={faYoutube}/>



    return (
        <div style={{backgroundColor:"#ec9f21"}}>
              <div className='foot-contect'>
                    <div>
                           <span>{happy}</span>
                           <span>Happy to Assist</span>
                    </div>

                    <div>
                       <a href="tel:+91 99784 75498" target='_blank' rel="noreferrer" >
                          <span>{call}</span>
                          <span>  Call</span> 
                        </a>
                        
                    </div>

                    <div>
                        <span>{whats}</span>
                        <span>+91 9978475498</span>
                    </div>
              </div>

              <div>
                    <div className='addr'>
                          <p>Gir madhuli Farm & Resort</p>
                          <p>To : Bhojde(gir)</p>
                          <p>Taluka : Talala</p>
                          <p>District : Gir somnath</p>
                    </div>
                    <div className='copy'>
                        <p>Copyright @2024 , Designed by <a href="https://amitvaghamshi.github.io/">  @mit  </a> </p>
                    </div>
              </div>
        </div>
    );
} 

export default Footer;
