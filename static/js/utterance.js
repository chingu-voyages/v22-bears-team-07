


function addEventlistener_topage() {
    //the button id needed for switch case hardcoded
    //Could be altered to a more D.R.Y standard later
    console.log("adding event listeners");
    let iris = document.getElementById('image-iris-button')
    let iris_id = 'image-iris-button'
    let camera = document.getElementById('image-camera-button')
    let camera_id = 'image-camera-button'
    let cpu = document.getElementById('image-cpu-button')
    let cpu_id = 'image-cpu-button'

    iris.addEventListener('click', function(){speak(iris_id)}, false)
    camera.addEventListener('click', function(){speak(camera_id)}, false)
    cpu.addEventListener('click', function(){speak(cpu_id)}, false)


}

function get_text(element_id){
      let result = "Text not found"
      let text1 = "Close up photo of the human iris. From Wickipedia, the iris is is a thin, annular structure in the eye, responsible for controlling the diameter and size of the pupil and thus the amount of light reaching the retina. Eye color is defined by that of the iris. In optical terms, the pupil is the eye's aperture, while the iris is the diaphragm. This iris has an outer edge that is cool as water, and the inner ring is like grass on fire."
      let text2 = "A classic style camera sits on a bed of hand sized, smooth rocks. The camera's shutter works like the eye's retina and iris.  The lens helps transfer the image, and as the shutters open to let light in to be captured, the film inside is exposed to the light rays which give us the 2 dimensional layout of the object in color, or black and white depending on the film."
      let text3 = "A photo, view from above, of a table where a laptop, a pair of noise canceling headphones and a camera sit. Screenreaders use alt image attributes to read to the user what the image is, it's description, or perhaps the story it tells."
      switch(element_id){
        case 'image-iris-button':
        result = text1
        break;

        case 'image-camera-button':
        result = text2
        break;

        case 'image-cpu-button':
        result = text3
        break;

      }
      return result
}


function speak(id) {
    let line = get_text(id)

    let utterance = new SpeechSynthesisUtterance(line);

    speechSynthesis.speak(utterance);
}

window.addEventListener('load', (event) => {

    addEventlistener_topage()
});
