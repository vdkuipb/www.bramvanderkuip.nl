import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repo: props.data
        }

        this.abortController = new window.AbortController();
    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/${this.state.repo.full_name}/master/README.md`, { signal: this.abortController.signal })
        .then(response => response.text())
        .then(response => {
            this.setState({ 
                about: response.match(new RegExp("<!--START-ABOUT-->(.*)<!--END-ABOUT-->"))[1],
                thumb: response.match(new RegExp("<!--START-THUMB(.*)END-THUMB-->"))[1],
            });
        });
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    render() {
        return (
            <div className="Project">
                <img className="ProjectThumb" alt="thumbnail of project" src={ this.state.thumb }></img>
                <div className="ProjectTitle">
                    <b><a target="blank" href={ this.state.repo.html_url }>{ this.state.repo.name }</a></b>
                    <div className="ProjectTitleDate">
                        <i>{ this.state.repo.created_at.split("T")[0] } to { this.state.repo.pushed_at.split("T")[0] }</i>
                     </div>
                </div>
                <div className="ProjectShortContent">
                    { this.state.about }
                </div>
            </div>  
        );
    }
}

export default Project;