import React, { Component } from 'react'
import Photo from './../photoArr'
import Nav from "./nav"
import './uijob.css';
import {Link} from "react-router-dom"
class Uijob extends Component {
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
    <div className="job-con">
    <div className="title-div">
        <div className="tex">
        <div className="text-des-5">
        <h1>Job lister website</h1>
              <div className="underl"></div>
              <p> A job listing website was created using PHP and MySql.
              </p>
            </div>
            </div>
            <div className="link-site-git">
           
            <a href="https://github.com/skylarbeese/jobSite.git"  target="_blank" rel="noopener noreferrer">
 <h2>See git repo here</h2></a>
            </div>
            </div>


          <div className="job-img-con">
              <div className="job-con-im">
              <div className="job-img-left">
                  <div className="job-img">
                  <div className="image-banner-job img-j-1" style= {{backgroundImage: `url(${Photo[36]})`}}></div>
                  </div>
                </div>
                <div className="job-img-right">
                  <div className="job-img-rig rig-1">
                  <div className="image-banner-job img-j-2" style= {{backgroundImage: `url(${Photo[37]})`}}></div>
                  </div>
                  <div className="job-img-rig rig-2">
                  <div className="image-banner-job img-j-3" style= {{backgroundImage: `url(${Photo[38]})`}}></div>
                  </div>
                </div>
              </div>
          </div>





            <div className="tex-1">
            <div className="text-des-link">
            <a href="https://github.com/skylarbeese/jobSite.git"  target="_blank" rel="noopener noreferrer">view github here<i class="fa fa-github" aria-hidden="true"></i>
</a>
             
              <Link to="/comp/ui">go back</Link>
            </div>
</div> 
       </div>
  
   
   </>
  );
  }
}

export default Uijob;