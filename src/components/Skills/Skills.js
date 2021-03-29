import React from 'react';
import './Skills.scss';

export default function Skills(){
    return(
        <div className="skills">
            <div className="container">
                <h2>Expertise</h2>
                <p><span>	Involved in Designing activities and web and Mobile Application Frontend Development.</span></p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="box">
                      <div className="detailing">
                        <img src="/images/skill_icons.png" alt="skill_icons"/>
                        <h4>UI/UX Design</h4>
                        <p>Involved in the requirements analysis. Involved in creation of technical specification, Designing Web and Mobile Application And Convert into Pixel perfect conversion PSD to HTML5 with Responsive.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                   <div className="box">
                     <div className="detailing">
                        <img src="/images/skill_icons2.png" alt="skill_icons"/>
                        <h4>Focused on Quality </h4>
                        <p>I would bring a focus on quality and ease of use to your system development.Further more, I work well with others always strive do something better and better. I would appreciate your keeping this inquiry confidential. </p>
                      </div>
                    </div>
                   </div>  
                   <div className="col-sm-4">
                    <div className="box">
                      <div className="detailing">
                        <img src="/images/skill_icons3.png" alt="skill_icons"/>
                        <h4>Effective Team Player </h4>
                        <p>known for creativity, flexibility and sense of humour. Strong Determination and smart work are my major strengths. Meeting deadlines in stipulated time with best of presentation and aimed towards perfection are my major assets in profession.</p>
                       </div>
                     </div>
                   </div>   
                </div>
            </div>
        </div>
    )
}