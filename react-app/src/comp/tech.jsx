import React, { Component } from 'react'


class Tech extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
 
     git: false
    }
 
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  handleScroll = () => {
 let lastScrollY = window.scrollY;
    if (lastScrollY > 500 && lastScrollY < 1100) {
     
      this.setState({
        git: true
        
      })
      
   
   
     } else {
      this.setState({
        git: false
       
        
      })
    console.log(lastScrollY)
    }
  }
  render() {
  return (
   <>
 
    <div className="tech-con">
  
     <div className="boxes">
     <div className="title-1">
           <h1> Web languages </h1>
         </div>
        <div className="box">
        
        
           <div className="lau-con ">
            <h1 className={`html ${this.state.git ? 'html-show' : 'html-hide'}`}>HTML(5)</h1>
            <div className="und-lau"></div>
           </div>
           <div className="lau-con ">
            <h1 className={`css ${this.state.git ? 'css-show' : 'css-hide'}`}>CSS(3)</h1>
            <div className="und-lau"></div>
           </div>
           
          <div className="lau-con ">
        
               <h1 className={`js ${this.state.git ? 'js-show' : 'js-hide'}`}>Javascript</h1>
               <div className="und-lau"></div>
         </div>
       
         <div className="lau-con ">
         
           <h1 className={`react ${this.state.git ? 'react-show' : 'react-hide'}`}>React.js</h1>
           <div className="und-lau"></div>
          </div>
      
      {/* <div className="lau-con ">
        
            <h1 className={`php ${this.state.git ? 'php-show' : 'php-hide'}`}>PHP</h1>
            <div className="und-lau"></div>
           </div>
          
           <div className="lau-con ">
          
            <h1 className={`spl ${this.state.git ? 'sql-show' : 'sql-hide'}`}>MySql</h1>
            <div className="und-lau"></div>
  </div> */}
          {/* <div className="lau-con ">
          
          <h1 className={`oop ${this.state.git ? 'oop-show' : 'oop-hide'}`}>OOP</h1>
          <div className="und-lau"></div>
  </div> */}
          
           
         </div>
         <div className="title-1">
           <h1>UI design tools</h1>
         </div>
         <div className="box-2">
          <div className="lau-con">
           <h1>Photoshop</h1>
          </div>
          <div className="lau-con">
        
            <h1>illistrater</h1>
           </div>
           <div className="lau-con">
        
            <h1>Figma</h1>
           </div>
           <div className="lau-con">
            <h1>Adobe XD</h1>
           </div>
           
         </div>
         </div>
      </div>
    
     
    
   </>
  );
  }
}

export default Tech;