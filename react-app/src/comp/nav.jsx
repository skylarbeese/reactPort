import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Nav extends Component {

 constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
 
      nav: false,
      arrow: false
    }
 
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  handleScroll = () => {
 let lastScrollY = window.scrollY;
    if (lastScrollY > 10) {
      console.log("yes")
      this.setState({
        nav: true
      })
      
    } else if(lastScrollY > 70) {
   
     } else {
      this.setState({
        nav: false
        
      })
    
    }
   
    console.log(lastScrollY)
   
  }
  
  render() {
 
  return (
   <> 
    <nav className={`${this.state.nav ? "scroll-show" : "scroll-hide"}`}>
    <div className="nav-link">
        <ul>
        
         <Link to="/"><li>home</li></Link>
            <Link to="/comp/contact"><li>contact me</li></Link>  
          

        </ul>
        </div>
    </nav>
   </>
  );
  }
}

export default Nav;
