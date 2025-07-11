fetch('data/projets.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projet_container');

  if (!container) {
    console.error('Conteneur introuvable');
    return;
  }

  container.innerHTML = data.map(projet => `
    <div class="projet_box">
      <div class="projet" data-id="${projet.id}">
        <div class="projet_titre_contexte" style="background-color:${projet.titre_contexte_color};">
          <h4>${projet.titre_contexte}</h4>
        </div>
        <div class="projet_img" style="background-image: url('${projet.couverture}');" id="${projet.id}"></div>
        <h1>${projet.title}</h1>
        <div id="ligne"></div>
        <p>${projet.description}</p>
        <div class="projet_view">
          <p>cliquer pour visualiser</p>
        </div>
      </div>
      <div class="projet_desc">
        ${projet.languages.map((lang, index) => `
          <div class="lang_box_circle" id="${lang}_box_circle" style="border: 3px solid ${projet.languages_pourcentage_couleur[index]};border-radius:5px;"></div>
          <p>${lang}</p>
        `).join('')}
      </div>
    </div>
  `).join('');

  const projets = document.querySelectorAll('.projet');
  projets.forEach(projet => {
    projet.addEventListener('click', () => {
      const projetId = projet.getAttribute('data-id');
      const selectedProjet = data.find(p => p.id === projetId);
      showPopup(selectedProjet);
    });
  });
})

.catch(error => {
  console.error('Erreur :', error);
  const container = document.getElementById('projet_container');
  if (container) {
    container.innerHTML = `<p>Impossible de charger les projets</p>`;
  }
});

function showPopup(projet) {
  const popupBackground = document.createElement('div');
  popupBackground.classList.add('popup-background');
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = scrollbarWidth + 'px';
  }

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-btn">&times;</span>
      <div class="popup-header">
        <img class="popup-content-icone" src="${projet.icone}">
        <div class="popup-header-title">
          <h1>${projet.title}</h1>
          <div class="popup-header-ligne"></div>
          <p>${projet.description}</p>
        </div>
      </div>
      <div class="popup-detail">
        <div class="popup-tags">
        ${projet.tags.map((tag, i) => `<p id="${projet.tags_context[i]}">${tag}</p>`).join('')}
        </div>
        <div class="popup-detail-p">
          <p style="background-color: ${projet.titre_contexte_color};">Projet terminé le ${projet.date}</p>
        </div>
        <div class="popup-detail-inner">
          <div class="popup-detail-img">
            <img class="popup-main-image" src="${projet.images[0]}">
            <div class="popup-mini-images">
              ${projet.images.map(img => `<img src="${img}">`).join('')}
            </div>
          </div>
          <div class="popup-detail-desc">
            ${projet.description_det.map(desc => `<p>${desc}</p>`).join('')}
          </div>
        </div>
        <div class="popup-detail-lang">
          ${projet.languages.map((lang, index) => `
            <div class="language_projet">
              <p>${lang}</p>
              <div class="language_pourcentage">
                <p>${projet.languages_pourcentage[index]}%</p>
                <div class="language_barre">
                  <div class="language_barre_det" style="width: ${projet.languages_pourcentage[index]}%; background-color: ${projet.languages_pourcentage_couleur[index]}"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="buttons-footer">
          <button 
            class="view-projet" 
            onclick="window.open('${projet.Link[0]}', '_blank')" 
            style="display: ${projet.Link[0] ? 'block' : 'none'}">
            Visualiser le projet
          </button>
          <button 
            class="view-code" 
            onclick="window.open('${projet.Code[0]}', '_blank')" 
            style="display: ${projet.Code[0] ? 'block' : 'none'}">
            Visualiser le code
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popupBackground);
  document.body.appendChild(popup);
  document.body.classList.add('no-scroll');

  document.querySelectorAll('.popup-mini-images img').forEach((img) => {
    // Clic : met à jour l'image principale et la passe en plein écran
    img.addEventListener('click', (e) => {
      const mainImage = document.querySelector('.popup-main-image');
      mainImage.src = e.target.src;

      document.querySelectorAll('.popup-mini-images img').forEach((img) => {
        img.style.border = '3px solid #3C3C3C';
        img.style.borderRadius = '5px';
      });

      e.target.style.border = '3px solid #2AA4FE';
      e.target.style.borderRadius = '10px';

      // Lancer le plein écran après mise à jour de l'image principale
      if (mainImage.requestFullscreen) {
        mainImage.requestFullscreen();
      } else if (mainImage.mozRequestFullScreen) {
        mainImage.mozRequestFullScreen();
      } else if (mainImage.webkitRequestFullscreen) {
        mainImage.webkitRequestFullscreen();
      } else if (mainImage.msRequestFullscreen) {
        mainImage.msRequestFullscreen();
      }
    });

    // Hover (desktop) : met à jour l'image principale sans fullscreen
    if (!('ontouchstart' in window)) {
      img.addEventListener('mouseenter', (e) => {
        const mainImage = document.querySelector('.popup-main-image');
        mainImage.src = e.target.src;

        document.querySelectorAll('.popup-mini-images img').forEach((img) => {
          img.style.border = '3px solid #3C3C3C';
          img.style.borderRadius = '5px';
        });

        e.target.style.border = '3px solid #2AA4FE';
        e.target.style.borderRadius = '10px';
      });
    }
  });

  document.querySelector('.popup-main-image').addEventListener('click', (e) => {
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    } else if (e.target.mozRequestFullScreen) { // Firefox
      e.target.mozRequestFullScreen();
    } else if (e.target.webkitRequestFullscreen) { // Chrome, Safari, Opera
      e.target.webkitRequestFullscreen();
    } else if (e.target.msRequestFullscreen) { // IE/Edge
      e.target.msRequestFullscreen();
    }
  });
  
  
  requestAnimationFrame(() => {
    popupBackground.classList.add('show');
    popup.classList.add('show');
  });

  function closePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.remove();
      document.body.classList.remove('no-scroll');
      document.body.style.paddingRight = '';
    }, 200);
    popupBackground.remove();
  }

  const closeButton = popup.querySelector('.close-btn');
  closeButton.addEventListener('click', closePopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
  });
}

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
}

function copier_mail() {
  navigator.clipboard.writeText("bastien.jamet92@gmail.com");
}

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const header_group_img = document.getElementById('header_group_img');
  const header_group_h1 = document.getElementById('header_group_h1');
  const header_a1 = document.getElementById('header_a1');
  const header_a2 = document.getElementById('header_a2');
  const header_a3 = document.getElementById('header_a3');
  const hover_square = document.getElementById('hover_square');

  if (window.scrollY > 175) {
      header.classList.add('shrink');
      header_group_img.classList.add('shrink');
      header_group_h1.classList.add('shrink');
      header_a1.classList.add('shrink');
      header_a2.classList.add('shrink');
      header_a3.classList.add('shrink');
      hover_square.classList.add('shrink');
  } else {
      header.classList.remove('shrink');
      header_group_img.classList.remove('shrink');
      header_group_h1.classList.remove('shrink');
      header_a1.classList.remove('shrink');
      header_a2.classList.remove('shrink');
      header_a3.classList.remove('shrink');
      hover_square.classList.remove('shrink');
  }
});