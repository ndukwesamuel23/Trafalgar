import React, {Component} from 'react';
import mobile from './Mobile.png';
import './Mobile.css'




class Mobile extends Component{
    render(){
        return(
            <div>
                
                <div className="mobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mob_sec">
                                <p className="mob1">  Download our mobile apps</p>
                                <hr className="mobile_hr"/>
                                <p className="mob2">Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely</p>
    </div>

<button className="rounded-pill btn mob_btn_2" > Download</button>
                            </div>

                            <div className="col-md-6">
                            <img src={mobile} />
                            
                            </div>
                            

                        </div>

                    </div>
                     
                </div>
            </div>
        )
    }
}


export default Mobile;