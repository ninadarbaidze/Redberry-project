//covid logif stuff


function manageCovidDate(answer) {
    switch(answer) {
        case 'positive-covid':
            return hiddenContainer[0].style.display = 'block';
        case 'negative-covid':
            return hiddenContainer[0].style.display = 'none';
        case 'positive-vaccine':
            return hiddenContainer[1].style.display = 'block';
        case 'negative-vaccine':
            return hiddenContainer[1].style.display = 'none';
       
    };
}



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





// vaccinePositive.addEventListener('click', addVaccineDate)
// vaccineNegative.addEventListener('click', removeVaccineDate)




