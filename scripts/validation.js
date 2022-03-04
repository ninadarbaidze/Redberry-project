//email and phone validation regex
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
    }
    
    
}



//Check PAGE 4

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

    if(devThemeValue === '') {
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

//Check PAGE 3

function CheckCovid() {
    let valid = true

    if(workPreferenceRadio1.checked !== true && workPreferenceRadio2.checked !== true && workPreferenceRadio3.checked !== true) {
        setRadioError('*this field is required', 0)
        valid = false;
    } else {
        setRadioSuccess(0);
    }


    if(covidPositive.checked !== true && covidNegative !== true) {
        setRadioError('*this field is required', 1)
        valid = false;
    } else {
        setRadioSuccess(1);
    }



    return valid;
}





//Check PAGE 2

function checkSkills() {
    return true;

}
    
    

//Check PAGE 1

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

     if (!isValidNumber(numberValue)) {
            setError(number, '*please provide a valid number')
            valid = false
        } else {
            setSuccess(number);
        };      

    return valid;

}



function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = message;
    element.classList.add('error-input');    
}


function setRadioError(message, x) {
    // const inputControl = element.parentElement;
    // const errorDisplay = inputControl.querySelector('.radio-error');
    radioError[x].innerHTML = message;
}

function setRadioSuccess(x) {
    radioError[x].innerHTML = '';
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = '';
    element.classList.remove('error-input');    
}

