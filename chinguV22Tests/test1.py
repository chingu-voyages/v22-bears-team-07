import os
import time
from playsound import playsound
import speech_recognition as sr
from gtts import gTTS


class Interact(object):
   

    def get_audio(self):
        print("pause before speaking.")
        rec = sr.Recognizer()
        userInput = ""
        
        
       
        with sr.Microphone() as source:
            audio = rec.listen(source)
           
            try:
                #TEST ----
                
                userInput = rec.recognize_google(audio)
                #print(userInput)
            except Exception as e:
                userInput = "error"
                #message = str(e)
                print("Exception: ", e)

        return userInput
    
    def send_audio(self, text):     
        filename = 'voice.mp3'
        tts = gTTS(text=text, lang="en")
        tts.save(filename)
        playsound(filename)
        os.remove(filename)

    def say_hello(self):
        self.send_audio("Hello, What is your name?")
        
        answer = self.get_audio()
        print(answer)
        response = "Hello"
        if answer != None:
            response += answer
        self.send_audio(response)

test1 = Interact()
test1.say_hello()
