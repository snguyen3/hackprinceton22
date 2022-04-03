import { Component, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { Button, Container } from '@mantine/core';
// import { TextEditor } from './components/TextEditor';
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
        var doc = new jsPDF(
          {
            orientation: 'portrait',
            format: 'letter',
            putOnlyUsedFonts: true
          }
        );
        var lines = doc.splitTextToSize(this.state.data, 190);
        doc.text(lines, 10, 10);
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
              <Container>
                <Button 
                  onClick={this.fetchData} 
                  styles={(theme) => ({
                  root: {
                    paddingLeft: 20,
                    paddingRight: 20,
                  }})}
                >
                Click me
                </Button>
              </Container>
              
            {this.state.data==null ? null : <p>{this.state.data}</p>}
            
            <Container size="xs">
              <Button 
                onClick={this.pdfGenerate} 
                styles={(theme) => ({
                  root: {
                    paddingLeft: 20,
                    paddingRight: 20,
                  }})}
              >
              Download
              </Button>
            </Container>
          </div>
        


        );
      }


}
export default Transcript;