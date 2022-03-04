//get buttons
let prevArrowButton = document.getElementById('prev-arrow');
let nextArrowButton = document.getElementById('next-arrow');
let goBackButton = document.getElementById('go-back');

//get sections

let formSections = Array.from(document.querySelectorAll('.form'));
let detailsSections = Array.from(document.querySelectorAll('.detail')); 

//get circles

let navigation = document.getElementById('navigation');
let circlesNavigation = document.getElementsByClassName('navigation-container');
let circles = Array.from(document.querySelectorAll('.circle'));

//get error p
 
let errorMessage = document.getElementsByClassName('error');
let radioError = document.getElementsByClassName('radio-error')
console.log(radioError)



// get personal info
let userName = document.getElementById('first-name');
let surname = document.getElementById('last-name');
let email = document.getElementById('email');
let number = document.getElementById('number');


// get covid stuff

let workPreferenceRadio1 = document.getElementById("preferedspace");
let workPreferenceRadio2 = document.getElementById("fromhome");
let workPreferenceRadio3 = document.getElementById("hybrid");

let covidPositive = document.getElementById("ycovid");
let covidNegative = document.getElementById("ncovid");


//about you
let orginizedDevtalks = document.getElementById('ydevtalks');
let notOrginizedDevtalks = document.getElementById('ndevtalks');

let devTheme = document.getElementById('devtalk_topic');
let special = document.getElementById('something_special');


// console.log(devTheme.parentElement.querySelector('.error').innerHTML = 'aba ra')

//change section handlers
prevArrowButton.addEventListener('click', () => {changePage('prev')});

nextArrowButton.addEventListener('click', () => {changePage('next')});




function changePage (arrow) {
    // let index = 
    const activePage = document.querySelector('.active');

    let index = formSections.indexOf(activePage);
    console.log(index)
    console.log(checkValidation(index))
    formSections[index].classList.remove('active');
    detailsSections[index].classList.remove('active-detail');
    
    if (arrow === 'next' && checkValidation(index)) {
        index++;
    } else if (arrow === 'prev' && index === 0) {
        location.href = "/Redberry-project/index.html"
    } else if (arrow === 'prev') {
        circles[index].classList.remove('circle-bold');
        index--; 
    };

    formSections[index].classList.add('active');
    circles[index].classList.add('circle-bold')

    if(index === 4) {
        circlesNavigation[0].style.display = "none";

    } 
    
    else {
        detailsSections[index].classList.add('active-detail');
    };

}





goBackButton.addEventListener('click', goBack);

function goBack() {
    formSections[4].classList.remove('active');
    circles[4].classList.remove('circle-bold');
    formSections[3].classList.add('active');
    detailsSections[3].classList.add('active-detail');
    navigation.classList.add('active');

}


//validation code
