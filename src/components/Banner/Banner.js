import React from 'react';
import './Banner.scss';


export default function Banner(){
    return (
       <div className="Banner">
           <div className="banner-background">
               <img src="images/elevation_background.jpg" alt="Banner"/>
           </div>
           <div className="Banner_content container">
               <div className="row">
                   <div className="col-xs-6 col-sm-6">
                       <div className="Profile_details">
                         <div className="Profile_details_content">
                           <h5>Hello</h5>
                           <h1>I'm Raj Singh</h1>
                           <p>UX/UI Designer, also passionate in making beautiful App and icons</p>
                           
                            <a href="../images/Resume.jpg" download>
                              <img src="../images/download.png" alt="Download Resume" width="30"/> Download Resume
                            </a>
                          </div>
                       </div>
                   </div>
                   <div className="col-xs-6 col-sm-6">
                       <div className="Profile_img">
                         <img src="images/profile.jpg" alt="Profile"/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
}