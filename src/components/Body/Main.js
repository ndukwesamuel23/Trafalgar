import React  from 'react';
import trafalgar from './trafalgar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';



class Main extends React.Component{
    render() {
      return(

        <div>

        <div className="sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 sec1">
                  <p className="sec1-p1">Virtual healthcare<br/> for you</p>
                  <p className="sec1-p2"> 
                  Trafalgar provides progressive, and affordable 
                  healthcare, accessible on mobile and online 
                  for everyone
                  </p>

                  <button className="btn rounded-pill btn-primary"> Consult US Today</button>

              </div>

              <div className="col-md-6">
                
                <img src={trafalgar} alt="sam"/>
                

              </div>

            </div>
          </div>
        </div>
        </div>
      )
    }
}


export default Main;  