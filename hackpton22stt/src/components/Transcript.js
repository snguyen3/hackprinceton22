import { Component } from 'react';
import axios from 'axios';

class Transcript extends Component {
    constructor (props) {
        super(props);
        this.state = {
            url: '',
            posted: '',
            data: null
        };
    }


    fetchData = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.get('./speech');
        this.setState({ data: response.data });
        console.log(this.state.data);
        } catch (err) {
          console.log(err);
        }
      };

      render() {
        return (
          <div className="App">
            <button onClick={this.fetchData}>Click me</button>
            
        </div>
        );
      }


}
export default Transcript;