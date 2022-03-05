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



// get personal info
let userName = document.getElementById('first-name');
let surname = document.getElementById('last-name');
let email = document.getElementById('email');
let number = document.getElementById('number');

//get skills
let skillsInput = document.getElementById('skills');


// get covid stuff

let workPreferenceRadio1 = document.getElementById('preferedspace');
let workPreferenceRadio2 = document.getElementById('fromhome');
let workPreferenceRadio3 = document.getElementById("hybrid");

let covidPositive = document.getElementById('ycovid');
let covidNegative = document.getElementById('ncovid');

let hiddenContainer = document.getElementsByClassName('hidden');
let hadCovidAt = document.getElementById('had_covid_at');

let vaccinePositive = document.getElementById('yvaccinated');
let vaccineNegative = document.getElementById('nvaccinated');

let vaccinatedAt = document.getElementById('vaccinated_at');


//about you
let orginizedDevtalks = document.getElementById('ydevtalks');
let notOrginizedDevtalks = document.getElementById('ndevtalks');

let devTheme = document.getElementById('devtalk_topic');
let special = document.getElementById('something_special');


