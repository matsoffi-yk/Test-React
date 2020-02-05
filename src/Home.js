import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Web from './Web.js';
import Api from './Api.js';
import Regis from './Regis.js';
import './Home.css';

const users = [
  {
    firstname: 'Madsoffee',
    lastname: 'Yako'
  },
  {
    firstname: 'Usman',
    lastname: 'Sulong'
  }
]
const Home = props => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [user, setUser] = useState(users);

  const handleSubmit = (name) => {
    setfirstname(name.firstname);
    setlastname(name.lastname);
    user.push(name);
    setUser([...users]);
  }
  return (
    <Router>
      <div className='Home'>
        <h1 className='hello'>HELLO <b className='name'>{firstname} {lastname}</b></h1>
        <div className='link'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Regis'>Register</Link></li>
          <li><Link to='/Web'><a>Indonesia</a></Link></li>
          <li><Link to='/Api'><a>API</a></Link></li>
        </div>
        

        <hr size='7' color='black'/>
        <Switch>
          <Route path="/Regis">
            <Regis handleSubmit={handleSubmit} firstname={firstname} lastname={lastname}/>
          </Route>
          <Route path="/Web">
            <Web firstname={firstname} lastname={lastname}/>
          </Route>
          <Route path="/Api">
            <Api firstname={firstname} lastname={lastname}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Home;