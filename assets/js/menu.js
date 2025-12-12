const menu_defilant = document.getElementById('menu_defilant');
const menu_defilant_bg = document.getElementById('menu_defilant_bg');
const body_scroll = document.getElementById('body_scroll')

let menuOuvert = false;

function ouvrir_menu() {
  if (!menuOuvert) {
    body_scroll.style.overflowY = 'hidden';
    menu_defilant.style.opacity = '1';
    menu_defilant_bg.style.visibility = 'visible';
    menu_defilant_bg.style.opacity = '1';
    menu_defilant.style.height = '40vh';
    menuOuvert = true;
  } else {
    body_scroll.style.overflowY = 'scroll';
    menu_defilant.style.opacity = '0';
    menu_defilant_bg.style.visibility = 'hidden';
    menu_defilant_bg.style.opacity = '0';
    menu_defilant.style.height = '0';
    menuOuvert = false;
  }
}