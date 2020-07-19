import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FooterItem">
                    <div className="FooterItemTitle">
                        <b>Lorum ipsum.</b>
                    </div>
                    <div className="FooterItemContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum, libero in suscipit tempus, metus quam egestas purus, sit amet tempus dui quam vitae purus. Maecenas sodales sed metus quis vehicula.
                    </div>
                </div>
                <div className="FooterItem">
                    <div className="FooterItemTitle">
                        <b>Contact</b>
                    </div>
                    <div className="FooterItemContent">
                        <ul>
                            <li>vdkuipb@gmail.com</li>
                            <li>github</li>
                            <li>linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Footer;