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
       grid1: false,
       grid2: false,
       grid2: false,
       grid2: false
   }
  }
 handleMouseEn1 = () => {
   this.setState({
     grid1: true
     
   })
  }
   handleMouseLe1 = () => {
    this.setState({
      grid1: false
    
    })
   }
    handleMouseEn2 = () => {
      this.setState({
        grid2: true
        
      })
     }
      handleMouseLe2 = () => {
       this.setState({
         grid2: false
       
       })
      }
       handleMouseEn3 = () => {
        this.setState({
          grid3: true
          
        })
       }
        handleMouseLe3 = () => {
         this.setState({
           grid3: false
         
         })
        }
         handleMouseEn4 = () => {
          this.setState({
            grid4: true
            
          })
         }
          handleMouseLe4 = () => {
           this.setState({
             grid4: false
           
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

            <div className="proj-con" onMouseOver={this.handleMouseEn1}
                    onMouseOut={this.handleMouseLe1}>
              <div className="proj-text">
              <Link to="/comp/photoUi"><div className="logo-banner-proj" style= {{backgroundImage: `url(${Photo[30]})`}}></div></Link>
              </div>
              <div className={`gra-w ${this.state.grid1 ? 'grid-w-show' : 'grid-w-hide'}` }></div>
              <div className="li-text"></div>
              <div className="gra"></div>
              <div className="proje-img">
               <div className="image-banner-proj" style= {{backgroundImage: `url(${Photo[29]})`}}></div>
             </div>
         </div>

         <div className="proj-con" onMouseOver={this.handleMouseEn2}
                    onMouseOut={this.handleMouseLe2}>
         <div className="proj-text">
              <Link to="/comp/starWarsUi"><div className="logo-banner-proj" style= {{backgroundImage: `url(${Photo[32]})`}}></div></Link>
              </div>
              <div className={`gra-w ${this.state.grid2 ? 'grid-w-show' : 'grid-w-hide'}` }></div>
              <div className="li-text"></div>
              <div className="gra star-gra"></div>
              <div className="proje-img">
               <div className="image-banner-proj " style= {{backgroundImage: `url(${Photo[2]})`}}></div>
             </div>
         </div>

         <div className="proj-con" onMouseOver={this.handleMouseEn3}
                    onMouseOut={this.handleMouseLe3}>
              <div className="proj-text">
              <Link to="/comp/weatherUi"><h1>Prog</h1></Link>
              </div>
               <div className={`gra-w ${this.state.grid3 ? 'grid-w-show' : 'grid-w-hide'}` }></div>
              <div className="li-text"></div>
              <div className="gra"></div>
              <div className="proje-img">
               <div className="image-banner-proj" style= {{backgroundImage: `url(${Photo[1]})`}}></div>
             </div>
         </div>
         
         <div className="proj-con" onMouseOver={this.handleMouseEn4}
                    onMouseOut={this.handleMouseLe4}>
              <div className="proj-text">
                <h1>Prog</h1>
              </div>
              <div className={`gra-w ${this.state.grid4 ? 'grid-w-show' : 'grid-w-hide'}` }></div>
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