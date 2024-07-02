window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

    document.getElementById("header_text").style.fontSize = "10px";

  } else {

    document.getElementById("header_text").style.fontSize = "16px";
    
  }


  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    
    document.getElementById("html").style.width= "100%";
    document.getElementById("sql").style.width= "75%";
    document.getElementById("javascript").style.width= "85%";
    document.getElementById("php").style.width= "50%";

    document.getElementById("photoshop").style.width= "90%";
    document.getElementById("figma").style.width= "90%";
    document.getElementById("illustrator").style.width= "75%";

  } else {

    document.getElementById("html").style.width= "0%";
    document.getElementById("sql").style.width= "0%";
    document.getElementById("javascript").style.width= "0%";
    document.getElementById("php").style.width= "0%";

    document.getElementById("figma").style.width= "0%";
    document.getElementById("photoshop").style.width= "0%";
    document.getElementById("illustrator").style.width= "0%";

  }

}

function copier_telephone() {

  navigator.clipboard.writeText("0643309452");
  document.getElementById("contact_copier").style.opacity = "1";
  document.getElementById("contact_copier").style.width = "260px";
  setTimeout(() => {document.getElementById("contact_copier").style.width = "0%";
  document.getElementById("contact_copier").style.opacity = "0";}, 3000);
}

function copier_mail() {
      
  navigator.clipboard.writeText("Bastien.jamet92@gmail.com");
  document.getElementById("contact_copier").style.opacity = "1";
  document.getElementById("contact_copier").style.width = "260px";
  setTimeout(() => {document.getElementById("contact_copier").style.width = "0%";
  document.getElementById("contact_copier").style.opacity = "0";}, 3000);
}

function ouvrir_likedin(){
  window.open('https://www.linkedin.com/in/bastien-jamet-0151b1266');
}

function ouvrir_localisation(){
  window.open('https://www.google.com/maps?output=search&q=rueil+malmaison&entry=mc&sa=X&ved=2ahUKEwiRm6ir-uL_AhXcV6QEHbK2CocQ0pQJegQIChAB');
}

function jouer_snakey(){
  window.open('Snakey/jeu.html');
}

//            OUVRIR ET FERMER VOIR PROJET

var verification = false;
function ouvrir_fermer_view_project() {
  if (verification === false) {
    var elem_view_project= document.getElementsByClassName('view_project');
    for(var i=0; i<elem_view_project.length; i++) { 
      elem_view_project[i].style.height = "530px";
    }

    var elem_view_project_arrow_1= document.getElementsByClassName('view_project_arrow_1');
    for(var i=0; i<elem_view_project_arrow_1.length; i++) { 
      elem_view_project_arrow_1[i].style.animation = "none";
      elem_view_project_arrow_1[i].style.transform = "translateX(0px)";
    }

    var elem_view_project_arrow_2= document.getElementsByClassName('view_project_arrow_2');
    for(var i=0; i<elem_view_project_arrow_2.length; i++) { 
      elem_view_project_arrow_2[i].style.animation = "none";
      elem_view_project_arrow_2[i].style.transform = "translateX(0px) rotate(-90deg)";
      elem_view_project_arrow_2[i].style.opacity = "0";
    }

    var elem_view_project_arrow_3= document.getElementsByClassName('view_project_arrow_3');
    for(var i=0; i<elem_view_project_arrow_3.length; i++) { 
      elem_view_project_arrow_3[i].style.animation = "none";
      elem_view_project_arrow_3[i].style.transform = "translateX(0px) rotate(90deg)";
      elem_view_project_arrow_3[i].style.opacity = "0";
    }

    var elem_view_project_arrow_4= document.getElementsByClassName('view_project_arrow_4');
    for(var i=0; i<elem_view_project_arrow_4.length; i++) { 
      elem_view_project_arrow_4[i].style.animation = "none";
      elem_view_project_arrow_4[i].style.transform = "translateX(0px)";
    }

    verification = true;
  } else {
    var elem_view_project= document.getElementsByClassName('view_project');
    for(var i=0; i<elem_view_project.length; i++) { 
      elem_view_project[i].style.height = "50px";
    }

    var elem_view_project_arrow_1= document.getElementsByClassName('view_project_arrow_1');
    for(var i=0; i<elem_view_project_arrow_1.length; i++) { 
      elem_view_project_arrow_1[i].style.animation = "arrow_flash 1s infinite";
      elem_view_project_arrow_1[i].style.transform = "translateX(-5px) rotate(-90deg)";
    }

    var elem_view_project_arrow_2= document.getElementsByClassName('view_project_arrow_2');
    for(var i=0; i<elem_view_project_arrow_2.length; i++) { 
      elem_view_project_arrow_2[i].style.animation = "arrow_flash 1s infinite";
      elem_view_project_arrow_2[i].style.transform = "translateX(5px) rotate(-90deg)";
      elem_view_project_arrow_2[i].style.animationDelay = "0.25s";
      elem_view_project_arrow_2[i].style.opacity = "1";
    }

    var elem_view_project_arrow_3= document.getElementsByClassName('view_project_arrow_3');
    for(var i=0; i<elem_view_project_arrow_3.length; i++) { 
      elem_view_project_arrow_3[i].style.animation = "arrow_flash 1s infinite";
      elem_view_project_arrow_3[i].style.transform = "translateX(-5px) rotate(90deg)";
      elem_view_project_arrow_3[i].style.animationDelay = "0.25s";
      elem_view_project_arrow_3[i].style.opacity = "1";
    }

    var elem_view_project_arrow_4= document.getElementsByClassName('view_project_arrow_4');
    for(var i=0; i<elem_view_project_arrow_4.length; i++) { 
      elem_view_project_arrow_4[i].style.animation = "arrow_flash 1s infinite";
      elem_view_project_arrow_4[i].style.transform = "translateX(5px) rotate(90deg)";
    }

    verification = false;
  }
}

//            OUVRIR ET FERMER FOND

function ouvrir_fond(){
  document.getElementById("projet_menu_fond").style.display = "block";
  setTimeout(() => {document.getElementById("projet_menu_fond").style.opacity = "0";
  document.getElementById("projet_menu_fond").style.opacity = "0.75";}, 10);
}

function fermer_fond(){
  setTimeout(() => {document.getElementById("projet_menu_fond").style.opacity = "0.5";
  document.getElementById("projet_menu_fond").style.opacity = "0";}, 10);
  setTimeout(() => {document.getElementById("projet_menu_fond").style.display = "block";
  document.getElementById("projet_menu_fond").style.display = "none";}, 300);

  verification = true;
  ouvrir_fermer_view_project() 
}

//            Menu De Vinyles

function ouvrir_menu_de_vinyles() {
  document.getElementById("menu_de_vinyles").style.transform = "translate(-21.5%, 50%)";
  document.getElementById("menu_de_vinyles").style.boxShadow = "10px 0px 25px -5px rgba(0, 0, 0, 0.5)";
  document.getElementById("body_scroll").style.overflow = "hidden";
  ouvrir_fond();
  
  setTimeout(() => {document.getElementById("scroll_down_1").style.opacity = "0";
  document.getElementById("scroll_down_1").style.opacity = "1";}, 500);
  setTimeout(() => {document.getElementById("scroll_down_1").style.opacity = "1";
  document.getElementById("scroll_down_1").style.opacity = "0";}, 4500);
}

function fermer_menu_de_vinyles() {
  document.getElementById("menu_de_vinyles").style.transform = "translate(-122.5%, 50%)";
  document.getElementById("menu_de_vinyles").style.boxShadow = "none";
  document.getElementById("body_scroll").style.overflow = "visible";
  fermer_fond();
  mettre_image_1_de_vinyles();
}

function mettre_image_1_de_vinyles() {
  document.getElementById("de_vinyles_main_image").style.backgroundImage = "url('Images/De_vinyles_1.png')";
  document.getElementById("image_1_de_vinyles").style.border = "3px #2AA4FE solid";
  document.getElementById("image_1_de_vinyles").style.borderRadius = "10px";
  document.getElementById("image_2_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_2_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_3_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_3_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_4_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_4_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_5_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_5_de_vinyles").style.borderRadius = "2px";
}

function mettre_image_2_de_vinyles() {
  document.getElementById("de_vinyles_main_image").style.backgroundImage = "url('Images/De_vinyles_2.png')";
  document.getElementById("image_2_de_vinyles").style.border = "3px #2AA4FE solid";
  document.getElementById("image_2_de_vinyles").style.borderRadius = "10px";
  document.getElementById("image_1_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_1_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_3_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_3_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_4_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_4_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_5_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_5_de_vinyles").style.borderRadius = "2px";
}

function mettre_image_3_de_vinyles() {
  document.getElementById("de_vinyles_main_image").style.backgroundImage = "url('Images/De_vinyles_3.png')";
  document.getElementById("image_3_de_vinyles").style.border = "3px #2AA4FE solid";
  document.getElementById("image_3_de_vinyles").style.borderRadius = "10px";
  document.getElementById("image_1_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_1_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_2_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_2_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_4_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_4_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_5_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_5_de_vinyles").style.borderRadius = "2px";
}

function mettre_image_4_de_vinyles() {
  document.getElementById("de_vinyles_main_image").style.backgroundImage = "url('Images/De_vinyles_4.png')";
  document.getElementById("image_4_de_vinyles").style.border = "3px #2AA4FE solid";
  document.getElementById("image_4_de_vinyles").style.borderRadius = "10px";
  document.getElementById("image_1_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_1_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_2_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_2_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_3_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_3_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_5_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_5_de_vinyles").style.borderRadius = "2px";
}

function mettre_image_5_de_vinyles() {
  document.getElementById("de_vinyles_main_image").style.backgroundImage = "url('Images/De_vinyles_5.png')";
  document.getElementById("image_5_de_vinyles").style.border = "3px #2AA4FE solid";
  document.getElementById("image_5_de_vinyles").style.borderRadius = "10px";
  document.getElementById("image_1_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_1_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_2_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_2_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_3_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_3_de_vinyles").style.borderRadius = "2px";
  document.getElementById("image_4_de_vinyles").style.border = "3px transparent solid";
  document.getElementById("image_4_de_vinyles").style.borderRadius = "2px";
}

//            Menu Snakey

function ouvrir_menu_snakey() {
  document.getElementById("menu_snakey").style.transform = "translate(-21.5%, 50%)";
  document.getElementById("menu_snakey").style.boxShadow = "10px 0px 25px -5px rgba(0, 0, 0, 0.5)";
  document.getElementById("body_scroll").style.overflow = "hidden";
  ouvrir_fond();
  
  setTimeout(() => {document.getElementById("scroll_down_2").style.opacity = "0";
  document.getElementById("scroll_down_2").style.opacity = "1";}, 500);
  setTimeout(() => {document.getElementById("scroll_down_2").style.opacity = "1";
  document.getElementById("scroll_down_2").style.opacity = "0";}, 4500);
}

function fermer_menu_snakey() {
  document.getElementById("menu_snakey").style.transform = "translate(-122.5%, 50%)";
  document.getElementById("menu_snakey").style.boxShadow = "none";
  document.getElementById("body_scroll").style.overflow = "visible";
  fermer_fond();
  mettre_image_1_snakey();
}

function ouvrir_projet_snakey() {
  window.open('https://carlos75clc.github.io/DIP392-BCH92/snake.html');
}

function mettre_image_1_snakey() {
  document.getElementById("snakey_main_image").style.backgroundImage = "url('Images/Snakey_1.png')";
  document.getElementById("image_1_snakey").style.border = "3px #2AA4FE solid";
  document.getElementById("image_1_snakey").style.borderRadius = "10px";
  document.getElementById("image_2_snakey").style.border = "3px transparent solid";
  document.getElementById("image_2_snakey").style.borderRadius = "2px";
  document.getElementById("image_3_snakey").style.border = "3px transparent solid";
  document.getElementById("image_3_snakey").style.borderRadius = "2px";
  document.getElementById("image_4_snakey").style.border = "3px transparent solid";
  document.getElementById("image_4_snakey").style.borderRadius = "2px";
  document.getElementById("image_5_snakey").style.border = "3px transparent solid";
  document.getElementById("image_5_snakey").style.borderRadius = "2px";
}

function mettre_image_2_snakey() {
  document.getElementById("snakey_main_image").style.backgroundImage = "url('Images/Snakey_2.png')";
  document.getElementById("image_2_snakey").style.border = "3px #2AA4FE solid";
  document.getElementById("image_2_snakey").style.borderRadius = "10px";
  document.getElementById("image_1_snakey").style.border = "3px transparent solid";
  document.getElementById("image_1_snakey").style.borderRadius = "2px";
  document.getElementById("image_3_snakey").style.border = "3px transparent solid";
  document.getElementById("image_3_snakey").style.borderRadius = "2px";
  document.getElementById("image_4_snakey").style.border = "3px transparent solid";
  document.getElementById("image_4_snakey").style.borderRadius = "2px";
  document.getElementById("image_5_snakey").style.border = "3px transparent solid";
  document.getElementById("image_5_snakey").style.borderRadius = "2px";
}

function mettre_image_3_snakey() {
  document.getElementById("snakey_main_image").style.backgroundImage = "url('Images/Snakey_3.png')";
  document.getElementById("image_3_snakey").style.border = "3px #2AA4FE solid";
  document.getElementById("image_3_snakey").style.borderRadius = "10px";
  document.getElementById("image_1_snakey").style.border = "3px transparent solid";
  document.getElementById("image_1_snakey").style.borderRadius = "2px";
  document.getElementById("image_2_snakey").style.border = "3px transparent solid";
  document.getElementById("image_2_snakey").style.borderRadius = "2px";
  document.getElementById("image_4_snakey").style.border = "3px transparent solid";
  document.getElementById("image_4_snakey").style.borderRadius = "2px";
  document.getElementById("image_5_snakey").style.border = "3px transparent solid";
  document.getElementById("image_5_snakey").style.borderRadius = "2px";
}

function mettre_image_4_snakey() {
  document.getElementById("snakey_main_image").style.backgroundImage = "url('Images/Snakey_4.png')";
  document.getElementById("image_4_snakey").style.border = "3px #2AA4FE solid";
  document.getElementById("image_4_snakey").style.borderRadius = "10px";
  document.getElementById("image_1_snakey").style.border = "3px transparent solid";
  document.getElementById("image_1_snakey").style.borderRadius = "2px";
  document.getElementById("image_2_snakey").style.border = "3px transparent solid";
  document.getElementById("image_2_snakey").style.borderRadius = "2px";
  document.getElementById("image_3_snakey").style.border = "3px transparent solid";
  document.getElementById("image_3_snakey").style.borderRadius = "2px";
  document.getElementById("image_5_snakey").style.border = "3px transparent solid";
  document.getElementById("image_5_snakey").style.borderRadius = "2px";
}

function mettre_image_5_snakey() {
  document.getElementById("snakey_main_image").style.backgroundImage = "url('Images/Snakey_5.png')";
  document.getElementById("image_5_snakey").style.border = "3px #2AA4FE solid";
  document.getElementById("image_5_snakey").style.borderRadius = "10px";
  document.getElementById("image_1_snakey").style.border = "3px transparent solid";
  document.getElementById("image_1_snakey").style.borderRadius = "2px";
  document.getElementById("image_2_snakey").style.border = "3px transparent solid";
  document.getElementById("image_2_snakey").style.borderRadius = "2px";
  document.getElementById("image_3_snakey").style.border = "3px transparent solid";
  document.getElementById("image_3_snakey").style.borderRadius = "2px";
  document.getElementById("image_4_snakey").style.border = "3px transparent solid";
  document.getElementById("image_4_snakey").style.borderRadius = "2px";
}

//            Menu Portfolio

function ouvrir_menu_portfolio() {
  document.getElementById("menu_portfolio").style.transform = "translate(-21.5%, 50%)";
  document.getElementById("menu_portfolio").style.boxShadow = "10px 0px 25px -5px rgba(0, 0, 0, 0.5)";
  document.getElementById("body_scroll").style.overflow = "hidden";
  ouvrir_fond();
  
  setTimeout(() => {document.getElementById("scroll_down_3").style.opacity = "0";
  document.getElementById("scroll_down_3").style.opacity = "1";}, 500);
  setTimeout(() => {document.getElementById("scroll_down_3").style.opacity = "1";
  document.getElementById("scroll_down_3").style.opacity = "0";}, 4500);
}

function fermer_menu_portfolio() {
  document.getElementById("menu_portfolio").style.transform = "translate(-122.5%, 50%)";
  document.getElementById("menu_portfolio").style.boxShadow = "none";
  document.getElementById("body_scroll").style.overflow = "visible";
  fermer_fond();
  mettre_image_1_portfolio();
}

function mettre_image_1_portfolio() {
  document.getElementById("portfolio_main_image").style.backgroundImage = "url('Images/Portfolio_1.png')";
  document.getElementById("image_1_portfolio").style.border = "3px #2AA4FE solid";
  document.getElementById("image_1_portfolio").style.borderRadius = "10px";
  document.getElementById("image_2_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_2_portfolio").style.borderRadius = "2px";
  document.getElementById("image_3_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_3_portfolio").style.borderRadius = "2px";
  document.getElementById("image_4_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_4_portfolio").style.borderRadius = "2px";
  document.getElementById("image_5_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_5_portfolio").style.borderRadius = "2px";
}

function mettre_image_2_portfolio() {
  document.getElementById("portfolio_main_image").style.backgroundImage = "url('Images/Portfolio_2.png')";
  document.getElementById("image_2_portfolio").style.border = "3px #2AA4FE solid";
  document.getElementById("image_2_portfolio").style.borderRadius = "10px";
  document.getElementById("image_1_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_1_portfolio").style.borderRadius = "2px";
  document.getElementById("image_3_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_3_portfolio").style.borderRadius = "2px";
  document.getElementById("image_4_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_4_portfolio").style.borderRadius = "2px";
  document.getElementById("image_5_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_5_portfolio").style.borderRadius = "2px";
}

function mettre_image_3_portfolio() {
  document.getElementById("portfolio_main_image").style.backgroundImage = "url('Images/Portfolio_3.png')";
  document.getElementById("image_3_portfolio").style.border = "3px #2AA4FE solid";
  document.getElementById("image_3_portfolio").style.borderRadius = "10px";
  document.getElementById("image_1_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_1_portfolio").style.borderRadius = "2px";
  document.getElementById("image_2_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_2_portfolio").style.borderRadius = "2px";
  document.getElementById("image_4_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_4_portfolio").style.borderRadius = "2px";
  document.getElementById("image_5_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_5_portfolio").style.borderRadius = "2px";
}

function mettre_image_4_portfolio() {
  document.getElementById("portfolio_main_image").style.backgroundImage = "url('Images/Portfolio_4.png')";
  document.getElementById("image_4_portfolio").style.border = "3px #2AA4FE solid";
  document.getElementById("image_4_portfolio").style.borderRadius = "10px";
  document.getElementById("image_1_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_1_portfolio").style.borderRadius = "2px";
  document.getElementById("image_2_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_2_portfolio").style.borderRadius = "2px";
  document.getElementById("image_3_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_3_portfolio").style.borderRadius = "2px";
  document.getElementById("image_5_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_5_portfolio").style.borderRadius = "2px";
}

function mettre_image_5_portfolio() {
  document.getElementById("portfolio_main_image").style.backgroundImage = "url('Images/Portfolio_5.png')";
  document.getElementById("image_5_portfolio").style.border = "3px #2AA4FE solid";
  document.getElementById("image_5_portfolio").style.borderRadius = "10px";
  document.getElementById("image_1_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_1_portfolio").style.borderRadius = "2px";
  document.getElementById("image_2_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_2_portfolio").style.borderRadius = "2px";
  document.getElementById("image_3_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_3_portfolio").style.borderRadius = "2px";
  document.getElementById("image_4_portfolio").style.border = "3px transparent solid";
  document.getElementById("image_4_portfolio").style.borderRadius = "2px";
}

//            Menu Plantaa

function ouvrir_menu_plantaa() {
  document.getElementById("menu_plantaa").style.transform = "translate(-21.5%, 50%)";
  document.getElementById("menu_plantaa").style.boxShadow = "10px 0px 25px -5px rgba(0, 0, 0, 0.5)";
  document.getElementById("body_scroll").style.overflow = "hidden";
  ouvrir_fond();
  
  setTimeout(() => {document.getElementById("scroll_down_4").style.opacity = "0";
  document.getElementById("scroll_down_4").style.opacity = "1";}, 500);
  setTimeout(() => {document.getElementById("scroll_down_4").style.opacity = "1";
  document.getElementById("scroll_down_4").style.opacity = "0";}, 4500);
}

function fermer_menu_plantaa() {
  document.getElementById("menu_plantaa").style.transform = "translate(-122.5%, 50%)";
  document.getElementById("menu_plantaa").style.boxShadow = "none";
  document.getElementById("body_scroll").style.overflow = "visible";
  fermer_fond();
  mettre_image_1_plantaa();
}

function mettre_image_1_plantaa() {
  document.getElementById("plantaa_main_image").style.backgroundImage = "url('Images/Plantaa_1.png')";
  document.getElementById("image_1_plantaa").style.border = "3px #2AA4FE solid";
  document.getElementById("image_1_plantaa").style.borderRadius = "10px";
  document.getElementById("image_2_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_2_plantaa").style.borderRadius = "2px";
  document.getElementById("image_3_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_3_plantaa").style.borderRadius = "2px";
  document.getElementById("image_4_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_4_plantaa").style.borderRadius = "2px";
  document.getElementById("image_5_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_5_plantaa").style.borderRadius = "2px";
}

function mettre_image_2_plantaa() {
  document.getElementById("plantaa_main_image").style.backgroundImage = "url('Images/Plantaa_2.png')";
  document.getElementById("image_2_plantaa").style.border = "3px #2AA4FE solid";
  document.getElementById("image_2_plantaa").style.borderRadius = "10px";
  document.getElementById("image_1_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_1_plantaa").style.borderRadius = "2px";
  document.getElementById("image_3_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_3_plantaa").style.borderRadius = "2px";
  document.getElementById("image_4_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_4_plantaa").style.borderRadius = "2px";
  document.getElementById("image_5_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_5_plantaa").style.borderRadius = "2px";
}

function mettre_image_3_plantaa() {
  document.getElementById("plantaa_main_image").style.backgroundImage = "url('Images/Plantaa_3.png')";
  document.getElementById("image_3_plantaa").style.border = "3px #2AA4FE solid";
  document.getElementById("image_3_plantaa").style.borderRadius = "10px";
  document.getElementById("image_1_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_1_plantaa").style.borderRadius = "2px";
  document.getElementById("image_2_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_2_plantaa").style.borderRadius = "2px";
  document.getElementById("image_4_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_4_plantaa").style.borderRadius = "2px";
  document.getElementById("image_5_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_5_plantaa").style.borderRadius = "2px";
}

function mettre_image_4_plantaa() {
  document.getElementById("plantaa_main_image").style.backgroundImage = "url('Images/Plantaa_4.png')";
  document.getElementById("image_4_plantaa").style.border = "3px #2AA4FE solid";
  document.getElementById("image_4_plantaa").style.borderRadius = "10px";
  document.getElementById("image_1_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_1_plantaa").style.borderRadius = "2px";
  document.getElementById("image_2_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_2_plantaa").style.borderRadius = "2px";
  document.getElementById("image_3_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_3_plantaa").style.borderRadius = "2px";
  document.getElementById("image_5_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_5_plantaa").style.borderRadius = "2px";
}

function mettre_image_5_plantaa() {
  document.getElementById("plantaa_main_image").style.backgroundImage = "url('Images/Plantaa_5.png')";
  document.getElementById("image_5_plantaa").style.border = "3px #2AA4FE solid";
  document.getElementById("image_5_plantaa").style.borderRadius = "10px";
  document.getElementById("image_1_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_1_plantaa").style.borderRadius = "2px";
  document.getElementById("image_2_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_2_plantaa").style.borderRadius = "2px";
  document.getElementById("image_3_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_3_plantaa").style.borderRadius = "2px";
  document.getElementById("image_4_plantaa").style.border = "3px transparent solid";
  document.getElementById("image_4_plantaa").style.borderRadius = "2px";
}