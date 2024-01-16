import './App.css';
import Footer from './landingPage/Footer';
import Front from './landingPage/Front';
import ImageSlider from './landingPage/ImageSlider';
import MainImg from './landingPage/MainImg';
import Rooms from './landingPage/Rooms';
import Videos from './landingPage/Videos';
import Whatsappbtn from './landingPage/Whatsappbtn';
//import {MyRouter} from "./routes/MyRouter.jsx";
import { Route,Routes  } from 'react-router-dom';
import {Ragister} from "./landingPage/Ragister.jsx";
import MetaInfo from "./landingPage/MetaInfo.jsx"

function App() {

  


  let arr=["https://i.ibb.co/6J0T9f4/Whats-App-Image-2024-01-09-at-15-06-55-0ed4c9d5.jpg","https://i.ibb.co/M166NFC/Whats-App-Image-2024-01-09-at-15-15-25-823f4494.jpg","https://i.ibb.co/2W6yKF9/Whats-App-Image-2024-01-09-at-15-27-34-503a530c.jpg","https://i.ibb.co/GFdQpPR/Whats-App-Image-2024-01-09-at-15-28-42-bb562510.jpg","https://i.ibb.co/41VMtHN/Whats-App-Image-2024-01-09-at-15-17-42-3b1987ff.jpg","https://i.ibb.co/xM2ygCN/Screenshot-1633.png","https://i.ibb.co/Jj38nHt/Whats-App-Image-2024-01-09-at-14-48-38-c3a7be6f.jpg","https://i.ibb.co/YDgrsnd/Whats-App-Image-2024-01-09-at-14-44-49-33b8dbce.jpg","https://i.ibb.co/3FFYKTg/Whats-App-Image-2024-01-09-at-16-11-11-78590b4f.jpg","https://i.ibb.co/QP2BCRh/Whats-App-Image-2024-01-09-at-14-45-34-15e4b2e0.jpg"];
  let slider=<ImageSlider  images={arr} itemsToShowMobile={1} itemsToShowDesktop={3}/>;

  let comps=[<Front/>,<MainImg/>, <Rooms/>,<Videos/>,slider,<Whatsappbtn/>, <Footer/> ];


  return (
    <div>       
         <MetaInfo/>
         <Routes>
             <Route path="/"  element={comps}/>
             <Route path="/ragister"  element={<Ragister/>}/>
         </Routes>
 
           {/* <MyRouter/> */}
    </div>
  )
}

export default App;
