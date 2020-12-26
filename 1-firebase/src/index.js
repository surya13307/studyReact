import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Link , Switch , BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import USer from './Components/USer';
import Visit from './Components/Visit';
import NotFound from './Components/NotFound';




const routing = (
  <Router>
        <div>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/user">User</Link></li>
            <li><Link to = "/visit">Visit</Link></li>

          </ul>
        </div>


        <Switch>
              <Route exact path = "/" component = {App} />
              <Route exact path = "/user" component = {USer} />
              <Route exact path = "/visit" component = {Visit} />
              <Route component = {NotFound} />
        </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

