const bdark = document.getElementById('bdark');
const bdark2 = document.getElementById('bdark2');
const body = document.getElementById('body');
const aboutBtn = document.getElementById('aboutUs');
const logoBanner = document.getElementById('logoBanner');
const menuToggler = document.getElementById('menuToggler');
const responsiveMenu = document.getElementById('responsive-menu');
const tallerCientific = document.getElementById('taller-cientific');
const lupita = document.getElementById('lupita');
const buscador = document.getElementById('buscador');
const closeBuscador = document.getElementById('close-buscador');
const inputBuscador = buscador.querySelector('input');
const resultados = document.getElementById('resultados');

//Distintos talleres, enlaces, y palabras relacionadas
const talleres = [
    { nombre: "Taller científic", url: "/serveis/taller1/taller1.html", palabras: ["ciencia", "pluja de colors", "fluid no newtonià", "volcà", "sal de colors", "pluja de colors amb oli", "expansió de colors", "cientific"] },
    { nombre: "Taller de Pintura", url: "#", palabras: ["arte", "acuarela", "óleo", "colores"] },
    { nombre: "Taller de Cocina", url: "#", palabras: ["recetas", "gastronomía", "chef", "comida"] },
    { nombre: "Taller de Astronomía", url: "#", palabras: ["estrellas", "planetas", "universo", "telescopio"] }
];

// Función para aplicar el tema guardado o predeterminado
function aplicarTema(tema) {
    if (tema === 'oscuro') {
        body.classList.add('darkmode');
        bdark.className = 'bx bxs-sun';
        bdark2.className = 'bx bxs-sun';
    } else {
        body.classList.remove('darkmode');
        bdark.className = 'bx bxs-moon';
        bdark2.className = 'bx bxs-moon';
    }
    localStorage.setItem('tema', tema);
}

//Comprueba cual es el tema guardado en caso de que este esté guardado
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
    aplicarTema(temaGuardado);
} else {
    const temaInicial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
    aplicarTema(temaInicial);
}

//Función para cambiar el tema
function cambiarTema() {
    const nuevoTema = body.classList.contains('darkmode') ? 'claro' : 'oscuro';
    aplicarTema(nuevoTema);
}

//Eventos para los botones que cambian los botones
bdark.addEventListener('click', cambiarTema);
bdark2.addEventListener('click', cambiarTema);

//El logo de la nav que lleva a la home
logoBanner.addEventListener('click', function () {
    window.location.href = "/index.html";
});

//Cerrar el menú responsive al llegar a 800px de width
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        responsiveMenu.style.display = 'none';
        menuToggler.classList.remove('bx-x');
        menuToggler.classList.add('bx-menu');
    }
});

//Botón de about us (home)
aboutBtn.addEventListener('click', function () {
    window.location.href = "/#";
});

//Abrir y cerrar menú responsive
menuToggler.addEventListener('click', function () {
    if (menuToggler.classList.contains('bx-menu')) {
        menuToggler.classList.remove('bx-menu');
        menuToggler.classList.add('bx-x');
        responsiveMenu.style.display = 'block';
    } else {
        menuToggler.classList.remove('bx-x');
        menuToggler.classList.add('bx-menu');
        responsiveMenu.style.display = 'none';
    }
});

//Botón al taller cientifico (home)
tallerCientific.addEventListener('click', function () {
    window.location.href = "/serveis/taller1/taller1.html";
});

// Mostrar buscador
lupita.addEventListener('click', function(){
    body.style.overflow = "hidden";
    buscador.style.display = "block";
    inputBuscador.focus();
});

// Cerrar buscador
closeBuscador.addEventListener('click', function(){
    body.style.overflow = "auto";
    buscador.style.display = "none";
    inputBuscador.value = "";
    resultados.innerHTML = "";
});

// Buscador de talleres
inputBuscador.addEventListener('keyup', function() {
    const filtro = inputBuscador.value.toLowerCase();
    resultados.innerHTML = "";

    if (filtro.trim() === "") return;

    talleres.forEach(taller => {
        if (taller.nombre.toLowerCase().includes(filtro) || taller.palabras.some(palabra => palabra.includes(filtro))) {
            const li = document.createElement('li');
            const enlace = document.createElement('a');
            enlace.href = taller.url;
            enlace.textContent = taller.nombre;
            li.appendChild(enlace);
            resultados.appendChild(li);
        }
    });
});