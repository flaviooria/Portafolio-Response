const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-menu')
const ipadResponse= window.matchMedia('screen and (max-width:767px')

/*metodo mas corto*/ 
burgerButton.addEventListener('click', () => {
    menu.classList.toggle('is-active')
})

/* con condicionales
burgerButton.addEventListener('click', function (){
    if(menu.classList.contains('is-active') ) {
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active')
    }
} ) */