import React, { Component } from 'react'
import About from './about'
import Tech from './tech'
import Typewriter from "typewriter-effect"; 

class Landing extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        
        this.state = {
          current: '',
          count: 0,
          index: 0,
          letter: '',
          arrow: false,
          text: [
            "Artist",
            "photographer",
            "Disigner"
          ],
          isDeleting: false,
          speed: 150,
          loop: 0,
          landing: false
        }
     
      }
      componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, true);
       this.type()
      }
     type = () => {
 /*     if(this.state.count === this.state.text.length) {
          this.setState({count: 0})
        } else {
        this.setState({current: this.state.text[this.state.count],
          index: this.state.index + 1,
         letter: this.state.current.slice(0, this.state.index) 
      
        })
        }
       
      document.querySelector('.typing').textContent = this.state.letter
       if(this.state.letter === this.state.current) {
              this.setState({count: this.count + 1})
              this.setState({index: 0})
        }
        setTimeout(this.type, 400) */
   
       
      }

    

    handleScroll = () => {
        let lastScrollY = window.scrollY;
         
     if(lastScrollY > 40) {
         //    console.log("yes")
             this.setState({
               arrow: true
             })
        } else {
             this.setState({
               arrow: false
            
               })
          }
        } 


        scrollToTop = () => {
          this.myRef.current.scrollIntoView({ behavior: 'smooth' })
      } 
     
  render() {
  return (
   <> 
    <div className="landing-con" >
        <div className="landing-title">
            <h1 className="hello">Hello, </h1>
            <h1>my name is Skylar</h1>
           
            <div className="type-text">
            <h2>I am a </h2>
           <h2 className="typing">{this.state.arrow ?
           <Typewriter 
        
       options={{
        strings: ['Web Developer', 'UI designer', 'Content Creator'],
        autoStart: true,
        loop: true,
      }}
        
      
    
       /> : <div><Typewriter
       onInit={(typewriter) => {
         typewriter.typeString('')
           .callFunction(() => {
             console.log('String typed out!');
           })
           .pauseFor(500)
           .deleteAll()
           .callFunction(() => {
             console.log('All strings were deleted');
           })
           .start();
       }} /></div> } 
            
            </h2> 
            </div> 
         <div className="sc">
            
              <h1>scroll down to see more <i class="fas fa-angle-down"></i></h1>
              
      </div> 
        </div>
        <div className="arrow" >
            <div className="landing-text">
               <h3>click to see more on my page</h3>
            </div>
            <h2 className={this.state.arrow ? "an-start" : ""} onClick={this.scrollToTop}><i class="fas fa-angle-down"></i></h2>
        </div>
    <div className="background-words">
          <h1>Develop</h1>
        </div> 
    </div>
    <div className="port">
 
    <Tech />
    <div className="about" ref={this.myRef}>
    <About />
    </div>
    </div>
   

   </>
  );
  }
}

export default Landing;
