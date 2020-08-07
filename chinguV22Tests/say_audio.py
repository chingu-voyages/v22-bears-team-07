import os
import time
from playsound import playsound
import speech_recognition as sr
from gtts import gTTS

def say_text(text):
    tts = gTTS(text=text, lang="en")
    filename = "voice.mp3"
    tts.save(filename)
    playsound(filename)

user_text = input()
say_text(user_text)

