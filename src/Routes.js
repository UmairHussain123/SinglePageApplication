import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Solution from './components/Solution';
import Support from './components/Support';
import Event from './components/Event';
import Resources from './components/Resources';
import Contact from './components/Contact';


const CustomRoutes = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/Solution" component={Solution}/>
                <Route path="/About" component={About}/>
                <Route path="/Support" component={Support}/>
                <Route path="/Event" component={Event}/>
                <Route path="/Resources" component={Resources}/>
                <Route path="/Contact" component={Contact}/>
            </div>
        </Router>
    )}

export default CustomRoutes;