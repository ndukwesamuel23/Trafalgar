import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Nav/Navbar'
import Main from './components/Body/Main'
import Service from './components/Body/Service'
import Health from './components/Body/Health'
import Mobile from './components/Body/Mobile'
import Trans from './components/Body/Trans'
import Article from './components/Body/Article'
import Footer from './components/Footer/Footer'





class App  extends Component{
  
  render() {
    return(
      <div>
        
        <Navbar/>
        <Main/>
        <Service/>
        <Health/>
        <Mobile/>
        <Trans/>
        <Article/>
        <Footer/>
        
      </div>
    )
  }


}


export default App;
