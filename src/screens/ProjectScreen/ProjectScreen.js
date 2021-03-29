import React from 'react';
import Header from '../../components/Header/Header';
import './ProjectScreen.scss';
import data from '../../data';
import { Link } from 'react-router-dom';

export default function ProductScreen(props){
    const project = data.projects.find(x => x._id === props.match.params.id);
    if (!project) {
        return <div>Product Not Found</div>
    }
    return(
        <div className="ProductScreen">
           <Header/>
            <div className="container">
                <div className="product-details">
                   <Link to="/" className="back_homepage">
                       <i className="fa fa-hand-o-left" aria-hidden="true"></i>
                       Back to Homepage
                    </Link>
                  <div className="row">
                      <div className="col-sm-9">
                         <img className="large" src={project.image} alt={project.name}/>
                         <h3>{project.name}</h3>
                      </div>
                      <div className="col-sm-3">
                          <div className="technology">
                            <h4>Technologies Used</h4>
                            <ul>
                              <li>
                                 {project.technology}
                              </li>
                            </ul>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-sm-12">
                         <div className="descripation">
                             <h2>Job Description</h2>
                             <p>{project.description}</p>
                         </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
}