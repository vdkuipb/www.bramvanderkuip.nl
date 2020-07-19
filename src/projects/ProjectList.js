import React, { Component } from 'react';
import './ProjectList.css'

import Project from './Project'

const requestCache = "https://api.bramvanderkuip.nl/get/";

class ProjectList extends Component {
    constructor() {
        super();

        this.state = {
            repos: []
        }

        this.abortController = new window.AbortController();
    }

    componentDidMount() {
        fetch(`${requestCache}https://api.github.com/users/vdkuipb/repos`, { signal: this.abortController.signal })
        .then(response => response.json())
        .then(response => {
            this.setState({ repos: response.data })
        });
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        return (
            <div className="ProjectList">
                { this.state.repos.map((item, i) => (
                        <Project data={item} key={i}></Project>
                )) }
            </div>  
        );
    }
}

export default ProjectList;