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
    <div className="photoUi-con">

      <div className="title-div">
        <div className="tex">
        <div className="text-des-5">
        <h1>Photo website</h1>
              <div className="underl"></div>
              <p> Photography branded website I worked on the UI and Frond-end development,
                using Abode XD for designing the layout and React.js for the programming of the website. 
                <a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer">view the full site here </a>
                or scroll down to view my git hub.
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
            
             <div className="image-banner-ui-1 ui-1" style= {{backgroundImage: `url(${Photo[24]})`}}></div>
           
             <div className="image-banner-ui-1 ui-2" style= {{backgroundImage: `url(${Photo[25]})`}}></div>
            
            
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
              <h1>Bringing to life</h1>
              <div className="underl"></div>
              <p>Bringing web design to life for the web in diffrent forms of media. </p>
            </div>
            </div>
            <div className="img-gal-img-2">
            <div className="te-con">
             <div className="image-banner-ui-2" style= {{backgroundImage: `url(${Photo[20]})`}}></div>
             <div className="image-banner-ui-2" style= {{backgroundImage: `url(${Photo[21]})`}}></div>
            </div>
            </div>
            <div className="tex">
            <div className="text-des-5">
              <h1>Wireframes</h1>
              <div className="underl"></div>
              <p>Creating preliminary sketches and wireframes
                 for the initial design of all the pages of the 
                 site. Planning the flow of the website before 
                 the final prototype. </p>
            </div>
            </div>
            <div className="img-gal-img-5">
           
            <div className="image-banner-ui-5 ui-4" style= {{backgroundImage: `url(${Photo[28]})`}}></div>
          
      
           
           
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