import React from 'react';
import Nav from '../components/Nav';
import Footer from "../components/footer";

import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PageTop from "../pages/PageTop";

export default class Layout extends React.Component{

    render(){
       return(

         <div>
                <Nav location={location}/>
                <PageTop/>
                <Portfolio/>
                <About/>
                <Contact/>
                <Footer/>
         </div>
       );
    }
}
