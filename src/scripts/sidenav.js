let sidenav = document.getElementById('header');
let toggler = document.getElementById('toggler');
let open;
addEventListener('resize', () => {
  if (window.innerWidth >= 950) {
    sidenav.style.left = "0";
    document.getElementsByClassName('nav-menu')[0].style.marginLeft = ".5rem";

  } else if (window.innerWidth <= 950) {
    sidenav.style.left = "-26rem";
    toggler.innerHTML = "&#9776;"
    open = false;
  }   
})

function toogleNav() {
  if (!open) { // se tiver fechado, vai abrir
    sidenav.style.left = "0";
    this.innerHTML = "&times;"
  } else { // se tiver aberto, vai fechar
    sidenav.style.left = "-26rem";
    this.innerHTML = "&#9776;"
  }
  open = !open;
}