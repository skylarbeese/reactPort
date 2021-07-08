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
      isMobile: false
    
    }
  
  }
  
  handleWindowResize = () => {
    let lastScroll = window.innerWidth;
    if(lastScroll > 850) {
      console.log("true")
        this.setState({isMobile: true})
    } else {
      console.log("false")
      this.setState({isMobile: false})
    }
    
 //  console.log(lastScroll)
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowResize);
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
                             <h1>Title text</h1>
                             <p>Bacon ipsum dolor amet bacon pastrami chuck venison, 
                                 kielbasa sirloin turkey. Frankfurter landjaeger 
                                 alcatra prosciutto boudin. Chicken rump ham, 
                                 kevin kielbasa pork belly salami cupim. 
                                 Tail shoulder pork belly brisket porchetta. 
                                 Flank pastrami doner rump chislic shoulder.</p>
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
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
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
              <p> Photography branded website I worked on the UI and Frond-end development,
                using Abode XD for designing the layout and React.js for the programming of the website. 
               
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
                       
                         <div className="text-c">
                             <h1>Title text</h1>
                             <p>Bacon ipsum dolor amet bacon pastrami chuck venison, 
                                 kielbasa sirloin turkey. Frankfurter landjaeger 
                                 alcatra prosciutto boudin. Chicken rump ham, 
                                 kevin kielbasa pork belly salami cupim. 
                                 Tail shoulder pork belly brisket porchetta. 
                                 Flank pastrami doner rump chislic shoulder.</p>
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
            <a href="https://github.com/skylarbeese/ReactPhoto.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
</a>
              <h1><a href="https://stoic-lovelace-987189.netlify.app/"  target="_blank" rel="noopener noreferrer">view the full site here!</a></h1>
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