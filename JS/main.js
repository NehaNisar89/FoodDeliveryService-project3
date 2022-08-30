const menuToggler = document.querySelector ('.menu-toggler');
const navbar = document.querySelector ('.nav-bar');
const menuBar= document.querySelector ('.menu-bar');

menuToggler.addEventListener('click',() => {
    navbar.classList.toggle('show-menu');
    if(navbar.classList.contains('show-menu')) {
        menuBar.style.maxHeight = menuBar.scrollHeight + 'px';
        setTimeout (() =>{
            menuBar.style.overFlow = 'visible'; 
        }, 3000 )
    }
    else {
        menuBar.style.maxHeight = '0px';
        menuBar.style.overFlow =  'hidden';
    }
});