import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <pre className="Header">
                <div className="HeaderName">
                    <b>Bram Willem van der Kuip</b>
                    <div className="HeaderThemeSwitch">
                        <a href="#" onClick={this.props.switchTheme}>{this.props.theme === 'dark' ? 'light' : 'dark'} theme</a>
                    </div>
                </div>
                <div className="HeaderTitle">
                    Junior Game Developer at <a target="blank" href="https://azerion.com/">Azerion</a>
                </div>
                
            </pre>  
        );
    }
}

export default Header;