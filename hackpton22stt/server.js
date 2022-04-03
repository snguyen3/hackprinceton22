const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


function speechRec (filename, encoding, sampleRateHertz, languageCode, channelCount) {
    const speech = require('@google-cloud/speech');
    const fs = require('fs');
    const client = new speech.SpeechClient();


    const request = {
        config: {
            encoding: encoding,
            sampleRateHertz: sampleRateHertz,
            languageCode: languageCode,
            channelCount: channelCount,
        },
        audio: {
            content: fs.readFileSync(filename).toString('base64'),
        },
    };

    
    return client.recognize(request);


    /*const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
console.log(`Transcription: ${transcription}`);

response.results.forEach(result => {
    const alternatives = result.alternatives[0];
    alternatives.words.forEach(wordInfo => {
        const startSecs =
        `${wordInfo.startTime.seconds}` +
        '.' +
        wordInfo.startTime.nanos / 100000000;
        const endSecs =
        `${wordInfo.endTime.seconds}` +
        '.' +
        wordInfo.endTime.nanos / 100000000;
      console.log(`Word: ${wordInfo.word}`);
      console.log(`\t ${startSecs} secs - ${endSecs} secs`);
    });

    return transcription;
});*/

}

app.get('/speech', (req, res) => {
    speechRec('./test3.mp3', 'MP3', 44100, 'en-US', 2)
    .then(transcription => res.send(transcription))
    .catch(err => console.log(err));
});

app.get('/speech2', (req, res) => {
    speechRec('./test4.mp3', 'MP3', 44100, 'en-US', 2)
    .then(transcription => res.send(transcription))
    .catch(err => console.log(err));
});



// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 1

