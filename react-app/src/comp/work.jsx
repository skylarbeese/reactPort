import React, { Component } from 'react'
import Photo from './../photoArr'

class Work extends Component {
  render() {
  return (
   <>
      <div className="work-con">
          <div className="header-text-work">
              <h1>My projects</h1>
             
          </div>
          <div className="un">
              <div className="underline-header-work"></div>
              </div>
          <div className="projects">
             <div className="project-grid">
                 
                <div className="project-img proj-1">
                <div className="img-con">
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[1]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>star wars</h1>
                  </div>
                </div>
                
                <div className="project-img proj-2">
                <div className="img-con">
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[2]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>star wars</h1>
                  </div>
                </div>
                
                <div className="project-img proj-3">
                <div className="img-con">
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[3]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>star wars</h1>
                  </div>
                </div>

                <div className="project-img proj-4">
                <div className="img-con">
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[4]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>star wars</h1>
                  </div>
                </div>


             </div>
          </div>
      </div>
   </>
  );
  }
}

export default Work;