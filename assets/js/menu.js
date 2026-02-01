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
    
    if (window.matchMedia("(max-width: 450px)").matches) {
      menu_defilant.style.width = '100%';
    } else {
      menu_defilant.style.width = '40%';
    }

    menuOuvert = true;
  } else {
    body_scroll.style.overflowY = 'scroll';
    menu_defilant.style.opacity = '0';
    menu_defilant_bg.style.visibility = 'hidden';
    menu_defilant.style.width = '0%';
    menu_defilant_bg.style.opacity = '0';
    menuOuvert = false;
  }
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      body_scroll.style.overflowY = 'scroll';
      menu_defilant.style.opacity = '0';
      menu_defilant_bg.style.visibility = 'hidden';
      menu_defilant.style.width = '0%';
      menu_defilant_bg.style.opacity = '0';
      menuOuvert = false;
    }
  });