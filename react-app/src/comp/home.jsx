import React, { Component } from 'react'
import Nav from './nav'
import Landing from './landing'

import Tech from './tech'
import Work from './work'
class Home extends Component {
  render() {
  return (
   <> 
   <Nav />
   <Landing />
   
 
    <Work />
   </>
  );
  }
}

export default Home;
