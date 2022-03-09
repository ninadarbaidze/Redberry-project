//email validation 
const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isValidNumber = (num) => {
    let clearNum = num.replace(/\s|\-|\.|\_/g,'');
    let regEx = /^\+9955[0-9]{8}$/g;
    return regEx.test(clearNum);
    };

//phone validation
function checkValidation(index) {
     
    switch(index) {
        case 0: 
        return checkPersonalInfo();

        case 1:
        return checkSkills();

        case 2: 
        return CheckCovid();

        case 3:
        return checkDevTalks();
    };
    
    
}



//Check PAGE 1 - Personal Information

function checkPersonalInfo() {
    let valid = true;
   const userNameValue = userName.value.trim();
   const userSurnameValue = surname.value.trim();
   const emailValue = email.value.trim();
   const numberValue = number.value;

  
    if (userNameValue === '') {
        setError(userName, '*first name field is required');
        valid = false
        } else if (userNameValue.length < 2) {
            setError(userName, '*first name should include 3 or more characters')
        valid = false
        } else {
            setSuccess(userName);
        };

    if (userSurnameValue === '') {
        setError(surname, '*last name field is required');
        valid = false
        } else if (userSurnameValue.length < 2) {
            setError(surname, '*last name should include 3 or more characters')
            valid = false
        } else {
            setSuccess(surname);
        };

    if (emailValue === '') {
        setError(email, '*email field is required');
        valid = false
        } else if (!isValidEmail(emailValue)) {
            setError(email, '*please provide a valid email adress')
            valid = false
        } else {
            setSuccess(email);
        };

     if (numberValue === '') {
        setSuccess(number);
        } else if(!isValidNumber(numberValue)) {
            setError(number, '*please provide a valid number')
            valid = false
     };

    return valid;

}



//Check PAGE 2 - Skillset

function checkSkills() {
    let valid = true;
    if(addRemoveUlList.children.length === 0) {
        setError(skillsInput, '*you should choose and add at least 1 skill')
        valid = false;
    }  else if(yearsOfExperience.value === '') {
            setError(yearsOfExperience, '*this field is required')
            valid = false;
    } else {
        setSuccess(yearsOfExperience);
        setSuccess(skillsInput);
    };
    return valid;
}
  


//Check PAGE 3 - Covid Stuff

function CheckCovid() {
    let valid = true;

    if(workPreferenceRadio1.checked !== true && workPreferenceRadio2.checked !== true && workPreferenceRadio3.checked !== true) {
        setRadioError('*this field is required', 0)
        valid = false;
    } else {
        setRadioSuccess(0);
    };


    if(covidPositive.checked !== true && covidNegative.checked !== true) {
        setRadioError('*this field is required', 1)
        valid = false;
    } else {
        setRadioSuccess(1);
    };

    if(vaccinePositive.checked !== true && vaccineNegative.checked !== true) {
        setRadioError('*this field is required', 2)
        valid = false;
    } else {
        setRadioSuccess(2);
    };


    if(hiddenContainer[0].style.display === "block" && hadCovidAt.value === '') {
        setError(hadCovidAt, '*this field is required')
        valid = false;
    } else {
        setSuccess(hadCovidAt)
    };

    if(hiddenContainer[1].style.display === "block" && vaccinatedAt.value === '') {
        setError(vaccinatedAt, '*this field is required')
        valid = false;
    } else {
        setSuccess(vaccinatedAt)
    };


    return valid;
}




//Check PAGE 4 - About Yourself

function checkDevTalks() {
    let valid = true;
    const devThemeValue = devTheme.value.trim();
    const specialValue = special.value.trim();

    if(orginizedDevtalks.checked !== true && notOrginizedDevtalks.checked !== true) {
        setRadioError('*this field is required', 3)
        valid = false;
    } else {
        setRadioSuccess(3);
    };

    if(orginizedDevtalks.checked === true && devTheme.value === '') {
        setError(devTheme, '*this field is required')
        valid = false;
    } else {
        setSuccess(devTheme);
    };

    if(specialValue === '') {
        setError(special, '*this field is required')
        valid = false;
    } else {
        setSuccess(special);
    };

    return valid;
}

  
//set error function
function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = message;
    element.classList.add('error-input');    
}


//set error function for radio buttons
function setRadioError(message, x) {
    radioError[x].innerHTML = message;
}


//set success funtion
function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = '';
    element.classList.remove('error-input');    
}


//set success for radio buttons
function setRadioSuccess(x) {
    radioError[x].innerHTML = '';
}




