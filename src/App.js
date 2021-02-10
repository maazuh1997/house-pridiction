import React from 'react'
import './App.css';
//import Index from './component/index'
import Find from './page/Find'
import Home from './page/Home'
import NavBar from './Navbar'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './component/Chart'
function App() {
  return (
    <div >
  <>
  <Router>
    <NavBar/>
    
    <Switch>
      <Route path='/Find' component={Find}/>
      <Route exact path='/' component={Home}/>
      <Route path="/chart" component={Chart}/>
    </Switch>
  </Router>
  </>

    </div>
    
  );
}

export default App;
