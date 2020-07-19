import React, { Component } from 'react';
import './ProjectList.css'

import Project from './Project'

class ProjectList extends Component {
    render() {
        return (
            <div className="ProjectList">
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>  
        );
    }
}

export default ProjectList;