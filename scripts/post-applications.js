//submit form
async function submitForm(event) {
    event.preventDefault(); 
    window.location.href = '/Redberry-project/pages/thank-you.html'

    //call function with returns list of choosen skills, declaired below
    getSkillList();

    //get radio buttons
    let workPeferenece =document.querySelector('input[name="work_preference"]:checked');
    let covid = document.querySelector('input[name="had_covid"]:checked');
    let vaccine = document.querySelector('input[name="vaccinated"]:checked');
    let devTalks = document.querySelector('input[name="will_organize_devtalk"]:checked');

      const data = {
          token: "faf3444b-260d-4ae9-b608-c4697534b55a",
          first_name: userName.value,
          last_name: surname.value,
          email: email.value,
          phone: number.value,
          work_preference: workPeferenece.value,
          had_covid: covid.value === 'yes'? true : false,
          had_covid_at: hadCovidAt.value,
          vaccinated: vaccine.value === 'yes'? true : false,
          vaccinated_at: vaccinatedAt.value,
          will_organize_devtalk: devTalks.value === 'yes'? true : false,
          devtalk_topic: devTheme.value,
          something_special: special.value,
          skills: list
        };

        //check if hadCovitAt and hadVaccinatedAt date inputs are empty, delete property from objet
        if(hadCovidAt.value === '' || hadCovidAt.value === null) {
          delete data['had_covid_at']
        };

        if(vaccinatedAt.value === '' || vaccinatedAt.value === null) {
          delete data['vaccinated_at']
        };

        //check if devtalks theme value is empty, delete devtalk_topic
        if(devTheme.value === '' || devTheme.value === null) {
            delete data['devtalk_topic']
        }; 

        //check if number value is empty, delete number
        if(number.value === '' || number.value === null) {
          delete data['phone'];
        };  
        

        try {
            const response = await fetch(
              "https://bootcamp-2022.devtest.ge/api/application",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",	
                },
                body: JSON.stringify(data)
              }
            );
          }  catch(error) {
            console.log(error)
          };
    
  }


  
  myForm.addEventListener("submit", submitForm);
  
  //get skill id and experience
  let list = [];
  function getSkillList() {
    for(let i = 0; i < listId.length; i++) {
    list[i] = {
      'id': listId[i].dataset.id,
      'experience': years[i].innerText
     }
  
   }
    return list;
  }