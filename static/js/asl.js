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

showSlides = () => {
    createSlideshow()
    let windowWidth = window.innerWidth
    let slides = document.getElementsByClassName("slide")
    let center = Math.floor(slides.length / 2)
    slides[center].setAttribute("class", "slide active")
    for (i = center-6; i < center - 2; i++) {
        slides[i].className = slides[i].className.replace("slide", " slide displayed")
    }
    for (i = center + 1; i < center + 5; i++) {
        slides[i].className = slides[i].className.replace("slide", "slide displayed")
    }
    // let slidesText = document.getElementsByClassName("slide-text")
}
showSlides()
