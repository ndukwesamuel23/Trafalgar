import React, {Component}  from 'react';
import styles from './Service.module.css';
import Rec from './Rec.png';
import vec1 from './Vector.png'
import Frame2 from './Frame2.png'
import Frame from './Frame.png'
import Frame3 from './Frame3.png'
import Frame5 from './Frame5.png'

class Service extends Component{
    render(){
        return(
            <div> 

                <div className={styles.sec1}>
                    <p className={styles.p1}>Our services</p>
                    <img className={styles.img} src={Rec}/>
                    <p className={styles.p2}>We provide to you the best choiches for you. Adjust it to your health
                            needs and make sure your undergo treatment with our highly 
                        qualified doctors you can consult with us which type of service 
                        is suitable for your health
                        
                        </p>
                </div>

                 <div>
                     <div className="container">
                         <div className="row">  
                             <div className="col-md-4">
                             <div className="card rounded Larger shadow">
                                 <img className={styles.frame} src={Frame} />
                                <div className="card-body" className={styles.card_body1}>
                                    <h4 className={styles.card_body_h}>Search doctor</h4>
                                    <p className={styles.card_body_p}>   Choose your doctor from thousands of specialist, general,
                                     and trusted hospitals</p>
                                </div>
                                </div>
                             </div>

                             <div className="col-md-4">
                             <div className="card rounded  Larger shadow">
                                 <img className={styles.frame} src={Frame2} />
                                <div className="card-body" className={styles.card_body}>
                                    <h4 className={styles.card_body_h}>Search doctor</h4>
                                    <p className={styles.card_body_p}>   Choose your doctor from thousands of specialist, general,
                                     and trusted hospitals</p>
                                </div>
                                </div>
                             </div>

                             <div className="col-md-4">
                             <div className="card rounded Larger shadow">
                                 <img className={styles.frame} src={Frame3} />
                                <div className="card-body" className={styles.card_body}>
                                    <h4 className={styles.card_body_h}>Search doctor</h4>
                                    <p className={styles.card_body_p}>   Choose your doctor from thousands of specialist, general,
                                     and trusted hospitals</p>
                                </div>
                                </div>
                             </div>


                         </div>


                         
                        
                     </div>
                     
                     <img src={Frame5} className={styles.back}/>


                    <div className={styles.tttt}>
                     <div className="container" >
                         
                         <div className="row" >  
                             <div className="col-md-4">
                             <div className="card rounded  Larger shadow">
                                 <img className={styles.frame} src={Frame} />
                                <div className="card-body" className={styles.card_body1}>
                                    <h4 className={styles.card_body_h}>Search doctor</h4>
                                    <p className={styles.card_body_p}>   Choose your doctor from thousands of specialist, general,
                                     and trusted hospitals</p>
                                </div>
                                </div>
                             </div>

                             <div className="col-md-4">
                             <div className="card rounded  Larger shadow">
                                 <img className={styles.frame} src={Frame2} />
                                <div className="card-body" className={styles.card_body}>
                                    <h4 className={styles.card_body_h}>Search doctor</h4>
                                    <p className={styles.card_body_p}>   Choose your doctor from thousands of specialist, general,
                                     and trusted hospitals</p>
                                </div>
                                </div>
                             </div>

                             <div className="col-md-4">
                             <div className="card rounded  Larger shadow">
                                 <img className={styles.frame} src={Frame3} />
                                <div className="card-body" className={styles.card_body}>
                                    <h4 className={styles.card_body_h}>Search doctor</h4>
                                    <p className={styles.card_body_p}>   Choose your doctor from thousands of specialist, general,
                                     and trusted hospitals</p>
                                </div>
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


export default Service;