import React from 'react';
import NavBar from './navbar/Navbar';
import './Front.css'
import { Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Front = () => {

    const element = < FontAwesomeIcon icon={faPhone} />

    let navigate= useNavigate();
    function openPage(){
        navigate("/ragister");
    }

    return (
        <div  id='hms' >
            <div>
                 <NavBar/>
            </div>

            <div  id='main-cont' >
                      <div>
                           <div id='murli-head'  style={{fontSize:"35px",marginTop:"100px",marginBottom:'0px',color:"white",fontWeight:"800"}}> Gir madhuli Farmhouse located in the heart of Gir Forest. </div>
                           <p className='murli-tagLine' > Gir - The last home of Asiatic Lions.</p>
                           
                           <button
                             onClick={openPage}
                                className='murli-btn'>
                                Book Now
                            </button>

                           <p  className='murli-call' style={{color:"white" , fontWeight:"600",fontSize:"18px"}}><span>Call Now </span> <a href="tel:9978475498">  <p target="blank"> {element}   +91 9978475498</p> </a></p>
                      </div>    
            </div>

             
        </div>
    );
}

export default Front;
