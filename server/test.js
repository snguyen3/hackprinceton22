// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const fs = require('fs');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

async function main() {
    const filename = './test3.mp3';
    const encoding = 'MP3';
    const sampleRateHertz = 44100;
    const channelCount = 2;
    const languageCode = 'en-US';

    const config = {
        enableWordTimeOffsets: true,
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
        channelCount: channelCount,
    };

    /**
     * Note that transcription is limited to 60 seconds audio.
     * Use a GCS file for audio longer than 1 minute.
     */
    const audio = {
        content: fs.readFileSync(filename).toString('base64'),
    };

    const request = {
        config: config,
        audio: audio,
    };

    const [response] = await client.recognize(request);

    const transcription = response.results
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
    });
}

main().catch(console.error);