import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import { Button, Center, TextInput } from '@mantine/core';
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
            <h2>Paste a url!</h2>
            <TextInput
              radius="xl"
              className="input is-large is-fullwidth"
              id="define-input"
              placeholder="Enter a url"
              type="text"
              value={this.state.url}
              onChange={this.changeUrl}
              rightSection={
                            <Button
                                size="xs"
                                onClick={this.state.posted = this.state.url}
                            >
                                Open!
                            </Button>}
            />
            <br />
            {/* <Button
              className="button is-info is-large"
              id="define-btn"
              onClick={this.state.posted = this.state.url}
            >
              Open!
            </Button> */}
            <Center>
                <ReactPlayer url={this.state.posted}/>
            </Center>
            </div>
        );

                
    }
}

export default Video;
