import React, { Component } from 'react'
import Photo from './../photoArr'

class Work extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
     
         icon1: false,
         icon2: false,
         icon3: false,
         icon4: false,
         proj: false,
         text: false,
         und: false
        }
     
      }
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
      }
      handleScroll = () => {
     let lastScrollY = window.scrollY;
        if (lastScrollY > 900) {
         
          this.setState({
            proj: true,
            text: true,
            und: true
          })
          
       
       
         } else {
          this.setState({
            proj: false,
            text: false,
            und: false
            
          })
        console.log(lastScrollY)
        }
      }
 /*    hoverHandlerOver1 = () => {
          this.setState({icon1: true})
      }
      hoverHandlerOut1 = () => {
        this.setState({icon1: false})
    }
      hoverHandler2 = () => {
        this.setState({ icon2: true})
    }
    hoverHandler3 = () => {
        this.setState({ icon3: true
        })
    }
    hoverHandler4 = () => {
        this.setState({
             icon4: !this.state.icon4})
    } */
  render() {
  return (
   <>
   <div className="work">
      <div className="work-con">
          <div className="header-text-work">
              <h1 className={this.state.text ? 'textH-show' : 'textH-hide'}>My projects</h1>
             
          </div>
        
              <div className={`underline-header-work ${this.state.und ? 'und-show' : 'und-hide'}`}></div>
          
          <div className="projects">
             <div className={`project-grid ${this.state.proj ? 'proj-show' : 'proj-hide'}`}>

              <div className={`proj-img-con `} onMouseEnter={this.hoverHandlerOver1}
              >
                <div className="project-img proj-1"  >
                <div className="img-con" >
               
                     <div className="grad-img"></div>
               
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[1]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>Weather Api</h1>
                      <p>this app was created in React js from an api. I allows you to see
                          the weather in cities around the world. and is styled using css.
                      </p>
                  </div>
                  <div className={`icon ${this.state.icon1 ? 'icon-show' : 'icon-hide'}`}>
                  <div className="icons">
                  <div className="git"><a href="https://github.com/skylarbeese/WeatherApp_Api.git"  target="_blank" rel="noopener noreferrer">view github<i class="fab fa-github"></i></a></div>
                    <div className="site"><a href="https://relaxed-goldberg-1fd44d.netlify.app"  target="_blank" rel="noopener noreferrer">visit site<i class="fas fa-angle-right"></i></a></div>
                  </div>
                      </div>
                </div>
              </div>  
              
              <div className={`proj-img-con `}  onMouseEnter={this.hoverHandler2}>
                <div className="project-img proj-2">
               
                <div className="img-con">
               
                     <div className="grad-img"></div>
             
                  <div className="proj-img" style= {{backgroundImage: `url(${Photo[2]})`}}></div>
                  </div>
                  <div className="text">
                      <h1>star wars Api</h1>
                      <p>this site was created using a web api in  Javascript, CSS and HTML.
                          
                      </p>
                  </div>
                  <div className={`icon ${this.state.icon2 ? 'icon-show' : 'icon-hide'}`}>
                  <div className="icons">
                  <div className="git"><a href="https://github.com/skylarbeese/StarWarsApi.git"  target="_blank" rel="noopener noreferrer">view github<i class="fab fa-github"></i></a></div>
                    <div className="site"><a href="https://trusting-swanson-b25497.netlify.app"  target="_blank" rel="noopener noreferrer">visit site<i class="fas fa-angle-right"></i></a></div>
                  </div>
                      </div>
                </div>
                </div>
                <div className={`proj-img-con `}  onMouseEnter={this.hoverHandler3}>
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
                  <div className={`icon ${this.state.icon3 ? 'icon-show' : 'icon-hide'}`}>
                  <div className="icons">
                  <div className="git"><a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">view github<i class="fab fa-github"></i></a></div>
                    <div className="site"><a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer">visit site<i class="fas fa-angle-right"></i></a></div>
                  </div>
                  </div>
                </div>
                </div>
                <div className={`proj-img-con `}  onMouseEnter={this.hoverHandler4}>
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
                  <div className={`icon ${this.state.icon4 ? 'icon-show' : 'icon-hide'}`}>
                  <div className="icons">
                    <div className="git"><a href="https://github.com/skylarbeese/jobSite.git"  target="_blank" rel="noopener noreferrer">view github<i class="fab fa-github"></i></a></div>
                    <div className="site"><a href=""  target="_blank" rel="noopener noreferrer">visit site<i class="fas fa-angle-right"></i></a></div>
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