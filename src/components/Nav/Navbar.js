import React  from 'react';
import './Navbar.css';
import Logo from './Logo.png'




class Navbar extends React.Component{
    render() {
      return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="img">
          <img src={Logo} alt="logo" className="nav_img"/>
            </div>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Find a Doctor</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Apps</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Testimonial</a>
          </li>

          
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
      </div>


        </nav>
        </div>

      )
    }
  
  
  }


export default Navbar;  