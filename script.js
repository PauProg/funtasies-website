const bdark = document.getElementById('bdark');
const body = document.getElementById('body');

const aboutBtn = document.getElementById('aboutUs');

bdark.addEventListener('click', function(){
    body.classList.toggle('darkmode');
    if(bdark.className == 'bx bxs-moon'){
        bdark.className = 'bx bxs-sun';
    } else {
        bdark.className = 'bx bxs-moon';
    }
});

aboutBtn.addEventListener('click', function(){
    window.location.href = "/#";
});