import os
from google.cloud import speech

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./server/google_credentials.json"
speech_client = speech.Client()

media_file = "./server/test.wav"

with open(media_file, "rb") as f:
    content = f.read()
audio_wav = speech.RecognitionAudio(content=content)

config = speech.RecognitionConfig(
    sample_rate_hertz=48000,
    language_code="en-US",
    enable_word_time_offsets=True,
    enable_automatic_punctuation=True,
)

response_speech = speech_client.recognize(config, audio_wav)

print(response_speech)


