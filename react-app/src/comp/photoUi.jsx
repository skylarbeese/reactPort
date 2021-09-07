import React, { Component } from 'react'
import Photo from './../photoArr'
import Nav from "./nav"
import './UIphoto.css';
import {Link} from "react-router-dom"
class PhotoUi extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      textTile: false,
      img: false,
      imgTil: false,
      cellTil: false,
      textTil: false,
      text2Til: false,
      text3Til: false,
    }
  
  }
 
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, true);
  
  }
  handleScroll = () => {
    let lastScrollY = window.scrollY;
    console.log(lastScrollY)
    if (lastScrollY > 500 && lastScrollY < 1700) {
      //   console.log("yes")
         this.setState({
           cellTil: true
         })
    } else {
         this.setState({
           cellTil: false
           })
      }
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
     if (lastScrollY > 1800 && lastScrollY < 3000) {
      //   console.log("yes")
         this.setState({
           textTil: true
         })
    } else {
         this.setState({
           textTil: false
           })
      }
     if (lastScrollY > 1800 && lastScrollY < 4000) {
      //   console.log("yes")
         this.setState({
           imgTil: true
         })
    } else {
         this.setState({
           imgTil: false
           })
      }
      if (lastScrollY > 2000 && lastScrollY < 4000) {
        //   console.log("yes")
           this.setState({
             text2Til: true
           })
      } else {
           this.setState({
             text2Til: false
             })
        }
        if (lastScrollY > 2400 && lastScrollY < 4000) {
          //   console.log("yes")
             this.setState({
               text3Til: true
             })
        } else {
             this.setState({
               text3Til: false
               })
          }
    } 
  render() {
  return (
   <>
     <Nav />
    <div className="photoUi-con">

      <div className="title-div">
        <div className="tex">
        <div className="text-des-5">
        <h1>Photo website</h1>
              <div className="underl"></div>
              <p> Photography portfolio website. Developed in React.js and designed in Abode XD.
              </p>
            </div>
            </div>
            <div className="link-site-git">
            <a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer"><h2>See full site here</h2></a>
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">
 <h2>See git repo here</h2></a>
            </div>
            </div>
        <div className="img-pr">
         {/* <div className="one-con"> */}
         <div className="img-gal-img-4">
            
            <div className="image-banner-ui-4 ui-4" style= {{backgroundImage: `url(${Photo[27]})`}}></div>
          
      
           
           
        </div> 
            <div className="img-gal-img-1">
            
             <div className={`image-banner-ui-1 ui-1 ${this.state.cellTil ? "img-banner-show-right" : "img-banner-hide-right"}`} style= {{backgroundImage: `url(${Photo[24]})`}}></div>
           
             <div className={`image-banner-ui-1 ui-2 ${this.state.cellTil ? "img-banner-show-left" : "img-banner-hide-left"}`} style= {{backgroundImage: `url(${Photo[25]})`}}></div>
            
            
         </div> 
        {/* <div className="img-gal-img-1">
         <div className="image-banner-ui-1 ui-2" style= {{backgroundImage: `url(${Photo[18]})`}}></div>
  </div> */}
         </div>
         
            <div className="img-gal-img-3">
            <div className="th">
             <div className="image-banner-ui-3" style= {{backgroundImage: `url(${Photo[15]})`}}></div>
         
           
            </div>
           </div>
           <div className="tex">
            <div className="text-des-5">
              <h1 className={this.state.textTil ? "show-header-1" : "hide-header-1"}>Bringing it to life</h1>
              <div className={`underl ${this.state.textTil ? "show-under-1" : "hide-under-1"}`}></div>
              <p className={this.state.textTil ? "show-p-1" : "hide-p-1"}>Bringing web design to life for different forms of media. </p>
            </div>
            </div>
            <div className="img-gal-img-2">
            <div className="te-con">
             <div className={`image-banner-ui-2 ${this.state.imgTil ? "img-banner-show-right" : "img-banner-hide-right"}`} style= {{backgroundImage: `url(${Photo[20]})`}}></div>
             <div className={`image-banner-ui-2 ${this.state.imgTil ? "img-banner-show-left" : "img-banner-hide-left"}`} style= {{backgroundImage: `url(${Photo[21]})`}}></div>
            </div>
            </div>
            <div className="tex">
            <div className="text-des-5">
              <h1 className={this.state.text2Til ? "show-header-1" : "hide-header-1"}>Wireframes</h1>
              <div className={`underl ${this.state.text2Til ? "show-under-1" : "hide-under-1"}`}></div>
              <p className={this.state.text2Til ? "show-p-1" : "hide-p-1"}>Creating preliminary sketches and wireframes for the initial design of all the pages of the site. Planning the flow of the website before 
                 the final prototype. </p>
            </div>
            </div>
            <div className="img-gal-img-5">
           
            <div className="image-banner-ui-5 ui-4" style= {{backgroundImage: `url(${Photo[28]})`}}></div>
          
      
           
           
        </div> 
        <div className="tex">
            <div className="text-des-5">
              <h1 className={this.state.text3Til ? "show-header-1" : "hide-header-1"}>Mockups</h1>
              <div className={`underl ${this.state.text3Til ? "show-under-1" : "hide-under-1"}`}></div>
              <p className={this.state.text3Til ? "show-p-1" : "hide-p-1"}>After the site mapping and wireframes we get to work of the final design of the website.
               </p>
            </div>
            </div>
            <div className="img-gal-img-3">
            <div className="th">
             <div className="image-banner-ui-3" style= {{backgroundImage: `url(${Photo[7]})`}}></div>
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
    {/* </div> */}
   </>
  );
  }
}

export default PhotoUi;