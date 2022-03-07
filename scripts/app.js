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

//get radios
// let workPreferenece = document.querySelector('input[name="work_preference"]:checked');
// let covid = document.querySelector('input[name="had_covid"]:checked');
// let vaccine = document.querySelector('input[name="vaccinated"]:checked');



// let devTalks = document.querySelector('input[name="will_organize_devtalk"]:checked');

//about you
let orginizedDevtalks = document.getElementById('ydevtalks');
let notOrginizedDevtalks = document.getElementById('ndevtalks');

let devTheme = document.getElementById('devtalk_topic');
let special = document.getElementById('something_special');

let obj = {}
let list = [];
let years = document.getElementsByClassName('years');
let listId = document.getElementsByClassName('choosen-skills-li');

let myForm = document.getElementById('forms')
function doIt() {
  for(let i = 0; i < listId.length; i++) {
  list[i] = {
    'id': listId[i].dataset.id,
    'experience': years[i].innerText
   }

 }
return list
}

async function saveComment(event) {
    event.preventDefault(); //same as const commentsForm = document.querySelector("#form-control form");
    doIt();


    
let workPefereneceValue;
let workPreferenece = document.getElementsByName('work_preference').forEach(radio => {
  
  if(radio.checked) {
    workPefereneceValue = radio.value
  }
});


let covidvalue;
let covid = document.getElementsByName('had_covid').forEach(radio => {
  
  if(radio.checked) {
    covidvalue = radio.value
  }
});


let vaccineValue;
let vaccine = document.getElementsByName('vaccinated').forEach(radio => {
  
  if(radio.checked) {
    vaccineValue = radio.value
  }
});

let devTalksValue;
let devTalks = document.getElementsByName('will_organize_devtalk').forEach(radio => {
  
  if(radio.checked) {
    devTalksValue = radio.value
  }
});
      const comment = {
          token: "5e8ac05b-0975-414f-afde-3879acd2e4f0",
          first_name: userName.value,
          last_name: surname.value,
          email: email.value,
          phone: number.value,
          work_preference: workPefereneceValue,
          had_covid: covidvalue === 'yes'? true : false,
          had_covid_at: hadCovidAt.value,
          vaccinated: vaccineValue === 'yes'? true : false,
          vaccinated_at: vaccinatedAt.value,
          will_organize_devtalk: devTalksValue === 'yes'? true : false,
          devtalk_topic: devTheme.value,
          something_special: special.value,
          skills: list
        }


        if(hadCovidAt.value === '' || hadCovidAt.value === null) {
          delete comment['had_covid_at']
        } 
        if(vaccinatedAt.value === '' || vaccinatedAt.value === null) {
          delete comment['vaccinated_at']
        }

        
  //   try {
    const response = await fetch(
      "https://bootcamp-2022.devtest.ge/api/application",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Sec-Fetch-Mode": "no-cors"
	
        },
        body: JSON.stringify(comment)
      }
    );
    
  }
  
  myForm.addEventListener("submit", saveComment);
  

  // let obj = {}
  // let list;
  // let years = document.getElementsByClassName('years');
  // let listId = document.getElementsByClassName('choosen-skills-li');

  

  // class Do {
  //     aba() {
  //     for (let i = 0; i < listId.length; i++) {
  //       this.id = listId[i].dataset.id,
  //       this.experience = years[i].innerText
  //     }
  //     return this

  //   }

  // }
  
  // let obj22 = new Do;
  

// function doIt() {
//     let arr = []
//   for(let i = 0; i < listId.length; i++) {
//     arr[i] = {
//       'id': listId[i].dataset.id,
//       'experience': years[i].innerText
//    }

//   }
//   list = arr
// }

// console.log(list)

// let arrrr = [1, 2, 3]


// let aa = doIt
// console.log(aa())


let obj2 = {
  skills: list
}



