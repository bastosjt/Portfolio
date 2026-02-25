const menu_defilant = document.getElementById("menu_defilant");
const menu_defilant_bg = document.getElementById("menu_defilant_bg");
const body_scroll = document.getElementById("body_scroll");
const header = document.getElementById("header");

let menuOuvert = false;

function ouvrir_menu() {
  if (!menuOuvert) {
    body_scroll.style.overflowY = "hidden";
    menu_defilant.style.opacity = "1";
    menu_defilant.style.pointerEvents = "auto";
    menu_defilant_bg.style.visibility = "visible";
    menu_defilant_bg.style.opacity = "1";
    header.style.opacity = "0";

    if (window.innerWidth <= 500) {
      menu_defilant.style.width = "calc(100vw - 24px)";
    } else if (window.innerWidth <= 768) {
      menu_defilant.style.width = "50%";
    } else {
      menu_defilant.style.width = "25%";
    }
    menuOuvert = true;
  } else {
    body_scroll.style.overflowY = "scroll";
    menu_defilant.style.opacity = "0";
    menu_defilant.style.pointerEvents = "none";
    menu_defilant_bg.style.visibility = "hidden";
    menu_defilant.style.width = "0%";
    menu_defilant_bg.style.opacity = "0";
    header.style.opacity = "1";
    menuOuvert = false;
  }
}

window.addEventListener("resize", () => {
  if (menuOuvert) {
    if (window.innerWidth <= 500) {
      menu_defilant.style.width = "calc(100vw - 24px)";
    } else if (window.innerWidth <= 768) {
      menu_defilant.style.width = "50%";
    } else {
      menu_defilant.style.width = "25%";
    }
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    body_scroll.style.overflowY = "scroll";
    menu_defilant.style.opacity = "0";
    menu_defilant.style.pointerEvents = "none";
    menu_defilant_bg.style.visibility = "hidden";
    menu_defilant.style.width = "0%";
    menu_defilant_bg.style.opacity = "0";
    header.style.opacity = "1";
    menuOuvert = false;
  }
});
