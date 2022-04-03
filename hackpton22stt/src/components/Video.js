import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url:'',
            posted:''
        };
    }

    changeUrl = (url) => {
        this.setState({
            url: url.target.value
        });
    }

    changePosted = (posted) => {
        this.setState({
            posted: posted
        });
    }


    render() {
        return (
            <div className="video">
            <input
              className="input is-large is-fullwidth"
              id="define-input"
              placeholder="Enter a word"
              type="text"
              value={this.state.url}
              onChange={this.changeUrl}
            />
            <button
              className="button is-info is-large"
              id="define-btn"
              onClick={this.state.posted = this.state.url}
            >
              Find
            </button>
                <ReactPlayer url={this.state.posted}/>
            </div>
        );

                
    }
}

export default Video;
