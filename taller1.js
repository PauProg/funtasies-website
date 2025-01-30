const bdark = document.getElementById('bdark');
const bdark2 = document.getElementById('bdark2');
const body = document.getElementById('body');
const logoBanner = document.getElementById('logoBanner');
const menuToggler = document.getElementById('menuToggler');
const responsiveMenu = document.getElementById('responsive-menu');

logoBanner.addEventListener('click', function(){
    window.location.href = "/index.html";
});

bdark.addEventListener('click', function(){
    body.classList.toggle('darkmode');
    if(bdark.className == 'bx bxs-moon'){
        bdark.className = 'bx bxs-sun';
    } else {
        bdark.className = 'bx bxs-moon';
    }
});

bdark2.addEventListener('click', function(){
    body.classList.toggle('darkmode');
    if(bdark2.className == 'bx bxs-moon'){
        bdark2.className = 'bx bxs-sun';
    } else {
        bdark2.className = 'bx bxs-moon';
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        responsiveMenu.style.display = 'none';
        menuToggler.classList.remove('bx-x');
        menuToggler.classList.add('bx-menu');
    }
});

menuToggler.addEventListener('click', function(){
    if(menuToggler.classList.contains('bx-menu')){
        menuToggler.classList.remove('bx-menu');
        menuToggler.classList.add('bx-x');
        responsiveMenu.style.display = 'block';
    } else {
        menuToggler.classList.remove('bx-x');
        menuToggler.classList.add('bx-menu');
        responsiveMenu.style.display = 'none';
    }
});