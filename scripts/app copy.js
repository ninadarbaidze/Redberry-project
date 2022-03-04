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


//change section handlers
prevArrowButton.addEventListener('click', () => {changePage('prev')});

nextArrowButton.addEventListener('click', () => {changePage('next')});

function nina1() {
    console.log(true)
    return true;
}

function nina2() {
    console.log(true)
    return true;
}

function changePage (arrow) {
    const activePage = document.querySelector('.active');

    let index = 0
 

    //1
    if (nina1() && arrow === 'next') {
        detailsSections[0].classList.remove('active-detail');
        detailsSections[1].classList.add('active-detail');
        formSections[0].classList.remove('active');
        formSections[1].classList.add('active');
        circles[1].classList.add('circle-bold')
    } else if (arrow === 'prev' && index === 0) {
        location.href = "/Redberry-project/index.html"
    }
    index++
    
    

    if (nina2() && arrow === 'next') {
        detailsSections[1].classList.remove('active-detail');
        detailsSections[2].classList.add('active-detail');
        formSections[1].classList.remove('active');
        formSections[2].classList.add('active');
        circles[2].classList.add('circle-bold')
    } else if (arrow === 'prev' && index === 1) {
        detailsSections[0].classList.remove('active-detail');
        detailsSections[1].classList.add('active-detail');
        formSections[0].classList.remove('active');
        formSections[1].classList.add('active');
        circles[1].classList.add('circle-bold')
    }



}

    // //2

    // if (nina2() && arrow === 'next') {

    //     detailsSections[0].classList.remove('active-detail');
    //     detailsSections[1].classList.add('active-detail');
    //     formSections[0].classList.remove('active');
    //     formSections[1].classList.add('active');
    //     circles[1].classList.add('circle-bold')
    // } else if (arrow === 'prev' && index === 0) {
    //     location.href = "/Redberry-project/index.html"
        
    // }





//     if (arrow === 'next') {
//         index++;
//     } else if (arrow === 'prev' && index === 0) {
//         location.href = "/Redberry-project/index.html"
//     } else if (arrow === 'prev') {
//         circles[index].classList.remove('circle-bold');
//         index--; 
//     };

//     formSections[index].classList.add('active');
//     circles[index].classList.add('circle-bold')

//     if(index === 4) {
//         circlesNavigation[0].style.display = "none";

//     } 
    
//     else {
//         detailsSections[index].classList.add('active-detail');
//     };

// }





// goBackButton.addEventListener('click', goBack);

// function goBack() {
//     formSections[4].classList.remove('active');
//     circles[4].classList.remove('circle-bold');
//     formSections[3].classList.add('active');
//     detailsSections[3].classList.add('active-detail');
//     navigation.classList.add('active');

// }





