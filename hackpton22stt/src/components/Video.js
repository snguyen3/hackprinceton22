import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import { Button, Center, TextInput, Grid } from '@mantine/core';
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
              radius="lg"
              placeholder="Enter a url"
              type="text"
              value={this.state.url}
              onChange={this.changeUrl}
              rightSection={
                            <Button
                                size="sm"
                                onClick={this.state.posted = this.state.url}
                            >
                                Open!
                            </Button>}
            />
            {/* <Button
              className="button is-info is-large"
              id="define-btn"
              onClick={this.state.posted = this.state.url}
            >
              Open!
            </Button> */}
            <Center>
                <ReactPlayer 
                url={this.state.posted}
                playIcon={<button>Play</button>}
                />
            </Center>
            <Grid>

            </Grid>
            </div>
        );

                
    }
}

export default Video;
