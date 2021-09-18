import React, { Component } from 'react'
import Photo from './../photoArr'
import Nav from "./nav"
import './UIphoto.css';
import {Link} from "react-router-dom"
class PhotoU extends Component {
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
     if (lastScrollY > 100 && lastScrollY < 4000) {
      //   console.log("yes")
         this.setState({
           imgTil: true
         })
    } else {
         this.setState({
           imgTil: false
           })
      }
      if (lastScrollY > 200 && lastScrollY < 4000) {
        //   console.log("yes")
           this.setState({
             text2Til: true
           })
      } else {
           this.setState({
             text2Til: false
             })
        }
        if (lastScrollY > 200 && lastScrollY < 4000) {
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
        <h1>Photo website </h1>
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
              <div class="tool-para"><h2>UI Designer</h2>
              <h2>Front end developer</h2>
              </div>
            </div>
            <div class="button-con">
            <button><a href="">Prototype</a></button>
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
              <div class="plan-para"><p >Throughout the project, I will be working to create a branded website 
                for a local photographer to showcase their work and engage with clients.</p></div>
                 <div className="plan-header ga"><h1>goals</h1></div>
                 <div class="plan-para"><p>Create a layout to display the body of 
                   work of the artist that is engaging and will be interesting to the user.</p></div>
                   <div class="plan-para"><p>Design the site so that the user will feel what the artist's style and work are. The theme should match the style of the photographer's work.</p></div>
                   <div class="plan-para"><p>Develop the site using React.js after the final design mockups are finished.</p></div>
            </div>
         </div>
        </div>







          
          
      
           
           
        </div> 
        
       

        {/*    <div className="img-gal-img-1">
            
             <div className={`image-banner-ui-1 ui-1 ${this.state.cellTil ? "img-banner-show-right" : "img-banner-hide-right"}`} style= {{backgroundImage: `url(${Photo[24]})`}}></div>
           
             <div className={`image-banner-ui-1 ui-2 ${this.state.cellTil ? "img-banner-show-left" : "img-banner-hide-left"}`} style= {{backgroundImage: `url(${Photo[25]})`}}></div>
            
            
  </div> */}
        
         </div>
     
     

            <div className="tex">
            <div className="text-des-5">
              <h1 className={ "show-header-1"}>Finding The Problem</h1>
              <div className={`underl li${ "show-under-1" }`}></div>
              <p className={ "show-p-1" }>
               I start by identifying the goals that be to be fullfilled in this project. In this case, how to engage with
               the audience by creating a place to view the artists work and learn what they are about.
                 
               </p>
            </div>
          </div> 

        {/*    <div className="img-gal-img-3">
            <div className="th">
             <div className="image-banner-ui-3" style= {{backgroundImage: `url(${Photo[15]})`}}></div>
         
           
</div> 
          
</div> */}
   <div className="img-pr">
      <div className="img-gal-img-4">
        <div class="plan-con">
          <div className="p">
              <div className="map-text">
                  <h1>Site map</h1>
                  <div className="underl"></div>
                  <p>Before anything else the Information Architecture has to be laid out to show how the content will flow through the site.</p>
              </div>
          </div>
          <div className="img-map">
          <div className="image-banner-ui-5 ui-4" style= {{backgroundImage: `url(${Photo[58]})`}}></div>
          </div>
        </div>
      </div>
   </div>
      {/*     <div className="tex">
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
</div> */}



<div className="texx">
            <div className="tex">
            <div className="text-des-5 des-5">
              <h1 className={this.state.text2Til ? "show-header-1" : "hide-header-1"}>Wireframes</h1>
              <div className={`underl ${this.state.text2Til ? "show-under-1" : "hide-under-1"}`}></div>
              <p className={this.state.text2Til ? "show-p-1" : "hide-p-1"}>Next we get to the design process planning out how the content that needs to be displayed on the site will layout.
 </p>
            </div>
            </div>
            <div className="img-gal-img-5">
           
            <div className="image-banner-ui-5 ui-4" style= {{backgroundImage: `url(${Photo[28]})`}}></div>
            
      
         </div>  
           
        </div> 
        <div className="img-gal-img-1">
         <div className="image-banner-ui-1 ui-2" style= {{backgroundImage: `url(${Photo[56]})`}}></div>
  </div> 
        
        <div className="tex">
            <div className="text-des-5">
              <h1 className={this.state.text3Til ? "show-header-1" : "hide-header-1"}>Final</h1>
              <div className={`underl li${this.state.text3Til ? "show-under-1" : "hide-under-1"}`}></div>
              <p className={this.state.text3Til ? "show-p-1" : "hide-p-1"}>After the site mapping and wireframes are completed we get to work of the final design of the website. This will
              be the final stage of placing the content, color, and typography on the pages. The final result will be what the website will look like when done.
               </p>
            </div>
            
            </div>
           {/* <div className="img-gal-img-1">
         <div className="image-banner-ui-1 ui-2" style= {{backgroundImage: `url(${Photo[57]})`}}></div>
</div> */}
  <div className="img-gal-img-3 img-3-c">
  <div className="img-con2 ">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[7]})`}}></div>
                </div>
                <div className="img-con2 img-home">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[15]})`}}></div>
                </div>
  </div>
        
         { /*  <div className="img-gal-img-3 img-3-c">
             <div className="div-fi">
                <div className="final-imgs">
                  <div className="img-fi">
                 <div className="img-con2 ">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[7]})`}}></div>
                </div>
                <div className="img-con2 img-home">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[15]})`}}></div>
                </div>
                </div>
                </div>
                <div className="img-l">
                 <div className="img-con22">
                    <div className="img-1" style= {{backgroundImage: `url(${Photo[50]})`}}></div>
                    
                  </div>
                  <div className="img-con22">
                    <div className="img-1" style= {{backgroundImage: `url(${Photo[51]})`}}></div>
                    
                  </div>
             </div>
</div> 
         { /*  <div className="th">
             <div className="image-banner-ui-3" style= {{backgroundImage: `url(${Photo[7]})`}}></div>
</div> 
            </div> */}

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

export default PhotoU;