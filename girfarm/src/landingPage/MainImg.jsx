import React from 'react';
import './MainImg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonSwimming} from "@fortawesome/free-solid-svg-icons"
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {faPersonRunning} from "@fortawesome/free-solid-svg-icons";
import {faWheatAwn} from "@fortawesome/free-solid-svg-icons";
import {faAppleWhole} from "@fortawesome/free-solid-svg-icons";
import {faCannabis} from "@fortawesome/free-solid-svg-icons";
import {faPeopleRobbery} from "@fortawesome/free-solid-svg-icons";
import {faFaceGrinHearts} from "@fortawesome/free-solid-svg-icons";
import {faCameraRetro} from "@fortawesome/free-solid-svg-icons";
import {faTent} from "@fortawesome/free-solid-svg-icons";


const MainImg = () => {


    const swim = < FontAwesomeIcon  className='font-icons'   icon={faPersonSwimming}/>
    const nature = < FontAwesomeIcon className='font-icons'  icon={faLeaf}/>
    const run = < FontAwesomeIcon className='font-icons'  icon={faPersonRunning}/>
    const agro = < FontAwesomeIcon className='font-icons'  icon={faWheatAwn}/>
    const mango = < FontAwesomeIcon className='font-icons'  icon={faAppleWhole}/>
    const natureAttractive = < FontAwesomeIcon className='font-icons'  icon={faCannabis}/>
    const dance = < FontAwesomeIcon className='font-icons'  icon={faPeopleRobbery}/>
    const wed = < FontAwesomeIcon className='font-icons'  icon={faFaceGrinHearts}/>
    const picnic = < FontAwesomeIcon className='font-icons'  icon={faCameraRetro}/>
    const tents = < FontAwesomeIcon className='font-icons'  icon={faTent}/>

    return (
        <div id='main-part'>
              <div>
                <div className='mid-img' >
                    <img className='img-only' src="https://i.ibb.co/m6RxpLn/main.jpg" alt="Gir Madhuli rooms" />
                </div>
              </div>
              <div>
                  <h1 style={{fontSize:"30px",marginTop:"40px",textAlign:"center",fontWeight:"600",color:"#6a961f"}} >Welcome to Gir madhuli Farmhouse & Resort</h1>
                  <hr style={{width:"10%",margin:"auto",height:"2px",backgroundColor:"#ec9f21",borderRadius:"3px"}} />
                  <h2 style={{fontSize:"23px",marginTop:"30px",textAlign:"center",fontWeight:"500",color:"#042929f9"}} > Facilities that GirMadhuli provide </h2>
                  <div className='my-facilities'>
                      <div className='single-face'>
                         <p>{swim}</p>
                         <p>swiming pool</p>
                      </div>

                      <div className='single-face'>
                         <p>{nature}</p>
                         <p>Nature view​ Restaurant </p>  
                      </div>

                      <div className='single-face'>
                         <p>{run}</p>
                         <p>Kids Play Area</p>
                      </div>

                      <div className='single-face'>
                         <p>{agro}</p>
                         <p>Agro Tourism</p>
                      </div>

                       <div className='single-face' >
                         <p>{mango}</p>
                         <p>Mango</p>
                      </div>

                      <div className='single-face' >
                         <p>{dance}</p>
                         <p>Siddhi Dhamaal Dance</p>
                      </div>

                      <div className='single-face' >
                         <p>{wed}</p>
                         <p>Destination Wedding</p>
                      </div>

                      <div className='single-face' >
                         <p>{picnic}</p>
                         <p>Picnic Zone</p>
                      </div>

                      <div className='single-face' >
                         <p>{tents}</p>
                         <p>comfortable tents</p>
                      </div>

                      <div className='single-face' >
                         <p>{natureAttractive}</p>
                         <p>Relaxing Nature</p>
                      </div> 

                  </div>
              </div>
        </div>        
    );
}

export default MainImg;
