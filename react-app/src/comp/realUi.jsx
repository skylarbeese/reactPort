import React, { Component } from 'react'
import Photo from './../photoArr'
import Nav from "./nav"
import './realUi.css';
import {Link} from "react-router-dom"
class RealUi extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      textTile: false,
      img: false,
      isMobile: false,
      offset: 0,
      off: 0
    }
  
  }
  
  handleWindowResize = () => {
    let lastScroll = window.innerWidth;
    if(lastScroll < 850) {
      console.log("true")
        this.setState({isMobile: true})
    } else {
      console.log("false")
      this.setState({isMobile: false})
    }
    
 //  console.log(lastScroll)
  }
 /* handleWindowOffset = () => {
    const parallax = document.querySelector(".image-banner-real ")
    let scrollPosition = window.pageYOffset
  
    parallax.style.transform = `translateY(${scrollPosition * 0.05}px)`
  } */

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowResize);
   
   } 
  /* componentWillMount() {
    window.addEventListener("scroll", this.handleWindowOffset, true);
   
   } */
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, true);
    //window.addEventListener("scroll", this.handleWindowOffset, true);
    this.handleWindowResize()
  
  }
  componentDidMount = () => {
    
   // this.handleWindowOffset()
  //window.addEventListener("scroll", this.handleWindowOffset, true);
 /*   window.addEventListener("scroll", function () {
      const parallax = document.querySelector(".image-banner-real ")
    let scrollPosition = window.pageYOffset
  
    parallax.style.transform = `translateY(${scrollPosition * 0.05}px)`
    }) */
  }
  handleScroll = () => {
    let lastScrollY = window.scrollY;
       if (lastScrollY > 500 && lastScrollY < 1700) {
      //   console.log("yes")
         this.setState({
           textTile: true
         })
    } else {
         this.setState({
           textTile: false
           })
      }
      if (lastScrollY > 700 && lastScrollY < 1700) {
     //   console.log("yes")
        this.setState({
          img: true
        })
   } else {
        this.setState({
          img: false
          })
     }
    } 
  render() {
  return (
   <>
     <Nav />
 {this.state.isMobile ? (<><div className="real-con">
    <div className="title-div">
        <div className="tex">
        <div className="text-des-5">
        <h1>Real Estate website</h1>
              <div className="underl"></div>
              <p> 
              A Real-Estate website designed using abode XD and developed in React.js.
              </p>
            </div>
            </div>
            <div className="link-site-git">
            <a href="https://cocky-perlman-7185c7.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/react-reEs.git"  target="_blank" rel="noopener noreferrer">
 <h2>See git repo here</h2></a>
            </div>
            </div>
        
            <div className="img-gal-img-4">
            

            <div class="plan-con">
            <div class="tools">
            <div class="tools-text">
               <div class="tool-text">
                   
                 <div class="tool-header"><h1>tools</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>Abode XD</h2></div>
                 <div class="tool-para"><h2>React.js</h2></div>
               </div>
               <div class="role-text">
                 <div class="tool-header"><h1>My Role</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>UI Designer</h2></div>
                 <div class="tool-para"><h2>Front-end developer</h2>
                 </div>
               </div>
               <div class="button-con">
               <button><a href="https://xd.adobe.com/view/db04b0d7-d3e6-4da5-896f-0fa48d2cec54-8e57/">Prototype</a></button>
               </div>
             </div>
             <div class="line-h"></div>
            </div>
            <div class="plan">
               <div class="plan-text">
                 <div class="plan-header">
                   <h1>The Plan</h1>
                 </div>
                 <div class="line-v"></div>
                 <div class="plan-para"><p >The plan is to design and prototype a website that can display real estate that the user would want to buy. After the design process is finished
                   I will develop the site in React.js</p></div>
               </div>
            </div>
           </div>
           </div>



          <div className="div-con-real">
             <div className="real-banner">
                 <div className="img-con-real">
                 <div className="image-banner-real " style= {{backgroundImage: `url(${Photo[40]})`}
               }></div>
                 </div>
             </div>
             <div className="con-mo">
                 
                     <div className="home-mo">
                         <div className="home-moc">
                           <div className="image-moc-real" style= {{backgroundImage: `url(${Photo[41]})`}
                        }></div>
                         </div>
                         <div className="tex">
                         <div className="text-des-5">
              <h1> The design proccess</h1>
              <div className="underl"></div>
              <p>After the site mapping and wireframes, we get to work on the final design of the website. I wanted to create a landing page with previews of the properties available on the top banner so that users could click through to view the different properties on the site.
                 </p>
            </div>
            </div>
                             <div className="home-moc-2">
                           <div className="image-moc-real" style= {{backgroundImage: `url(${Photo[44]})`}}></div>
                           
                         </div>
                        
                        
                        
                     </div>
                
             </div>
            
          </div>
          <div className="img-gal-img-2">
            <div className="te-con">
             <div className="image-banner-ui-2" style= {{backgroundImage: `url(${Photo[46]})`}}></div>
             <div className="image-banner-ui-2" style= {{backgroundImage: `url(${Photo[47]})`}}></div>
            </div>
            </div>

            <div className="tex-1">
            <div className="text-des-link">
            <a href="https://github.com/skylarbeese/react-reEs.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
</a>
              <h1><a href="https://github.com/skylarbeese/react-reEs.git"  target="_blank" rel="noopener noreferrer">view the full site here!</a></h1>
              <Link to="/comp/ui">go back</Link>
            </div>
            </div>
    </div></>)
  : (

    <><div className="real-con">
    <div className="title-div">
        <div className="tex">
        <div className="text-des-5">
        <h1>Real Estate website</h1>
              <div className="underl"></div>
              <p> A Real-Estate website designed using abode XD.
               
              </p>
            </div>
            </div>
          {/*  <div className="link-site-git">
            <a href="https://cocky-perlman-7185c7.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">
 <h2>See git repo here</h2></a>
  </div> */}
            </div>

            <div className="img-gal-img-4">
            

            <div class="plan-con">
            <div class="tools">
            <div class="tools-text">
               <div class="tool-text">
                   
                 <div class="tool-header"><h1>tools</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>Abode XD</h2></div>
               </div>
               <div class="role-text">
                 <div class="tool-header"><h1>My Role</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>UI Designer</h2>
                 
                 </div>
               </div>
               <div class="button-con">
               <button><a href="https://xd.adobe.com/view/d1e0d19d-dac3-4f3e-9162-7d460650d393-84b3/">Prototype</a></button>
               </div>
             </div>
             <div class="line-h"></div>
            </div>
            <div class="plan">
               <div class="plan-text">
                 <div class="plan-header">
                   <h1>The Plan</h1>
                 </div>
                 <div class="line-v"></div>
                 <div class="plan-para"><p >the plan is to design and prototype a website that can display real estate that the user would want to buy.</p></div>
               </div>
            </div>
           </div>
           </div>








          <div className="div-con-real">
             <div className="real-banner">
                 <div className="img-con-real">
                 <div className="image-banner-real" style={{backgroundImage: `url(${Photo[40]})`}}></div>
                 </div>
             </div>
             <div className="con-mo">
                 
                     <div className="home-mo">
                         <div className="home-moc">
                           <div className="image-moc-real" style= {{backgroundImage: `url(${Photo[41]})`}}></div>
                         </div>
                         <div className="text-real-con" >  
                         <div className="text-c">
                         <h1>The design proccess</h1>
              <div className="underl-t"></div>
              <p>After the site mapping and wireframes we get to work of the final design of the website. I wanted to create a landing page with previews of the houses that are availible on the top banner so that users could click through to view the diffirent propprties on the site. </p>
                        </div>  
                             <div className="home-moc-2">
                           <div className="image-moc-real" style= {{backgroundImage: `url(${Photo[44]})`}}></div>
                           
                         </div>
                        </div>
                        </div>
                   
                
             </div>
            
          </div>
          <div className="img-gal-img-2">
            <div className="te-con">
             <div className="image-banner-ui-2" style= {{backgroundImage: `url(${Photo[46]})`}}></div>
             <div className="image-banner-ui-2" style= {{backgroundImage: `url(${Photo[47]})`}}></div>
            </div>
            </div>

            <div className="tex-1">
            <div className="text-des-link">
            <a href="https://github.com/skylarbeese/react-reEs.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
</a>
              <h1><a href="https://cocky-perlman-7185c7.netlify.app/"  target="_blank" rel="noopener noreferrer">view the full site here!</a></h1>
              <Link to="/comp/ui">go back</Link>
            </div>
            </div>
    </div></>
  )}
   
   </>
  );
  }
}

export default RealUi;