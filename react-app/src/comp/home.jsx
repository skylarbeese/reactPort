import React, { Component } from 'react'
import Nav from './nav'
import Landing from './landing'

import Ui from './UI'
import Work from './work'
class Home extends Component {
  render() {
  return (
   <> 
   <Nav />
   <Landing />
   
 
    <Work />
    <Ui /> 
   </>
  );
  }
}

export default Home;
