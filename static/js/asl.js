createLetterArray = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letters = []
    for (i=0; i < 26; i++) {
        letters[i] = alphabet.charAt(i).toUpperCase() + alphabet.charAt(i)
    }
    return letters
}

createSlide = (letter) => {
    let slide = document.createElement("div")
    slide.setAttribute("class","slide")
    let slideImage = document.createElement("img")
    slideImage.setAttribute('src', `static/images/asl/${letter}.jpg`)
    let alternate = document.createAttribute("alt")
    alternate.value = `A sign language ${letter}`
    slideImage.setAttributeNode(alternate)
    slideImage.setAttribute("class","slide-image")
    slide.appendChild(slideImage)
    let slideText = document.createElement("p")
    slideText.innerText = letter
    slideText.setAttribute("class", "slide-text")
    slide.appendChild(slideText)
    document.getElementById("slideshow-items").appendChild(slide)
}

createSlideshow = () => {
    let letters = createLetterArray()
    for ( const letter of letters) {
        createSlide(letter)
    }
}
