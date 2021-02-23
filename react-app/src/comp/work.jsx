import React, { Component } from 'react'
import Photo from './../photoArr'

class Work extends Component {
  render() {
  return (
   <>
   <div className="work">
      <div className="work-con">
          <div className="header-text-work">
              <h1>My projects</h1>
             
          </div>
        
              <div className="underline-header-work"></div>
          
          <div className="projects">
             <div className="project-grid">

              <div className="proj-img-con">
                <div className="project-img proj-1">
                <div className="img-con">
               
                     <div className="grad-img"></div>
               
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[1]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>Weather Api</h1>
                      <p>this app was created in React js from an api. I allows you to see
                          the weather in cities around the world. and is styled using css.
                      </p>
                  </div>
                  <div className="icon">
                  <div className="icons">
                    <div className="git">view github<i class="fab fa-github"></i></div>
                    <div className="site">visit site<i class="fas fa-angle-right"></i></div>
                  </div>
                      </div>
                </div>
              </div>  
              <div className="proj-img-con">
                <div className="project-img proj-2">
               
                <div className="img-con">
               
                     <div className="grad-img"></div>
             
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[2]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>star wars Api</h1>
                      <p>this site was created using a web api in venella Javascript, CSS and HTML.
                          the site holds meny emelents that were made with . and style with css. 

                      </p>
                  </div>
                  <div className="icon">
                  <div className="icons">
                    <div className="git">view github<i class="fab fa-github"></i></div>
                    <div className="site">visit site<i class="fas fa-angle-right"></i></div>
                  </div>
                      </div>
                </div>
                </div>
                <div className="proj-img-con">
                <div className="project-img proj-3">
               
                <div className="img-con">
               
                     <div className="grad-img"></div>
            
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[3]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>Photo gallery </h1>
                      <p>this site was created for a local photography buisness. created using intuitve clean UI 
                          branding the product that is being sold. this site was created using React.js.
                      </p>
                  </div>
                  <div className="icon">
                  <div className="icons">
                    <div className="git">view github<i class="fab fa-github"></i></div>
                    <div className="site">visit site<i class="fas fa-angle-right"></i></div>
                  </div>
                  </div>
                </div>
                </div>
                <div className="proj-img-con">
                <div className="project-img proj-4">
               
                <div className="img-con">
               
                     <div className="grad-img"></div>
            
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[4]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>Job Listing Site</h1>
                      <p> this site allows you to view and list jobs after setting up an account and password
                          you can search for any type of job you are looking for. created using OOP PHP and bootstrap
                      </p>
                  </div>
                  <div className="icon">
                  <div className="icons">
                    <div className="git">view github<i class="fab fa-github"></i></div>
                    <div className="site">visit site<i class="fas fa-angle-right"></i></div>
                  </div>
                      </div>
                </div>
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