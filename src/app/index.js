import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Layout from "./pages/Layout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PageTop from "./pages/PageTop";


const app= document.getElementById('index1');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout}/>
        <IndexRoute component={PageTop}/>
        <Route path='portfolio' component={Portfolio}/>
        <Route path='about' component={About}/>
        <Route path='contact' component={Contact}/>
    </Router>
    , app);
