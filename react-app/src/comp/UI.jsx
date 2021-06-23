import React, { Component } from 'react'
import Photo from './../photoArr'
import {Link} from "react-router-dom"
import './UI.css';
class Ui extends Component {
  constructor(props) {
    super(props)
  
   this.state = {
       color: false
   }
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
      <div className={`Ui-con ${this.state.color ? 'black' : null}`}>
       <div className="ui-div">
        <h1>UI design</h1>
        <div className="project-con-ui">
          <div className="text-ui">

          </div>
       <div className="ui-grd-con">
          <div className="img-div-ui">
            <div className="grad-ui"></div>
            <Link to="/comp/photoUi"> phoyo </Link>
            <div className="image-banner-ui" style= {{backgroundImage: `url(${Photo[29]})`}}></div>
          
          </div>
          <div className="img-div-ui">
            <div className="grad-ui"></div>
            <Link to="/comp/photoUi"> phoyo </Link>
            <div className="image-banner-ui" style= {{backgroundImage: `url(${Photo[29]})`}}></div>
          
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