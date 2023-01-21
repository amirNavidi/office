
import React from "react"
import Slide from "./components/slide.js";
import First from "./components/first.js";
import UnderPic from "./components/UnderPic.js";
import Slogan from "./components/Slogan.js";
import LeftImage from "./components/LeftImage.js"
import RightImage from "./components/RightImage.js";
import Background from "./components/Background.js";
import SignUP from "./components/SignUp";
import LogIn from "./components/LogIn.js";
import {  Route ,Routes,Navigate } from "react-router-dom";
import image1 from  "../src/images/finance-m-1-845x684.jpg"
import image2 from "../src/images/man-working-with-modern-devices-m-1-845x684.jpg"
import image3 from "../src/images/financial-application-form-m-1-845x684.jpg"
import image4 from "../src/images/business-handshake-m-1-845x684.jpg"
import "./components/main.css"
import Map from "./components/Map.js";


function App() {
  return (
   
     <div  >
       <section >
          <Slide />
          <First />
          <UnderPic />
          <Slogan />
          <LeftImage src={image1} title="1.) We talk about your business"  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." />
          <RightImage src ={image2}  title="2.) I crunch the numbers"  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." />
          <LeftImage src={image3} title="3.) You get a list of improvements"  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." />
          <RightImage src={image4}   title="4.) We let the journey beginn"  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." />
          <Background />
          


        <div className="parent" style={{width:"80%" ,marginLeft:"300px",display:"flex" ,justifyContent:"space-between"}}>
          <div style={{weight:"50%",marginBottom:"50px"}}>
            <Routes>
              <Route path="/"       element={<Navigate to="/signup" />} />
              <Route path="/login"  element={<LogIn />} />
              <Route path="/signup" element={<SignUP />} />
            </Routes>

          </div>
          <Map />
        </div>
          
          
       </section>
      
     </div>
  );
}

export default App;
