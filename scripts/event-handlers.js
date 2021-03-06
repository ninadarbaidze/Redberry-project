//change sections
prevArrowButton.addEventListener('click', () => {changePage('prev')});
nextArrowButton.addEventListener('click', () => {changePage('next')});


//hide or show date inpus based on covid page true|false
covidPositive.addEventListener('click', () => {
    manageCovidDate('positive-covid');
});

covidNegative.addEventListener('click', () => {
    manageCovidDate('negative-covid');
});

vaccinePositive.addEventListener('click', () => {
    manageCovidDate('positive-vaccine');
});

vaccineNegative.addEventListener('click', () => {
    manageCovidDate('negative-vaccine');
});



//hide or show date inpus based on devtalks page true|false
orginizedDevtalks.addEventListener('click', () => {
    manageDevtalks('iWould');
});

notOrginizedDevtalks.addEventListener('click', () => {
    manageDevtalks('iWouldNot');
});



//go back button from submit page
goBackButton.addEventListener('click', goBack);


//handling change sections event
function changePage (arrow) {
    const activePage = document.querySelector('.active');

    let index = formSections.indexOf(activePage);
    
    console.log(index)
    formSections[index].classList.remove('active');
    detailsSections[index].classList.remove('active-detail');
    
    if (arrow === 'next' && checkValidation(index)) {
        index++;
    } else if (arrow === 'prev' && index === 0) {
        location.href = "/Redberry-project/index.html"
    } else if (arrow === 'prev') {
        circles[index].classList.remove('circle-bold');
        index--; 
    };

    formSections[index].classList.add('active');
    circles[index].classList.add('circle-bold')

    if(index === 4) {
        circlesNavigation[0].style.display = "none";

    } else {
        detailsSections[index].classList.add('active-detail');
    };

}


//handling go back button from submit page
function goBack() {
    formSections[4].classList.remove('active');
    circles[4].classList.remove('circle-bold');
    formSections[3].classList.add('active');
    detailsSections[3].classList.add('active-detail');
    navigation.classList.add('active');

}


// hide and show dates, based on choosen true/false
const manageCovidDate = (answer) => {
    switch(answer) {
        case 'positive-covid':
            return (hiddenContainer[0].style.display = 'block')
        case 'negative-covid':
            hadCovidAt.value = ''
            return hiddenContainer[0].style.display = 'none'
        case 'positive-vaccine':
            return hiddenContainer[1].style.display = 'block';
        case 'negative-vaccine':
            vaccinatedAt.value = ''
            return hiddenContainer[1].style.display = 'none';
       
    };
}


const manageDevtalks = (answer) => {
    switch(answer) {
        case 'iWould':
            return devTalkContainer[0].style.display = 'block'
        case 'iWouldNot':
            devTheme.value = ''
            return devTalkContainer[0].style.display = 'none'
    };
}


