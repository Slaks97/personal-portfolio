let darkMode = document.querySelector('.darkMode');
// let lightMode = document.querySelector('.lightMode');
let body = document.querySelector('.body');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let navList = document.querySelectorAll('.nav-list a');
let navbarP = document.querySelector('.navbar-p');
let projects = document.querySelector('.projects');
let about = document.querySelector('.about');
let aboutIntro = document.querySelector('.about-intro');
let aboutText = document.querySelector('.about-text');
let projectBox = document.querySelectorAll('.project');
let projectDesc = document.querySelectorAll('.project-desc');


darkMode.addEventListener('click', function() {
    navbarP.style.color = '#ff8383';
    navList.forEach((a => {
        a.style.color = '#ff8383';
    }));

    projectBox.forEach((box => {
        box.style.backgroundColor = '#fefefe';
    }));

    projectDesc.forEach((text => {
        text.style.color = 'black';
    }));
    
    header.style.backgroundColor = 'black';
    header.style.borderBottom = '0.5px solid #ff838339';
    projects.style.backgroundColor = 'black';
    projects.style.color = 'white';
    about.style.backgroundColor = 'black';
    about.style.color = 'white';
    aboutIntro.style.backgroundColor = '#d8c7de';
    aboutText.style.color = 'black';
    footer.style.backgroundColor = 'black';
    footer.style.color = '#ff8383';
    footer.style.borderTop = '1px solid #ff838339';
    darkMode.innerHTML = 'OFF';
    darkMode.style.color = 'black';
    darkMode.style.fontWeight = 'bold';
    darkMode.style.backgroundColor = '#ff8383';
    // lightMode.innerHTML = 'OFF';
    // lightMode.style.backgroundColor = '#0e0e0e';
    // lightMode.style.color = 'white';
});

// lightMode.addEventListener('click', function() {
//     lightMode.innerHTML = 'ON';
//     darkMode.innerHTML = 'OFF';
// });