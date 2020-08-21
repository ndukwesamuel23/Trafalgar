import React,{Conponent, Component} from "react";
import Logo from './Logo.png'
import './Footer.css'



class Footer extends Component{
    render(){
        return(
            <div>
                <div className="foot">
                    <div className="container">
                        <div className="row">


                            <div className="col-md-4">
                            <p className="footcap-p1">Trafalgar</p>
                                <p className="foot-p1">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
                                    for everyone</p>

                                    <p className="foot-p1">©Trafalgar PTY LTD 2020. All rights reserved</p>
                            </div>
                                <div className="col-md-1"></div>

                            <div className="col-md-2">
                                <p className="footcap2  ">Company</p>

                                <p className="footp2" >About</p>
                                    <p className="footp2" >Testimonials</p>
                                    <p className="footp2" >Find a doctor</p>
                                    <p className="footp2" >Apps</p>
                            </div>


                            <div className="col-md-2">
                                <p className="footcap2  ">Region</p>
                                    <p className="footp2" >Indonesia</p>
                                        <p className="footp2" >Singapore</p>
                                        <p className="footp2" > Hongkong</p>
                                        <p className="footp2" >Canada</p>
                            </div>


                            <div className="col-md-2">

                                <p className="footcap2  "> Help</p>
                                <p className="footp2" >Help center</p>
                                <p className="footp2" >Contact support</p>
                                <p className="footp2" >Instructions</p >
                                <p className="footp2" >How it works</p>
                                
                            </div>
                            <div className="col-md-1">

                            </div>
                             
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;