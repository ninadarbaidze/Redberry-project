//submit form
async function submitForm(event) {
    event.preventDefault(); 

    //call function with returns list of choosen skills
    getSkillList();

    //get radio buttons
    let workPeferenece =document.querySelector('input[name="work_preference"]:checked')
    let covid = document.querySelector('input[name="had_covid"]:checked');
    let vaccine = document.querySelector('input[name="vaccinated"]:checked');
    let devTalks = document.querySelector('input[name="will_organize_devtalk"]:checked');

      const data = {
          token: "ebd3b7e7-4c03-40b9-b463-fc84e548dd61",
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
        }

        //check if hadCovitAt and hadVaccinatedAt date inputs are empty, delete property from objet
        if(hadCovidAt.value === '' || hadCovidAt.value === null) {
          delete data['had_covid_at']
        } 
        if(vaccinatedAt.value === '' || vaccinatedAt.value === null) {
          delete data['vaccinated_at']
        }

        //check if devtalks theme value is empty, delete devtalk_topic
        if(devtalk_topic.value === '' || devtalk_topic.value === null) {
            delete data['devtalk_topic']
          } 



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