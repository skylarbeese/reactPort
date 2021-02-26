import React, { Component } from 'react'
import Photo from './../photoArr'

class About extends Component {
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
       if (lastScrollY > 500 && lastScrollY < 1500) {
         console.log("yes")
         this.setState({
           textTile: true
         })
    } else {
         this.setState({
           textTile: false
           })
      }
      if (lastScrollY > 500 && lastScrollY < 1500) {
        console.log("yes")
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
      <div className={`about-con `}>
      <div className={`grad-top`}></div>
        <div className={`grad ${this.state.img ? 'grad-show' : 'grad-hide'}`}></div>
        <div className="about-header-text">
         <div className={`about-title ${this.state.textTile ? 'text-show' : 'text-hide'}`}>
             <h1>about me</h1>
             <div className="underline"></div>
         </div>
         <div className="about-info">
         
         </div>
        </div>
     
        <div className="about-text">
            <h1 className={this.state.textTile ? 'text-title-show' : 'text-title-hide'}>my journy as a web developer</h1>
            <p className={this.state.textTile ? 'text-para-show' : 'text-para-hide'}>Bacon ipsum dolor amet prosciutto tongue drumstick andouille short loin, 
                pork chop alcatra frankfurter leberkas filet mignon picanha venison spare ribs.
                 Bacon capicola spare ribs shoulder pork belly, cupim meatball ball tip 
                 landjaeger  </p> 
                  
                   <div className={`underline ${this.state.textTile ? 'text-under-show' : 'text-under-hide'}`}></div>
        </div>
        
      </div>
      <div className={`about-img`}>
        <div className="img">
                  <div className="image-banner " style= {{backgroundImage: `url(${Photo[0]})`}}></div>
                  </div>
        </div>
   </>
  );
  }
}

export default About;