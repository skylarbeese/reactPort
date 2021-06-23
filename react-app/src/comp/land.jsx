import React, { Component } from 'react'
import Photo from './../photoArr'
import {Link} from "react-router-dom"
import './Land.css';
import About from './about'
import Tech from './tech'
class Land extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            current: '',
            count: 0,
            index: 0,
            letter: '',
            arrow: false,
            text: [
              "Artist",
              "photographer",
              "Disigner"
            ],
            isDeleting: false,
            speed: 150,
            loop: 0,
            landing: false
          }
       
        
      
     
      }
     
      handleScroll = () => {
        let lastScrollY = window.scrollY;
         
     if(lastScrollY > 10) {
             console.log("yes")
             this.setState({
               arrow: true
             })
        } else {
             this.setState({
               arrow: false
            
               })
          }
        } 

     
      scrollToTop = () => {
        this.myRef.current.scrollIntoView({ behavior: 'smooth' })
    } 
  render() {
  return (
   <> 
 <div className="land-con">
     <div className="la-con">
    <div className="land-title">
     <div className="land-text">
         <h1>Hello, my name is Skylar</h1>
         <div className="und"></div>
         <p>I am a UI designer and Front-end developer</p>
     </div>
     </div>
     <div className="arrow" >
            <div className="landing-text">
               <h3>click to see more on my page</h3>
            </div>
            <h2 className={this.state.arrow ? "an-start" : ""} onClick={this.scrollToTop}><i class="fas fa-angle-down"></i></h2>
        </div>
     </div>
 </div>
 <div className="port">
 
 <Tech />
 <div className="about" ref={this.myRef}>
 <About />
 </div>
 </div>
   </>
  );
  }
}

export default Land;