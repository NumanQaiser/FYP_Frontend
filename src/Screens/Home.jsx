import React, { useEffect, useState } from "react";
import img from "../../src/Assests/security.jpg"

function Home() {

   return(
      <div className="container m-auto">

         <div className="row">
            <div className="col">
               <p className="fw-bold fs-1 text-center pt-5 mt-5 text-lowercase">
                  we Provide <span style={{color:"#22577a" ,textTransform:"uppercase" ,fontStyle:"oblique"}}>best security</span> solution to your online presence
               </p>
            </div>

            <div className="col ">
                <img src={img} alt="WebSecurity Image" style={{width:"100%" ,height:"400px" }} />
            </div>
         </div>

         <div className="mb-5">
            <p className="text-center fw-bold fs-2 text-capitalize" style={{color:"#"}}> Why choose us ?</p>
            <p className="text-center fw-medium text-capitalize" style={{color:"grey"}}>
            Join us for unparalleled protection against cyber threats. Our cutting-edge systems detect
             vulnerabilities before <span style={{fontWeight:"bold"}}>hackers do</span>, ensuring your online platform remains secure. 
             Backed by a team of experts, we swiftly resolve any issues that arise, safeguarding your
              digital assets and reputation. With our proactive approach, you can trust us to stay 
              ahead of emerging threats, providing peace of mind for your online presence. 
              Join us for comprehensive security today.
            </p>
         </div>
      </div>
   )
}

export default Home