import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './core/Home'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path = "/" exact component ={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
