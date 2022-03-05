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


let myForm = document.getElementById('forms')

async function saveComment(event) {
    event.preventDefault(); //same as const commentsForm = document.querySelector("#form-control form");
  
      const comment = {
          token: "25bb5876-dd5f-4588-bf18-0b00ca1353e5",
          first_name: "nanu",
          last_name: "gelashvili",
          email: "gelashvili@gela.ge",
          phone: "+995591933382",
          skills: [
            {
              id: 1,
              "experience": 3
            }
          ],
          work_preference: "from_home",
          had_covid: true,
          had_covid_at: "2022-02-23",
          vaccinated: true,
          vaccinated_at: "2022-02-23",
          will_organize_devtalk: true,
          devtalk_topic: "I would ...",
          something_special: "I am special!"
        }
  //   try {
    const response = await fetch(
      "https://bootcamp-2022.devtest.ge/api/application",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment)
      }
    );
    
  }
  
  myForm.addEventListener("submit", saveComment);
  