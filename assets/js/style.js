window.addEventListener('load', () => {

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1);

  const header = document.getElementById('header');
  const titre_principal_h1 = document.getElementById('me_h1');
  const titre_principal_h3 = document.getElementById('me_h3');
  const div_infos = document.getElementById('infos');

  const galerie_background_div = document.getElementById('galerie_backgrounds');

  const galerie_background_1 = document.getElementById('galerie_background_1');
  const galerie_background_2 = document.getElementById('galerie_background_2');
  const galerie_background_3 = document.getElementById('galerie_background_3');
  const galerie_background_4 = document.getElementById('galerie_background_4');
  const galerie_background_5 = document.getElementById('galerie_background_5');
  const galerie_background_6 = document.getElementById('galerie_background_6');
  const galerie_background_7 = document.getElementById('galerie_background_7');

  titre_principal_h1.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), color 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  titre_principal_h1.style.opacity = '1';

  titre_principal_h3.style.transition = 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)';

  div_infos.style.transition = 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)';

  galerie_background_1.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  galerie_background_2.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  galerie_background_3.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  galerie_background_4.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  galerie_background_5.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  galerie_background_6.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  galerie_background_7.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

  galerie_background_div.style.opacity = '0.6';
  galerie_background_div.style.filter = 'saturate(120%)';

  setTimeout(() => {
    titre_principal_h1.style.transform = 'translateY(0) scale(1)';
    header.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    header.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    titre_principal_h1.style.color = '#ffffff';
  }, 900);

  setTimeout(() => {
    titre_principal_h3.style.transform = 'translateY(0)';
  }, 1200);

  setTimeout(() => {
    div_infos.style.transform = 'scale(1)';
  }, 1500);

  setTimeout(() => {
    galerie_background_7.style.opacity = '1';
  }, 1650);

  setTimeout(() => {
    galerie_background_6.style.opacity = '1';
  }, 1770);

  setTimeout(() => {
    galerie_background_5.style.opacity = '1';
  }, 1890);

  setTimeout(() => {
    galerie_background_4.style.opacity = '1';
  }, 2010);

  setTimeout(() => {
    galerie_background_3.style.opacity = '1';
  }, 2130);

  setTimeout(() => {
    galerie_background_2.style.opacity = '1';
  }, 2250);

  setTimeout(() => {
    galerie_background_1.style.opacity = '1';
  }, 2370);

});

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const maxScroll = window.innerHeight * 0.7;
  const limitedScroll = Math.min(scrollValue, maxScroll);

  document.getElementById('galerie_background_1').style.transform = `translateY(${limitedScroll * -0.5}px)`;
  document.getElementById('galerie_background_2').style.transform = `translateY(${limitedScroll * -0.4}px)`;
  document.getElementById('galerie_background_3').style.transform = `translateY(${limitedScroll * -0.3}px)`;
  document.getElementById('galerie_background_4').style.transform = `translateY(${limitedScroll * -0.2}px)`;
  document.getElementById('galerie_background_5').style.transform = `translateY(${limitedScroll * -0.1}px) scale(1.02)`;
  document.getElementById('galerie_background_6').style.transform = `translateY(${limitedScroll * -0.05}px) scale(1.03)`;
  document.getElementById('galerie_background_7').style.transform = `scale(1.04)`;
});

function ouvrir_linkedin(){
  window.open('https://www.linkedin.com/in/bastien-jamet/');
}

function ouvrir_github(){
  window.open('https://github.com/bastosjt');
}

function ouvrir_localisation(){
  window.open('https://www.google.com/maps/place/92500+Rueil-Malmaison/@48.8719115,2.1394266,13z/data=!3m1!4b1!4m6!3m5!1s0x47e6635a53a7872b:0x1c0b82c6e1d88110!8m2!3d48.8695678!4d2.1771764!16s%2Fm%2F09sqhf0?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D');
}

function copier_telephone() {
  navigator.clipboard.writeText("0643309452");
  element_copied();
}

function copier_mail() {
  navigator.clipboard.writeText("bastien.jamet92@gmail.com");
  element_copied();
  window.open('mailto:bastien.jamet92@gmail.com');
}

function element_copied(){

  const element_copied_div = document.getElementById('copied');
  element_copied_div.style.opacity = '1';

  setTimeout(() => {
    element_copied_div.style.opacity = '0';
  }, 1500);
}