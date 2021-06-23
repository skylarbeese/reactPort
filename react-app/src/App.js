import React, { Component } from 'react'
import Home from './comp/home'
import Contact from './comp/contact'
import PhotoUi from './comp/photoUi'
import Land from './comp/land'
//import About from './comp/about'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
  return (
   <> 
     <Router>
       <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/comp/contact" component={Contact} /> 
         <Route path="/comp/photoUi" component={PhotoUi} />
        {/* <Route path="/comp/land" component={Land} /> */}
       </Switch>
     </Router>
   </>
  );
  }
}

export default App;
