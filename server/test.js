// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const fs = require('fs');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

async function main() {
    const filename = './test.wav';
    const encoding = 'LINEAR16';
    const sampleRateHertz = 48000;
    const languageCode = 'en-US';

    const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
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
}

main().catch(console.error);