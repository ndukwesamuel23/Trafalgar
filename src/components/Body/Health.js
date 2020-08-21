import React, {Component} from 'react'
import "./Health.css";
import health from "./health.png"


class Health extends Component{
    render(){
        return(
            <div className="health">
               
               <button className="rounded-pill btn hec_btn_1" > samuel</button>
               <div className="container">
                   <div className="row">
                       <div className="col-md-6">
                           <img src={health} alt="skjds" />

                       </div>

                       <div className="col-md-6 health_sec2">
                           <p className="health_p1">Leading healthcare providers</p>

                           <p className="health_p2">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver</p>
                            
                        
                     <button className="rounded-pill btn hec_btn_2" > Learn more</button>
                        
                       </div>

                   </div>

               </div>
            </div>
        )
    }
}


export default Health