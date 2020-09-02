//tab content javascript code for:
//Chingu Voyage 22, bears 07, Team: Nellie && Regina
//Content Author: Nellie Tobey



let TAB1;
let TAB2;
let TAB3;
let TAB4;


function set_TABS() {
    TAB1 = document.getElementById('Compliment')
    TAB2 = document.getElementById('Contrast')
    TAB3 = document.getElementById('Ratio')
    TAB4 = document.getElementById('Example')
}

function openTab(tab) {
    let tabid = tab.value
    let tab1 = TAB1.id
    let tab2 = TAB2.id
    let tab3 = TAB3.id
    let tab4 = TAB4.id 
    
    switch (tabid) {
        case tab1:
            TAB1.style.display = 'flex'
            TAB2.style.display = 'none'
            TAB3.style.display = 'none'
            TAB4.style.display = 'none'
            break;
        case tab2:
            TAB1.style.display = 'none'
            TAB2.style.display = 'flex'
            TAB3.style.display = 'none'
            TAB4.style.display = 'none'
            break;
        case tab3:
            TAB1.style.display = 'none'
            TAB2.style.display = 'none'
            TAB3.style.display = 'flex'
            TAB4.style.display = 'none'
            break;
        case tab4:
            TAB1.style.display = 'none'
            TAB2.style.display = 'none'
            TAB3.style.display = 'none'
            TAB4.style.display = 'flex'
            break;


        }


    }
      


window.addEventListener('load', (event) => {
    set_TABS()
});



