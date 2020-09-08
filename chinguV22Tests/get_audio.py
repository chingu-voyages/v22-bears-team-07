
import speech_recognition as sr


def get_audio():
    print("starting audio pickup...")
    rec = sr.Recognizer()
    with sr.Microphone() as source:
        audio = rec.listen(source)
    userInput = None
    try:
        userInput = rec.recognize_google(audio)
        print(userInput)
    except Exception as e:
        print("Exception: ", str(e))

    return userInput


get_audio()