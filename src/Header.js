import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }
    
      render() {
    
      const show = (this.state.menu) ? "show" : "" ;
   return(
       <div>
            <div className="pos-f-t">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler collapsed" type="button" onClick={this.toggleMenu} data-target="#navbarTogglerDemo01"  data-target=".nav-collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show} id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Solution">Solution</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Support">Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Event">Event</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    </div>
    
    
    )
}
}

export default Header;