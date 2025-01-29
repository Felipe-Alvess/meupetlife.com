// função abrir menu mobile
function openMenu(){
    if(menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none';
    }else{
        menuMobile.style.display = 'block';
    }
}
// função abrir menu mobile
// loadingPage
const elemenPreloader = document.getElementById('preloader');
function loadingPage(){
    elemenPreloader.classList.remove('preloader');
}
setTimeout(loadingPage, 3000);
// loadingPage
// botao mostrar e esconder lista
let elementosDuvida = document.querySelectorAll('.duvida');
elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function(){
       duvida.classList.toggle('ativa')
    
})
})

