import React from 'react';
import './Footer.scss';


export default function Footer(){
    return (
       <div className="Footer">
           <div className="container">
               <div>
                 <i class="fa fa-phone"></i> Call: +91-9015066947  
               </div>
               <div>
                 <i class="fa fa-envelope"></i> mail: rajsingh.vks@gmail.com 
               </div>
               <div>
                 <i class="fa fa-github"></i> Github/ rajsingh-vks
               </div>
           </div>
       </div>
    );
}