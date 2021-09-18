import React, { Component } from 'react'
import Photo from './../photoArr'
import Nav from "./nav"
import './weatherUi.css';
import {Link} from "react-router-dom"
class WeatherUi extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      textTile: false,
      img: false
    
    }
  
  }
 
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, true);
  
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
    <div className="weatherUi-con">
     <div className="weat">



      <div className="weath-text">
        <div className="tex">
        <div className="text-des-5 wet-5">
        <h1>Weather App</h1>
              <div className="underl"></div>
              <p>   A weather app designed for mobile devices. This app was created from a weather API. </p>
            </div>
            </div>
            <div className="link-site-git">
            <a href="https://relaxed-goldberg-1fd44d.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/WeatherApp_Api.git"  target="_blank" rel="noopener noreferrer">
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
               </div>
               <div class="role-text">
                 <div class="tool-header"><h1>My Role</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>UI Designer</h2>
                 
                 </div>
                 <div class="tool-para"><h2>Front end development</h2>
                 
                 </div>
               </div>
               <div class="button-con">
               <button><a href="https://xd.adobe.com/view/7e1a5a29-1ad8-4d2c-88d1-e0b1ad869166-2b49/">Prototype</a></button>
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
                 <div class="plan-para"><p > This project will be an update to the original design and layout of the app. I will be redesigning the UI of the app developed in React.</p></div>
                    <div className="plan-header ga"><h1>goals</h1></div>
                    <div class="plan-para"><p>Create a better, more modern looking UI for the site.</p></div>
                      <div class="plan-para"><p>Design a sliding menu to allow the user more options to change the look of the app's interface.</p></div>
               </div>
            </div>
           </div>
   </div> 



   <div className="tex">
            <div className="text-des-5">
              <h1 className={ "show-header-1"}>wireframes</h1>
              <div className={`underl li${ "show-under-1" }`}></div>
              <p className={ "show-p-1" }>
              I start by wireframing the new design layout, getting an idea of what I want the new user interface of the site to be like.
                 
               </p>
            </div>
            
            </div>






      <div className="img-weath-con">
          <div className="img-weath">
          <div className="image-banner-proj-weat " style= {{backgroundImage: `url(${Photo[59]})`}}></div>
          <div className="image-banner-proj-weat " style= {{backgroundImage: `url(${Photo[60]})`}}></div>
          </div>
      </div> 
      
</div> 
     

<div className="tex">
            <div className="text-des-5">
              <h1 className={"show-header-1"}>Final steps</h1>
              <div className={`underl li${ "show-under-1"}`}></div>
              <p className={"show-p-1"}>After completing the wireframes, we get to flesh out the final design of the app. Adding the photos and color schemes of the light and dark modes. Then completing the Prototyping of the app in Abode XD.
               </p>
            </div>
            
            </div>
            <div className="img-final-con-light">
              <div className="img-final-1">
               <div className="image-banner-proj-weat " style= {{backgroundImage: `url(${Photo[61]})`}}></div>
               <div className="image-banner-proj-weat " style= {{backgroundImage: `url(${Photo[62]})`}}></div>
               <div className="image-banner-proj-weat " style= {{backgroundImage: `url(${Photo[63]})`}}></div>
                <div className="image-banner-proj-weat " style= {{backgroundImage: `url(${Photo[64]})`}}></div>
               </div>
            </div>
         
       

            <div className="tex-1">
            <div className="text-des-link">
            <a href="https://github.com/skylarbeese/WeatherApp_Api.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
</a>
              <h1><a href="https://relaxed-goldberg-1fd44d.netlify.app/"  target="_blank" rel="noopener noreferrer">view the full site here!</a></h1>
              <Link to="/comp/ui">go back</Link>
            </div>
</div> 
       </div>
  
   
   </>
  );
  }
}

export default WeatherUi;