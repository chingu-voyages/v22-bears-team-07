createLetterArray = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let letters = []
    for (i=0; i < 26; i++) {
        letters[i] = alphabet.charAt(i).toUpperCase() + alphabet.charAt(i)
    }
    letters = randomizeArray(letters)
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

randomizeArray = (array) => {
    function getRandomInt(maxInt) {
        return Math.floor(Math.random() * Math.floor(maxInt))
    }
    let j = 0
    let test = ''
    for (let i=array.length - 1; i > 0; i--){
        j = getRandomInt(i)
        test = array[j]
        array[j] = array[i]
        array[i] = test
    }
    return array
}
