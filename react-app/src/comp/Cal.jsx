import React, { Component } from 'react'
import Nav from './nav'
import Photo from './../photoArr'
import './Cal.css';
class Cal extends Component {

 

  render() {
  
  return (
   <>
   <Nav /> 
    <div className="contect-div">
  
        <div className="tex">
        <div className="text-des-5">
        <h1>Calendar App</h1>
              <div className="underl"></div>
              <p> 
              This is a calendar app for tracking school assignments for a university website that I will be redesigning.
              </p>
            </div>
            </div>
          
            <div className="img-gal-img-4">

            <div class="plan-con">
            <div class="tools">
            <div class="tools-text">
               <div class="tool-text">
                   
                 <div class="tool-header"><h1>tools</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>Abode XD</h2></div>
               </div>
               <div class="role-text">
                 <div class="tool-header"><h1>My Role</h1></div>
                 <div class="tool-line"></div>
                 <div class="tool-para"><h2>UX Designer</h2></div>
                 <div class="tool-para"><h2>UI Designer</h2>
                 
                 </div>
               </div>
               <div class="button-con">
               <button><a href="https://xd.adobe.com/view/d1269512-29f5-442e-a139-84babe6456db-8475/">Prototype</a></button>
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
                 <div class="plan-para"><p >In this project, I will be choosing an aspect of the school's canvas website to redesign. So it is more effective and easy for the students to find and turn in school work.</p></div>
                 <div className="plan-header ga"><h1>goals</h1></div>
                 <div class="plan-para"><p>Redesign the school's calendar web page, so it is easier for 
                   students find their assignments.</p></div>
                   <div class="plan-para"><p>
                   Find a way for the assignments to be viewed and turned in from the calendar page.</p></div>
               </div>
            </div>
           </div>
           </div>
          
   

           <div className="tex">
            <div className="text-des-5">
              <h1 className={ "show-header-1"}>Finding The Problem</h1>
              <div className={`underl li${ "show-under-1" }`}></div>
              <p className={ "show-p-1" }>
              I start by identifying the problem that needs to be solved. I do this by finding out the goals of the stakeholder. I want to center it around a  "how might we"  in this case, how might we make the school's canvas calendar easier to 
                 use and be more effective for students doing their classwork.
                 
               </p>
            </div>
            
            </div>

            <div className="tex">
            <div className="text-des-5">
              <h1 className={"show-header-1"}>Research</h1>
              <div className="underl show-under-1"></div>
              <p className="show-p-1" >  To create a better working user interface. I must identify who the target audience for the product that I will be trying to reach is. In this 
cause the answer is university students. I will need to figure out the things that will make it better for them.
 </p>
            </div>
            </div>
           
            <div className="tex tea">
            <div className="text-des-5 ">
              <h1 className={"show-header-1"}>Wireframes</h1>
              <div className={" underl  show-under-1" }></div>
              <p className={ "show-p-1" }>
              I have started to design how I might want the layout of the new pages to look. I redesigned elements that need to be improved and kept some that I believe will still work with my new design. Overall I want things to be easy for students to use.
 </p>
            </div>
            </div>
       {/*    
            <div className="img-gal-img-r">
         <div className="image-banner-ui-1 ui-r" style= {{backgroundImage: `url(${Photo[79]})`}}></div>
       </div> */}

  
            <div className="img-cmp-img-3 img-co">
              <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[69]})`}}></div>
                </div>
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[65]})`}}></div>
                </div>
               
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[67]})`}}></div>
                </div>
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[68]})`}}></div>
                </div>
             </div>

             <div className="tex">
            <div className="text-des-5">
              <h1 className={"show-header-1"}>Final</h1>
              <div className={`underl li${ "show-under-1"}`}></div>
              <p className={ "show-p-1" }>After the sketches and wireframes, I get to work on the final design of the pages. It will be the final stage of placing the content, color, and typography on the pages. The final result will be what the website will look like when done. After this prototyping, and user testing will need to be the main priority.
               </p>
            </div>
            
            </div>


             <div className="img-fin-img-3 ">
               <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[75]})`}}></div>
                </div>
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[77]})`}}></div>
                </div>
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[72]})`}}></div>
                </div>
                
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[78]})`}}></div>
                </div>
                <div className="img-con-cpm">
                   <div className="img-1 img-gal" style= {{backgroundImage: `url(${Photo[79]})`}}></div>
                </div>
             </div>

    </div>
   </>
  );
  }
}

export default Cal;