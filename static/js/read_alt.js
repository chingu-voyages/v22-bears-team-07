// MDN reference: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

function set_VOICE(){
var synth = window.speechSynthesis;

var buttoninput = document.getElementById("alt1_button")

buttoninput.onclick = function(event) {
  event.preventDefault();
  let alt1 = "A hiker stands alone in the shadows of an ancient forest. Many empty and broken branches stab outward from towering trunks. Sunshine does not reach down to this trail. The canopy of the needles way above are collecting and hording all light they can."

  var utterThis = new SpeechSynthesisUtterance(alt1);

  synth.speak(utterThis);

}
};


window.addEventListener('load', (event) => {

    set_VOICE();
});
