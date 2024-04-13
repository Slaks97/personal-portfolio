const btn = document.getElementById("btn-bottom");

btn.addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.id = 'languages';
    newElement.innerHTML = 'LANGUAGES USED: HTML & CSS';

    let projectThree = document.getElementById('project3');
    projectThree.appendChild(newElement);
})