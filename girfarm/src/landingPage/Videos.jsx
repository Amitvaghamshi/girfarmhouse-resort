import React from 'react';
import "./Videos.css";

const Videos = () => {
    return (
        <div id='vds'>
              <div>
                  <h1 style={{fontSize:"35px",marginTop:"40px",marginBottom:"50px", textAlign:"center",fontWeight:"600",color:"#6a961f"}} >Have a Glimpse of these videos
                  <hr style={{width:"10%",margin:"auto",height:"2px",backgroundColor:"#ec9f21",borderRadius:"3px"}} />
                  </h1>
                  

              </div>

              <div className='vds'>
                     <div>
                        <iframe  className='each-fm'title='f3'  src="https://www.youtube.com/embed/tk3vatkl1Y8?si=XmF4mRADT6gQtyAB"  >  </iframe>
                     </div>
                     <div>
                        <iframe  className='each-fm' title='f3' src="https://www.youtube.com/embed/_MaNgmPWFQg?si=jnzJzbDG9MMhLXW1">  </iframe>
                     </div>
                     <div>
                        <iframe className='each-fm' title='f2'  src="https://www.youtube.com/embed/7dn5OMooPbw?si=HOmVKg4FSRis145n">  </iframe>
                     </div>
                     <div>
                         <iframe className='each-fm' title='f' src="https://www.youtube.com/embed/N1NzZvfod_Q?si=bpIy_h1aYUmp3kY-">  </iframe>
                     </div>
              </div>
        </div>
    );
}

export default Videos;
