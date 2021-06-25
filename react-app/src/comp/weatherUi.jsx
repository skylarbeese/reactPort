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
        <div className="text-des-5">
        <h1>Weather API</h1>
              <div className="underl"></div>
              <p> Photography branded website I worked on the UI and Frond-end development </p>
            </div>
            </div>
            <div className="link-site-git">
            <a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">
            <h2>See git repo here</h2></a>
            </div>
            </div>

      <div className="img-weath-con">
          <div className="img-weath">
          <div className="image-banner-proj " style= {{backgroundImage: `url(${Photo[2]})`}}></div>
          </div>
</div> 
      
</div> 
     



            <div className="tex-1">
            <div className="text-des-link">
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
</a>
              <h1><a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer">view the full site here!</a></h1>
              <Link to="/comp/ui">go back</Link>
            </div>
</div> 
       </div>
  
   
   </>
  );
  }
}

export default WeatherUi;