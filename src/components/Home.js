import React from 'react';
import Header from '../Header';
import Footer from '../Footer';



let Home =() =>{
    return(
        <div>  
            <Header/>  
            <div className="container">
                <h1 id="hf">Get The Best Software Development Services</h1>
            
                {/* For First Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card  text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">UI Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card  text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card  text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Word Press Apps</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                {/* for Second Row */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Android Apps</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Software Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" styles="width: 18rem;">
                            <img className="card-img-top" src={require('../images/pic1.jpg')} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">SEO</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    )}

export default Home;