//get submitted application data
let appData;
const appPageUrl = "https://bootcamp-2022.devtest.ge/api/applications?token=faf3444b-260d-4ae9-b608-c4697534b55a"
async function getApplications() {

    try {
        const appResponse = await fetch(appPageUrl);
        appData = await appResponse.json();
        populateForm(appData);
    
    } catch(error) {
        console.log(error)
    };
    
}

getApplications();


//create skillset information div elements
function skillContainerElements(obj) {
    let skillsDiv;
        for(let elem of obj.skills) {
            let skillNames = ['HTML', 'CSS', 'PHP', 'Laravel', 'React.JS', 'Vue.JS', 'Svelte', 'Angular'];
            let aba = skillNames[elem.id - 1]
            skillsDiv = document.createElement('div');
            skillsDiv.setAttribute('class', 'skill-line')
            skillsDiv.innerHTML = ` 
            <p>${aba}</p><p>Years of Experience:</p><p>${elem.experience}</p>`
            for (let i = 0; i < skillsetAppcontainer.length; i++) {
                skillsetAppcontainer[i].append(skillsDiv) 
            };

    };
    return skillsetAppcontainer;

}




//manage choosen radio buttons
function choosenRadioButton(prop , obj) {

    
    let propIndex = obj.indexOf(prop);

    //check for boolean type values
    prop['had_covid'] === true ? covidBoolean[propIndex].children[0].style.background = 'black' : covidBoolean[propIndex].children[2].style.background = 'black';
    prop['vaccinated'] === true ? vaccineBoolean[propIndex].children[0].style.background = 'black' : vaccineBoolean[propIndex].children[2].style.background = 'black';
    devtalkBoolean['will_organize_devtalk'] === true ? devtalkBoolean[propIndex].children[0].style.background = 'black' : devtalkBoolean[propIndex].children[2].style.background = 'black';
    
    //check for work preference values
    if(prop['work_preference'] === "from_office") {
        workRadio[propIndex].children[0].style.background = 'black';
    } else if(prop['work_preference'] === "from_home") {
        workRadio[propIndex].children[2].style.background = 'black';
    } else {
        workRadio[propIndex].children[4].style.background = 'black';
    };
    
}



//clear empty values
function clearEmtyValues(prop, obj) {
    let propIndex = obj.indexOf(prop);

    if(prop['had_covid_at'] === null)  {
        hadCovidParagraph[propIndex].children[0].innerText = ''
    };
    
    if(prop['vaccinated_at'] === null) {
        hadVaccineParagraph[propIndex].children[0].innerText = ''
    };

    if(prop['devtalk_topic'] === null) {
        devtalksParagraph[propIndex].children[0].innerText = ''
    };

    if(prop['phone'] === null) {
        numbersParagraph[propIndex].children[7].innerText = '-'
    };

}

//create form application dropdown sections
function populateForm(obj) {

    for(let prop of obj) {
    let applicationSection = document.createElement('section')
    applicationSection.setAttribute('class', 'submitted-applications')
    let index = obj.indexOf(prop) + 1
    
        
        applicationSection.innerHTML = ` <section class="submitted-applications" id="submitted-applications">
            <div class="app-head" data-headId=${index}>
                <p class="submitted-form-id">${index}</p>
            </div>

            <div class="app-body">

                <!-- personal information -->

                <div class="personal-information">
                    <h3>Personal information</h3>
                    <div class="grid-2col number">
                        <p>Firstname</p> <p>${prop['first_name']}</p>
                        <p>Lastname</p> <p>${prop['last_name']}</p>
                        <p>E Mail</p> <p>${prop['email']}</p>
                        <p>Phone</p> <p>${prop['phone']}</p>
                    </div>
                </div>



                <!-- skillset -->

                <div class="skillset">
                    <h3>Skillset</h3>
                    <h4>Covid Situation</h4>
                    <div class="skillset-container">

                    </div>
                 </div>


                
                <!-- covid -->

                <div class="covid-situation">
                    <h3>Covid Situation</h3>
                    <h4>How would you prefer to work?</h4>
                    <div class="grid-2col-circle work-radio">
                        <span class="circle"></span> <p>From Sairme Office</p>
                        <span class="circle"></span> <p>From Home</p>
                        <span class="circle"></span> <p>Hybrid</p>
                    </div>

                    <h4>Did you have covid 19?</h4>
                    <div class="grid-2col-circle covid-boolean">
                        <span class="circle"></span> <p>Yes</p>
                        <span class="circle"></span> <p>No</p>
                    </div>

                    <h4>When did you have covid 19?</h4>
                    <div class="box had-covid">
                        <p>${prop['had_covid_at']} </p>
                    </div>

                    <h4>Have you been vaccinated?</h4>
                    <div class="grid-2col-circle vaccine-boolean"->
                        <span class="circle"></span> <p>Yes</p>
                        <span class="circle"></span> <p>No</p>
                    </div>
                   

                    <h4>When did you get covid vaccine?</h4>
                    <div class="box had-vaccine">
                        <p>${prop['vaccinated_at']}</p>
                    </div>

                </div>

                <!-- insights -->


                <div class="insights">
                    <h3>insights</h3>

                    <h4>Would you attend Devtalks and <br> maybe also orginize your own?</h4>
                    <div class="grid-2col-circle devtalks-boolean">
                        <span class="circle"></span> <p>Yes</p>
                        <span class="circle"></span> <p>No</p>
                    </div>

                    <h4>What would you speak about at Devtalk?</h4>
                    <div class="box-textarea will-devtalk">
                        <p>${prop['devtalk_topic']}</p>
                    </div>

                    <h4>Tell us something special</h4>
                    <div class="box-textarea">
                        <p>${prop['something_special']}</p>
                    </div>

                </div>
               

            </div>
        </section>`;

    mainPage.appendChild(applicationSection);
    skillContainerElements(prop);
    choosenRadioButton(prop, obj);
    clearEmtyValues(prop, obj);

};




//dropdown click handler
let appHead = Array.from(document.querySelectorAll('.app-head'))
let appBody = document.getElementsByClassName('app-body');

for (let i = 0; i < appHead.length; i++) {
    appHead[i].addEventListener('click', () => {
        closeAppSection(i)
    })
}


function closeAppSection(ind) {

    for (let i = 0; i < appHead.length; i++) {
        if(ind === i && appBody[i].style.display === 'grid') {
            appBody[i].style.display = 'none'
            appHead[i].style['background-color'] = '#FE3B1F';
            appHead[i].style.backgroundImage = dropDownIconStartPosition;
            

        } else if(ind === i) {
            appBody[i].style.display = 'grid'
            appHead[i].style['background-color'] = '#F05039';
            appHead[i].style.backgroundImage = dropDownIconLeft;
        };
    };
   
};



}


