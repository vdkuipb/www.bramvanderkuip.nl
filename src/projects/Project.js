import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
    render() {
        return (
            <div className="Project">
                <div className="ProjectThumb">
                    <img alt="thumbnail of project" src="https://via.placeholder.com/150"></img>
                </div>
                <div className="ProjectTitle">
                    <b>Title of Project</b>
                </div>
                <div className="ProjectShortContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum, libero in suscipit tempus, metus quam egestas purus, sit amet tempus dui quam vitae purus. Maecenas sodales sed metus quis vehicula.
                </div>
            </div>  
        );
    }
}

export default Project;