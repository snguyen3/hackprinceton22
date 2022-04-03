import { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

class Transcript extends Component {
    constructor (props) {
        super(props);
        this.state = {
            url: '',
            posted: '',
            data: null
        };
    }

    pdfGenerate=()=>{
        var doc = new jsPDF();
        doc.text(this.state.data, 10, 10);
        doc.save('transcript.pdf');
    }
        





    fetchData = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.get('./speech');
        this.setState({ data: response.data[0].results.map(result => result.alternatives[0].transcript).join('\n') }); 
        console.log(this.state.data);
        } catch (err) {
          console.log(err);
        }
      };

      render() {
        return (
          <div className="App">
            <button onClick={this.fetchData}>Click me</button>
            {this.state.data==null ? null : <p>{this.state.data}</p>}
            <button onClick={this.pdfGenerate}>Download</button>
        </div>


        );
      }


}
export default Transcript;