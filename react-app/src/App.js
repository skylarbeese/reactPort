import React, { Component } from 'react'
import Home from './comp/home'
import Contact from './comp/contact'
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
       </Switch>
     </Router>
   </>
  );
  }
}

export default App;
