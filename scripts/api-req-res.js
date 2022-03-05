//create options for select input
function createOptions(id, title) {
    let skillsInput = document.getElementById('skills');

    for (let i = 0; i < id.length; i++) {
        const optionList = document.createElement('option');
        optionList.innerText = title[i];
        optionList.setAttribute('id', id[i])
        optionList.setAttribute('class', 'option-list')

        skillsInput.append(optionList);
    }

    return skillsInput;

}

//get skills from api
const apiUrl = 'https://bootcamp-2022.devtest.ge/api/skills'
const idList = []
const titleList = []

async function getSkills() {
    const response = await fetch(apiUrl);
    const data = await response.json()

    for (let i = 0; i < data.length; i++) {
        idList[i] = data[i].id;
        titleList[i] = data[i].title;
    }

    createOptions(idList, titleList)


} 

getSkills();


//add & remove skills


let addSkillsButton = document.getElementById('add-skills');
let addRemoveUlList = document.getElementById('add-remove');
let yearsOfExperience = document.getElementById('experience-years');
// let skillName = document.getElementsByClassName('skill-name');
// let years = document.getElementsByClassName('years');
// let skillsListItem = document.getElementsByClassName('skills-list-item');
// let optionsListss = document.querySelectorAll('.option-list')



//add skills
addSkillsButton.addEventListener('click', addSkillsContainer)

function addSkillsContainer() {

        //check years of experience validation
    setSuccess(skillsInput);
    if(yearsOfExperience.value === '') {
    setError(yearsOfExperience, 'this field is required')
        return;    
    } else {
            setSuccess(yearsOfExperience);
    }
    

    let skillSelectInput = document.getElementById('skills');
    let option = skillSelectInput.options[skillSelectInput.selectedIndex];
    
    let createSkillsContainerLi = document.createElement('li');

    createSkillsContainerLi.innerHTML = `
            <p class="skill-name">${option.value}</p>
            <p class="years-experience">Years of Experience: ${yearsOfExperience.value}</p> 
            <p class="years"></p>
                <button id="dltbtn-${option.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FE3B1F" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>                                   
                </button>
            
            `;
            createSkillsContainerLi.setAttribute('id', `li-${option.id}`)

            let ifLiExists = Array.from(document.querySelectorAll(`[id*=li-${option.id}]`))

            //check if skills already exists
            if(ifLiExists.length >= 1) {
                return;
            } else {
                addRemoveUlList.append(createSkillsContainerLi);
            }

            //delete specific skill
            let deleteSkillbutton = document.getElementById(`dltbtn-${option.id}`);
            deleteSkillbutton.addEventListener('click', deleteSkillsContainer)


            function deleteSkillsContainer() {
                for (let i = 1; i < idList.length; i++) {
                    if(deleteSkillbutton.id ===  `dltbtn-${i}`) {
                       let listConntainer =  document.getElementById(`li-${i}`)
                       listConntainer.remove()
                    };
                };
                
            }



        
}