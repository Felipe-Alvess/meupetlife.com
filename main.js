// loadingpage
const elemenPreloader = document.getElementById('preloader');
function loadingPage(){
    elemenPreloader.classList.toggle('preloader');
}
setTimeout(loadingPage, 3000);
// loadingpage

// // botao mostrar e esconder lista
// let elementosDuvida = document.querySelectorAll('.duvida');
// elementosDuvida.forEach(function (duvida){
//     duvida.addEventListener('click', function(){
//        duvida.classList.toggle('ativa')
    
// })
// })


const elementosDuvida = document.querySelectorAll('.duvida');
elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', ()=>{
        duvida.classList.toggle('ativa');
      
    });
});


// btn menu Mobile
function openMenu(){
   if(menuMobile.style.display == 'flex'){
    menuMobile.style.display = 'none';
   }else{
    menuMobile.style.display = 'flex';
   }
}
    
