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
createInputForm = () => {
    let slideForm = document.createElement("form")
    slideForm.setAttribute("class", "slide-form")
    let slideInput = document.createElement("input")
    slideInput.setAttribute("type", "text")
    slideInput.setAttribute("class", "slide-input")
    slideInput.setAttribute("name", "answer")
    slideInput.setAttribute("placeholder", "Enter letter")
    let slideButton = document.createElement("button")
    slideButton.setAttribute("class", "slide-button")
    slideButton.setAttribute("type", "submit")
    slideButton.innerHTML = 'Check Your Answer'
    slideForm.appendChild(slideInput)
    slideForm.appendChild(slideButton)
    return slideForm
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
    slideText.innerHTML = letter
    slideText.setAttribute("class", "slide-text")
    slide.appendChild(slideText)
    let slideForm = createInputForm()
    slide.appendChild(slideForm)
    document.getElementById("slideshow-items").appendChild(slide)
}
createSlideshow = () => {
    let letters = createLetterArray()
    for ( const letter of letters) {
        createSlide(letter)
    }
}
createSlideshow()
let currentIndex = 6
let inputAnswer = ''
let correctAnswer = ''
showSlides = (current) => {
    let slides = document.getElementsByClassName("slide")
    for (i = 0; i < slides.length; i ++) {
        slides[i].className = "slide"
    }
    let left
    let right
    if (current < 0) {
        current = 25
        left = 24
        right = 0
    } else if (current === 0 || current > 25) {
        current = 0
        left = 25
        right = 1
    } else {
        left = current - 1
        right = current + 1
    }
    slides[left].setAttribute("class", "slide displayed")
    slides[current].setAttribute("class", "slide active")
    slides[right].setAttribute("class", "slide displayed")
}
showSlides(currentIndex)
moveSlides = (n) => {
    showSlides(currentIndex += n)
}

createModal = () => {
    let wrapper = document.createElement("div")
    wrapper.setAttribute("id", "wrapper")
    let modal = document.createElement("div")
    modal.setAttribute("class", "modal")
    let b = document.createElement("button")
    b.setAttribute("class", "button")
    b.setAttribute("onclick", "closeModal()")
    b.innerHTML = 'X'
    modal.appendChild(b)
    let p = document.createElement("p")
    p.setAttribute("class", "answer")
    p.innerHTML = 'Correct'
    modal.appendChild(p)
    wrapper.appendChild(modal)
    return wrapper
}
closeModal = () => {
    let modal = document.getElementById("wrapper")
    let parent = modal.parentNode
    if (modal) {
        parent.removeChild(modal)
    }
}
toggleTest = () => {
    let item = document.getElementsByClassName("active")
    correctAnswer = item[0].children[1].innerText
    item[0].children[1].innerHTML = ''
    let form = item[00].children[2]
    form.setAttribute("class", "slide-form active")
    let modal = createModal()
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        inputAnswer = form.elements.answer.value
        if (inputAnswer.length > 1) {
            inputAnswer = inputAnswer.slice(0,1)
        }
        let correctLetter = correctAnswer.slice(1)
        if (correctLetter === inputAnswer.toLowerCase()){
            form.setAttribute("class", "slide-form hide")
            item[0].children[1].innerHTML = correctAnswer
            item[0].appendChild(modal)
        } else {
            form.children[1].innerHTML = 'Try Again'
        }
        form.elements.answer.value=''

    })
}