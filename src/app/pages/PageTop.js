import React from "react";

export default class PageTop extends React.Component {

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <img className="img-responsive" src="/app/img/profile.png" />
                            <div className="intro-text">
                                <span className="name">Start Bootstrap</span>
                                <hr className="star-light"/>
                                 <span className="skills">Web Developer - Graphic Artist -
                                     User Experience Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
                        <a class="btn btn-primary" href="#page-top">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
        </header>
         );
        }

    }
