import React, {useState} from 'react';
import './portfolio.scss';
import data from '../../data';

export default function Portfolio(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
       setToggleState(index);
    }

    return(
        <div className="portfolio">
            <div className="container">
                <h2>Portfolio</h2>
                <p><span>Worked as resource for these Application.</span></p>
                
                <div className="bloc-tabs">
                    <div 
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
                    onClick={() => toggleTab(1)}
                    >All</div>
                    {/* <div 
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >Streaming</div>
                    <div 
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                    >Tab 3</div> */}
                </div>
            
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <div className="project-listing">
                        {
                        data.projects.map(project => (
                            <div key={project._id} className="project">
                                <a href={`/project/${project._id}`}>
                                    <img className="medium" 
                                        src={project.image} 
                                        alt={project.name}
                                    />
                                <h4>{project.name}</h4>
                                </a>
                            </div>
                        ))
                        }
                    </div>
                    </div>
                    {/* <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <div className="project-listing">
                            {
                                data.projects.filter(project.category === "streaming").map(project => (
                                <div key={project.category === "streaming"} className="project">
                                   
                                    <h4>{project.name}</h4>
                                    
                                </div>
                                ))
                            }
                        </div>
                        Constent2
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <h2>Content 3</h2>
                        <hr/>
                        <p>
                            Loren ipsum
                        </p>
                    </div> */}
                </div>

            
          </div>
        </div>
    )
}