import React, {Component} from 'react';
import './Trans.css';
import Mask from './Mask.png'


class Trans extends Component{
    render(){
        return(
            <div>
                <div className="container">
                        <div className="trans"> 
                            <p className="trans_p1">What our customer are saying</p>
                            <hr className="transhr"/>
                            <div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="container">
                                                <div className="row mas">
                                                    <div className="col-md">
                                                    <img src={Mask} className="mask"/>
                                                    </div>

                                                    <div className="col-md">
                                                        <div className="transcol_2">
                                                        <p className="edw">Edward Newgate</p>
                                                        <p>Founder Circle</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <p className="mask2">“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}



export default Trans;