import { Component, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { Button, Container, Center} from '@mantine/core';
// import { TextEditor } from './components/TextEditor';
class Transcript extends Component {
    constructor (props) {
        super(props);
        this.state = {
            url: '',
            posted: '',
            data: null,
            data2: null
        };
    }

    pdfGenerate=()=>{
        var doc = new jsPDF(
          {
            orientation: 'portrait',
            format: 'letter',
            putOnlyUsedFonts: true
          }
        );
        var lines = doc.splitTextToSize(this.state.data, 190);
        var lines2 = doc.splitTextToSize(this.state.data2, 190);

        doc.text("Video 1: \n", 10, 10);
        doc.text(lines, 10, 20);
        doc.addPage();
        doc.text("Video 2: \n", 10, 10);
        doc.text(lines2, 10, 20);
        doc.save('transcript.pdf');
    }

    fetchData = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.get('./speech');
          const response2 = await axios.get('./speech2');
        this.setState({ data: response.data[0].results.map(result => result.alternatives[0].transcript).join('\n') }); 
        this.setState({ data2: response2.data[0].results.map(result => result.alternatives[0].transcript).join('\n') });
        // console.log(this.state.data);
        } catch (err) {
          console.log(err);
        }
      };

      render() {
        return (
          <Center>
            <div className="App">
              <Container>
                <Button 
                  onClick={this.fetchData} 
                  styles={(theme) => ({
                  root: {
                    paddingLeft: 20,
                    paddingRight: 20,
                  }})}
                >
                Click me to generate transcript!
                </Button>
              </Container>

            {this.state.data==null ? null : <p>{this.state.data}</p>}
            {this.state.data2==null ? null : <p>{this.state.data2}</p>}
            <br />
            <Container size="md">
              <Button 
                onClick={this.pdfGenerate} 
                styles={(theme) => ({
                  root: {
                    paddingLeft: 20,
                    paddingRight: 20,
                  }})}
              >
              Download Transcript
              </Button>
            </Container>
          </div>
        </Center>


        );
      }


}
export default Transcript;