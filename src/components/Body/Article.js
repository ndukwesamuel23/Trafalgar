import React, {Component} from 'react'
import "./Article.css";
import Arcimg from './Arcimg.png';
import Arcimgg from './Arcimgg.png';
import Arcimggg from './Arcimggg.png';
import Arcimgggg from './Arcimgggg.png';


class Article extends Component{
    render(){
        return(
            <div>
                <div className="article1">
                    <p className="ar-p1">Check out our latest article</p>
                    <hr className="ar-hr"/>
                </div>
                <div className="sammmm">
                <div>
                    <div className="container">
                        <div className="row ">
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                            <div className="article">

                                                <div className="arc1">
                                                    <img src={Arcimg} alt="you gat know"/>
                                                </div>

                                                    <div className="arc2">
                                                                <p className="arc2_p1">Disease detection, check 
                                                                    up in the laboratory</p>

                                                                    <p className="arc2_p2">In this case, the role of the health laboratory is very important to do
                                                                        a disease detection...</p>

                                                    <p className="arc2_p3">Read more</p>
                                                    </div>
                                                </div>
                                    </div>

                                <div className="col-md-3">
                                            <div className="article">

                                                <div className="arc1">
                                                    <img src={Arcimgg} alt="you gat know"/>
                                                </div>

                                                    <div className="arc2">
                                                                <p className="arc2_p1">Disease detection, check 
                                                                    up in the laboratory</p>

                                                                    <p className="arc2_p2">In this case, the role of the health laboratory is very important to do
                                                                        a disease detection...</p>

                                                    <p className="arc2_p3">Read more</p>
                                                    </div>
                                                </div>

                                </div>

                                <div className="col-md-3">
                                                    <div className="article">

                                                        <div className="arc1">
                                                            <img src={Arcimggg} alt="you gat know"/>
                                                        </div>

                                                            <div className="arc2">
                                                                        <p className="arc2_p1">Disease detection, check 
                                                                            up in the laboratory</p>

                                                                            <p className="arc2_p2">In this case, the role of the health laboratory is very important to do
                                                                                a disease detection...</p>

                                                            <p className="arc2_p3">Read more</p>
                                                            </div>
                                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            

                        </div>


                    </div>
                </div>
                </div>
                <img src={Arcimgggg} className="aaaaaa" alt="inside"/>
<button className="rounded-pill btn artbtn"> Download</button>
            </div>
        )
    }
}


export default Article;