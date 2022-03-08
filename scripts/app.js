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

let workPreferenceRadio1 = document.getElementById('fromsairme');
let workPreferenceRadio2 = document.getElementById('fromhome');
let workPreferenceRadio3 = document.getElementById('hybrid');

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

let years = document.getElementsByClassName('years');
// let listId = document.getElementsByClassName('choosen-skills-li');

let devTalkContainer = document.getElementsByClassName('dev-talks')

//get form
let myForm = document.getElementById('forms')

//add & remove skills
let addSkillsButton = document.getElementById('add-skills');
let addRemoveUlList = document.getElementById('add-remove');
let yearsOfExperience = document.getElementById('experience-years');
let skillHide = document.getElementById('skill-hide');


//applications page
let mainPage = document.getElementById('container')
let listId = document.getElementsByClassName('choosen-skills-li');
let skillsetAppcontainer = document.getElementsByClassName('skillset-container');
    
    //check correct radio buttons
let workRadio = document.getElementsByClassName('work-radio');
let covidBoolean = document.getElementsByClassName('covid-boolean');
let vaccineBoolean = document.getElementsByClassName('vaccine-boolean');
let devtalkBoolean = document.getElementsByClassName('devtalks-boolean');

    //for clearing values that equals null
let hadCovidParagraph = document.getElementsByClassName('had-covid');
let hadVaccineParagraph = document.getElementsByClassName('had-vaccine');
let devtalksParagraph = document.getElementsByClassName('will-devtalk');

let dropDownIconLeft = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" transform="rotate(270)" width="15" height="15" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" style="fill:%23FFFFFF;"/></svg>')`
let dropDownIconStartPosition = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" width="15" height="15" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" style="fill:%23FFFFFF;"/></svg>')`


// document.getElementById("form").reset(); 