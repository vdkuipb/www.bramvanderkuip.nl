import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <pre className="Header">
                <div className="HeaderName">
                    <b>Bram Willem van der Kuip</b>
                </div>
                <div className="HeaderTitle">
                    Junior Game Developer @azerion
                </div> 
            </pre>  
        );
    }
}

export default Header;