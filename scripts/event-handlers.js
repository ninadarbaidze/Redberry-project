
//change section handlers
prevArrowButton.addEventListener('click', () => {changePage('prev')});

nextArrowButton.addEventListener('click', () => {changePage('next')});




function changePage (arrow) {
    // let index = 
    const activePage = document.querySelector('.active');

    let index = formSections.indexOf(activePage);
    console.log(index)
    console.log(checkValidation(index))
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

    } 
    
    else {
        detailsSections[index].classList.add('active-detail');
    };

}





goBackButton.addEventListener('click', goBack);

function goBack() {
    formSections[4].classList.remove('active');
    circles[4].classList.remove('circle-bold');
    formSections[3].classList.add('active');
    detailsSections[3].classList.add('active-detail');
    navigation.classList.add('active');

}
