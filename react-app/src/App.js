import React, { Component } from 'react'
import Home from './comp/home'
import Contact from './comp/contact'
import PhotoU from './comp/PhotoU'
import Ui from './comp/UI'
import StarWarsUi from './comp/starWarsUi'
import WeatherUi from './comp/weatherUi'
import Uijob from './comp/uijob'
import RealUi from './comp/realUi'
import Cal from './comp/Cal'
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
         <Route path="/comp/PhotoU" component={PhotoU} />
         <Route path="/comp/ui" component={Ui} />
         <Route path="/comp/photoU" component={PhotoU} />
         <Route path="/comp/starWarsUi" component={StarWarsUi} />
         <Route path="/comp/weatherUi" component={WeatherUi} />
         <Route path="/comp/uijob" component={Uijob} />
         <Route path="/comp/realUi" component={RealUi} />
         <Route path="/comp/Cal" component={Cal} />
        {/* <Route path="/comp/land" component={Land} /> */}
       </Switch>
     </Router>
   </>
  );
  }
}

export default App;
