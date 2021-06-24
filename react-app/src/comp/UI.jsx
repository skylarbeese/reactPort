import React, { Component } from 'react'
import Photo from './../photoArr'
import {Link} from "react-router-dom"
import Nav from "./nav"
import './UI.css';
class Ui extends Component {
  constructor(props) {
    super(props)
  
   this.state = {
       color: false,
       grid: false
   }
  }
 handleMouse = () => {
   this.setState({
     grid: true
   })
 }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, true);
  
  }
  handleScroll = () => {
    let lastScrollY = window.scrollY;
    if (lastScrollY > 2000 && lastScrollY < 3000) {
        console.log("yesth")
        this.setState({
            color: true
        })

    } else {
        console.log("noth")
        this.setState({
            color: false
        })

    }
  }
    
  render() {
  return (
   <>
   <Nav />
      <div className={`Ui-con ${this.state.color ? 'black' : null}`}>
        <div className="ui-div-con">
           <div className="proj-title">
             <h1>Projects</h1>
             <div className="unde"></div>
             <p>Front-end development and UI design projects</p>
           </div>
         
        </div>
    <div className="grid-co">
        <div className="proj-grid">

            <div className="proj-con" >
              <div className="proj-text">
                <h1>Prog</h1>
              </div>
              <div className="gra-w"></div>
              <div className="li-text"></div>
              <div className="gra"></div>
              <div className="proje-img">
               <div className="image-banner-proj" style= {{backgroundImage: `url(${Photo[29]})`}}></div>
             </div>
         </div>

         <div className="proj-con">
              <div className="proj-text">
                <h1>Prog</h1>
              </div>
            <div className="gra-w"></div>
              <div className="li-text"></div>
              <div className="gra"></div>
              <div className="proje-img">
               <div className="image-banner-proj" style= {{backgroundImage: `url(${Photo[27]})`}}></div>
             </div>
         </div>

         <div className="proj-con">
              <div className="proj-text">
                <h1>Prog</h1>
              </div>
              <div className="gra-w"></div>
              <div className="li-text"></div>
              <div className="gra"></div>
              <div className="proje-img">
               <div className="image-banner-proj" style= {{backgroundImage: `url(${Photo[27]})`}}></div>
             </div>
         </div>


         </div>
       </div>
      </div>
   </>
  );
  }
}

export default Ui;