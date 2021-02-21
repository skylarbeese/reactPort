import React, { Component } from 'react'
import Nav from './nav'
import Landing from './landing'

import Tech from './tech'
class Home extends Component {
  render() {
  return (
   <> 
   <Nav />
   
    <Landing />

    <Tech />
   </>
  );
  }
}

export default Home;
