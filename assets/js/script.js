fetch('assets/data/projets.json')
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
        <div class="projet_img" style="background-image: url('assets/images/${projet.couverture}');" id="${projet.id}"></div>
        <h1>${projet.title}</h1>
        <div class="projet_view">
          <p>voir le projet</p>
        </div>
      </div>
      <div class="projet_desc">
        ${projet.titre_description.map((titre_desc, index) => `
          <div class="lang_box_circle" id="${titre_desc}_box_circle" style="border: 3px solid ${projet.titre_description_color[index]};border-radius:5px;"></div>
          <p>${titre_desc}</p>
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
  const body_scroll = document.getElementById('body_scroll')

  body_scroll.style.overflowY = 'hidden';

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = scrollbarWidth + 'px';
  }

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <div class="close-btn">&times;</div>
      <div class="popup-header">
        <img class="popup-content-icone" src="assets/icons/${projet.icone}">
        <div class="popup-header-title">
          <h1>${projet.title}</h1>
          <div class="popup-header-ligne"></div>
          <p>${projet.description}</p>
        </div>
      </div>
      <div class="popup-detail-wrapper">
        <div class="popup-detail">
          <div class="popup-tags">
          ${projet.tags.map((tag, i) => `<p id="${projet.tags_context[i]}">${tag}</p>`).join('')}
          </div>
          <div class="popup-detail-inner">
            <div class="popup-detail-img">
              <img class="popup-main-image" src="assets/images/${projet.images[0]}">
              <div class="popup-mini-images">
                ${projet.images.map(img => `<img src="assets/images/${img}">`).join('')}
              </div>
            </div>
            <div class="popup-detail-desc">
              ${projet.description_det.map(desc => `<p>${desc}</p>`).join('')}
            </div>
          </div>
          <div class="popup-detail-lang">
            <div class="popup-lang-box">
              ${projet.languages.map((lang, index) => `
                <div class="language_projet">
                  <p>${lang}</p>
                </div>
                ${index < projet.languages.length - 1 ? '<div class="lang_trait"></div>' : ''}
              `).join('')}
            </div>
          </div>
          <div class="buttons-footer">
            <div class="buttons-footer-box">   
              <button 
                class="view-projet" 
                onclick="window.open('${projet.Link[0]}', '_blank')" 
                style="display: ${projet.Link[0] ? 'block' : 'none'}">
                Voir le projet
              </button>
              <button 
                class="view-code" 
                onclick="window.open('${projet.Code[0]}', '_blank')" 
                style="display: ${projet.Code[0] ? 'block' : 'none'}">
                Voir le code
              </button>
            </div>
          </div>
          <div class="popup-detail-p">
            <p>Projet terminé le ${projet.date}</p>
          </div>
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
      body_scroll.style.overflowY = 'scroll';
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