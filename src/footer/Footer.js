import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FooterItem">
                    <div className="FooterItemTitle">
                        <b>About Me</b>
                    </div>
                    <div className="FooterItemContent">
                        My name is Bram Willem van der Kuip born in Haarlem Netherlands. I studied game development at Mediacollege Amsterdam and currently work at <a target="blank" href="https://azerion.com/">Azerion</a>. 
                    </div>
                </div>
                <div className="FooterItem">
                    <div className="FooterItemTitle">
                        <b>Contact</b>
                    </div>
                    <div className="FooterItemContent">
                        <ul>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:vdkuipb@gmail.com">vdkuipb@gmail.com</a></li>
                            <li><i className="fa fa-github" aria-hidden="true"></i><a target="blank" href="https://github.com/vdkuipb">github</a></li>
                            <li><i className="fa fa-linkedin" aria-hidden="true"></i><a target="blank" href="https://www.linkedin.com/in/bram-van-der-kuip-8381a9157/">linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Footer;