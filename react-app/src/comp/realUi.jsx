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
              <p> Photography branded website I worked on the UI and Frond-end development,
                using Abode XD for designing the layout and React.js for the programming of the website. 
               
              </p>
            </div>
            </div>
            <div className="link-site-git">
            <a href="https://cocky-perlman-7185c7.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">
 <h2>See git repo here</h2></a>
            </div>
            </div>

          <div className="div-con-real">
             <div className="real-banner">
                 <div className="img-con-real">
                 <div className="image-banner-real " style= {{backgroundImage: `url(${Photo[40]})`},
               {/* {transform: `translateY(${this.state.offset * 0.5}px)`}*/}}></div>
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
              <h1>Wireframes</h1>
              <div className="underl"></div>
              <p>Creating preliminary sketches and wireframes for the initial design of all the pages of the site. Planning the flow of the website before 
                 the final prototype. </p>
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
              <h1><a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer">view the full site here!</a></h1>
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
              <p> A Real-Estate website I worked on the UI design in Abode XD, planning the layout
                by creating wireframes and mockups. Then programmed the front-end with
                HTML, CSS and the JS framework React. 
               
              </p>
            </div>
            </div>
            <div className="link-site-git">
            <a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">
 <h2>See git repo here</h2></a>
            </div>
            </div>

          <div className="div-con-real">
             <div className="real-banner">
                 <div className="img-con-real">
                 <div className="image-banner-real " style= {{backgroundImage: `url(${Photo[40]})`}}></div>
                 </div>
             </div>
             <div className="con-mo">
                 
                     <div className="home-mo">
                         <div className="home-moc">
                           <div className="image-moc-real" style= {{backgroundImage: `url(${Photo[41]})`}}></div>
                         </div>
                         <div className="text-real-con" >  
                         <div className="text-c">
                         <h1>Wireframes</h1>
              <div className="underl-t"></div>
              <p>Creating preliminary sketches and wireframes for the initial design of all the pages of the site. Planning the flow of the website before 
                 the final prototype. </p>
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