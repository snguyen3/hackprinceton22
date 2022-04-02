import os

from google.cloud import speech

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "hackptonkey.json"
speech_client = speech.SpeechClient()

