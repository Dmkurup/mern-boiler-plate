import React from 'react';
import {Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
       <Route  exact path="/"><Home/></Route>
       <Route path="/login"><Login/></Route>
       <Route path="/signUp"><SignUp/></Route>
       <Route path="/profile"><Profile/></Route>
       </Switch>
    </div>
  );
}

export default App;
