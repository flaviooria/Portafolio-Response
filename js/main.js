const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-menu')
const ipadResponse= window.matchMedia('screen and (max-width:767px')


/* ---- metodo mas corto 
burgerButton.addEventListener('click', () => {
    menu.classList.toggle('is-active')
}) ---- */ 

/*con la variable de ipad sirve de switch ya que nos servira para activar si el boton menu funciona con pantallas menores que el de 767px */

ipadResponse.addListener(validation)

function validation (event) {
    if(event.matches) {
        burgerButton.addEventListener('click', () => {
            menu.classList.toggle('is-active')
        })
        console.log('match')
    }
} 

validation(ipadResponse)


/* con condicionales
burgerButton.addEventListener('click', function (){
    if(menu.classList.contains('is-active') ) {
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active')
    }
} ) */