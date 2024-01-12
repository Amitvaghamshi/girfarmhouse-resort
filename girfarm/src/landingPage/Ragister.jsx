import React from 'react';
import "./Ragister.css";
// import {emailjs}
import { useNavigate } from 'react-router-dom';

export const Ragister = () => {

    let navigate=useNavigate();

    let data=React.useRef({
        name:"",
        number:"",
        people:"",
        startdate:"",
        enddate:"",
        email:""
    });

    function handleInps(event){
         let name=event.target.name;
         let val=event.target.value;

         data.current[name]=val;

    }

    function validDetails(){
          if(data.current.name===""){
             alert("Enter Your Name");
             return false;
          }else if(data.current.number===""){
            alert("Enter Your Number");
            return false;
          }else if(data.current.email===""){
            alert("Enter Your Email");
            return false;
          }else if(data.current.startdate===""){
            alert("Enter StartDate");
            return false;
          }

          return true;
    }

    // function getdata(e){
    //     e.preventDefault();
    //      console.log(data.current);
    // }

    function sendMail(e){
        e.preventDefault();
        let check=  validDetails();
        if(!check){
            return;
        }

        let startDate= new Date(data.current.startdate).toLocaleDateString("en-IN")
        let endDate= new Date(data.current.enddate).toLocaleDateString("en-IN")

        let message=`You have new Ragistation from ${data.current.name} with ${data.current.people} person  whose mobile number is ${data.current.number} and mail is ${data.current.email} and coming from  ${startDate} to  ${endDate} `

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "service_id": "service_j7mgpoa",
        "template_id": "template_z8w3yvq",
        "user_id": "lXvySMDPuoNJ64Yt5",
        "template_params": {
            "from_name": data.current.email,
            "to_name":"girmadhuli@gmail.com",
            "message": message
        }
        });


        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.emailjs.com/api/v1.0/email/send", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
        alert("Your details sended Sucessfully they will get back to you soon");
        navigate("/");

    }

    return (
          <div>
               <div>

               </div>

               <div className='fmgs' >
                      <div>
                         <p>Book Inquiry</p>
                      </div>
                      <form action="" className='fmpart'>
                        <div className='eachInps'>
                           <p>Enter Name <span className='req'>*</span> </p>
                           <input className='inps' name="name"  onChange={(e)=>handleInps(e)} type="text" placeholder='Enter name' required/>
                        </div>

                        <div className='eachInps'>
                           <p> Mobile Number <span className='req'>*</span> </p>
                           <input className='inps' name="number" type="number" onChange={(e)=>handleInps(e)}  placeholder='Enter mobile number' required/>
                        </div>

                        <div className='eachInps'>
                           <p> Email <span className='req'>*</span> </p>
                           <input className='inps' name="email" type="text" onChange={(e)=>handleInps(e)}  placeholder='Enter email' required />
                        </div>

                        <div className='eachInps'>
                           <p> Number of Person <span className='req'>*</span> </p>
                           <input className='inps' name='people' type="number" onChange={(e)=>handleInps(e)}  placeholder='number of persons' required/>
                        </div>

                        <div className='eachInps'>
                           <p>Booking Date <span className='req'>*</span> </p>
                           <input name='startdate' className='inps' type="date" onChange={(e)=>handleInps(e)}   required/>
                        </div>

                        <div className='eachInps'>
                           <p>End Date  </p>
                           <input name='enddate' className='inps' onChange={(e)=>handleInps(e)}  type="date" />
                        </div>
                        
                        <button className='subbtn' type='submit' onClick={(e)=>sendMail(e)}>Submit</button>
                      </form>
               </div>
          </div>
    ); 
}

