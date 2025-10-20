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

  titre_principal_h1.style.transition = 'transform 0.75s ease, opacity 1.5s ease, color 0.75s ease';
  titre_principal_h1.style.opacity = '1';

  titre_principal_h3.style.transition = 'transform 0.75s ease';

  div_infos.style.transition = 'transform 0.75s ease';

  galerie_background_1.style.transition = 'opacity 0.5s ease-in';
  galerie_background_2.style.transition = 'opacity 0.5s ease-in';
  galerie_background_3.style.transition = 'opacity 0.5s ease-in';
  galerie_background_4.style.transition = 'opacity 0.5s ease-in';
  galerie_background_5.style.transition = 'opacity 0.5s ease-in';
  galerie_background_6.style.transition = 'opacity 0.5s ease-in';
  galerie_background_7.style.transition = 'opacity 0.5s ease-in';

  galerie_background_div.style.opacity = '0.6';
  galerie_background_div.style.filter = 'saturate(160%)';

  setTimeout(() => {
    titre_principal_h1.style.transform = 'translateY(0) scale(1)';
    header.style.transition = 'opacity 1s ease';
    header.style.opacity = '1';
  }, 700);

  setTimeout(() => {
    titre_principal_h1.style.color = '#ffffff';
  }, 1000);

  setTimeout(() => {
    titre_principal_h3.style.transform = 'translateY(0)';
  }, 1500);

  setTimeout(() => {
    div_infos.style.transform = 'scale(01)';
  }, 1700);

  setTimeout(() => {
    galerie_background_7.style.opacity = '1';
  }, 1800);

  setTimeout(() => {
    galerie_background_6.style.opacity = '1';
  }, 1900);

  setTimeout(() => {
    galerie_background_5.style.opacity = '1';
  }, 2000);

  setTimeout(() => {
    galerie_background_4.style.opacity = '1';
  }, 2100);

  setTimeout(() => {
    galerie_background_3.style.opacity = '1';
  }, 2200);

  setTimeout(() => {
    galerie_background_2.style.opacity = '1';
  }, 2300);

  setTimeout(() => {
    galerie_background_1.style.opacity = '1';
  }, 2400);

});

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const maxScroll = window.innerHeight * 0.7;
  const limitedScroll = Math.min(scrollValue, maxScroll);

  document.getElementById('galerie_background_1').style.transform = `translateY(${limitedScroll * -0.5}px)`;
  document.getElementById('galerie_background_2').style.transform = `translateY(${limitedScroll * -0.4}px)`;
  document.getElementById('galerie_background_3').style.transform = `translateY(${limitedScroll * -0.3}px)`;
  document.getElementById('galerie_background_4').style.transform = `translateY(${limitedScroll * -0.2}px)`;
  document.getElementById('galerie_background_5').style.transform = `translateY(${limitedScroll * -0.1}px)`;
  document.getElementById('galerie_background_6').style.transform = `translateY(${limitedScroll * -0.05}px)`;
});


setTimeout(() => {
  const projetBoxes = document.querySelectorAll('.projet_box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(projetBoxes).indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 40 * (index + 1));

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  projetBoxes.forEach(box => observer.observe(box));
}, 50);
