import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Nav extends Component {

 constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
 
      nav: false,
      arrow: false,
      burger1: false,
      burger2: false,
      burger3: false,
      isMobile: false,
      navD: false,
      navText: false
    }
 
  }
  


  handleWindowResize = () => {
    let lastScroll = window.innerWidth;
    if(lastScroll < 690) {
      console.log('true')
        this.setState({isMobile: true})
    } else {
      this.setState({isMobile: false})
    }
   console.log(lastScroll)
  }

  handleNav = () => {
    this.setState({navD: !this.state.navD, navText: !this.state.navText})
    
   }
   // window.addEventListener('resize', this.handleWindowResize); 
   componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.handleWindowResize()
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowResize);
   }


  handleScroll = () => {
 let lastScrollY = window.scrollY;

    if (lastScrollY > 10) {
  //    console.log("yes")
      this.setState({
        nav: true,
        
      })
      
    } else if(lastScrollY > 70) {
   
     } else {
      this.setState({
        nav: false
        
      })
    
    }
   
 //   console.log(lastScrollY)
  
  }
  
  burgerHandler = () => {
    this.setState({burger1: !this.state.burger1, burger2: !this.state.burger1, burger3: !this.state.burger1})
  }
  render() {
 
  return (
   <> 
    {this.state.isMobile ?  (<>
    <nav className={``}>
    <div className={`links-con ${this.state.navD ? 'links-show' : 'links-hide'}`}>
         <div className={` div ${this.state.navText ? 'links-text-show' : 'links-text-hide'}`}><Link to="/">home</Link></div>
         <div className={` div ${this.state.navText ? 'links-text-show' : 'links-text-hide'}`}><Link to="/comp/contact">contact me</Link> </div> 
         <div className={` div ${this.state.navText ? 'links-text-show' : 'links-text-hide'}`}><Link to="/comp/ui">projects</Link> </div> 
     </div>
    <div className="nav-link" onClick={this.handleNav}>

   
    
      
    
    <div className={`burger `} onClick={this.burgerHandler}>
      <span className={` line1 ${this.state.burger1 ? 'line1-ch' : 'line1-ba'}`}></span>
        <span className={` line2 ${this.state.burger2 ? 'line2-ch' : 'line2-ba'}`}></span>
        <span className={` line3 ${this.state.burger3 ? 'line3-ch' : 'line3-ba'}`}></span>
      </div>
     </div>
     </nav>
  
       </>
      ) :
       ( 
        <nav className={` nav ${this.state.nav ? "scroll-show" : "scroll-hide"}`}>
        <div className="nav-link">
       
       <ul>
        
            <Link to="/"><li>home</li></Link>
            <Link to="/comp/contact"><li>contact me</li></Link>  
             <Link to="/comp/ui"><li>projects</li></Link>  

        </ul>
        </div>
    </nav>
        ) }
        
   </>
  );
  }
}

export default Nav;
