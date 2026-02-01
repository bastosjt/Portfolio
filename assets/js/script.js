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
        <div class="projet_media">
          <div class="projet_img-wrap">
            <div class="projet_img" style="background-image: url('assets/images/${projet.couverture}');" id="${projet.id}"></div>
          </div>
          <div class="projet_view">
            <img src="assets/icons/arrow.svg" alt="Voir le projet">
          </div>
        </div>
        <div class="projet_separator"></div>
        <h1 class="projet_title">${projet.title}</h1>
      </div>
      <div class="projet_desc">
        ${projet.titre_description.map((titre_desc, index) => `
          <span class="projet_desc-badge" style="--accent-color: ${projet.titre_description_color[index]}">${titre_desc}</span>
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
      <div class="popup-details">
        <div class="popup-detail-img">
          <div class="popup-main-image-wrap">
            <img class="popup-main-image" src="assets/images/${projet.images[0]}">
            <div class="popup-main-image-fullscreen-icon" aria-label="Ouvrir en plein écran" title="Ouvrir en plein écran">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </div>
          </div>
          <div class="popup-mini-images">
            ${projet.images.map(img => `<img src="assets/images/${img}">`).join('')}
          </div>
        </div>
        <div class="popup-detail-desc">
          <h2>Description du projet :</h2>
          <div class="popup-desc-p">
            ${projet.description_det.map(desc => `<p>${desc}</p>`).join('')}
          </div>
          <h2 style="margin-bottom: 25px;">Contexte et technologies :</h2>
          <div class="popup-tags">
            ${projet.tags.map((tag, i) => `<p id="${projet.tags_context[i]}">${tag}</p>`).join('')}
          </div>
          ${(projet.Link?.[0] || projet.Code?.[0]) ? `
          <h2 style="margin: 50px 0 25px 0;">Liens externes :</h2>
          <div class="popup-links">
            ${projet.Link?.[0] ? `<a href="${projet.Link[0]}" target="_blank" rel="noopener noreferrer" class="popup-link-btn view-projet">Voir le projet</a>` : ''}
            ${projet.Code?.[0] ? `<a href="${projet.Code[0]}" target="_blank" rel="noopener noreferrer" class="popup-link-btn view-code">Voir le code</a>` : ''}
          </div>
          ` : ''}
        </div>
        
      </div>
    </div>
  `;

  document.body.appendChild(popupBackground);
  document.body.appendChild(popup);
  document.body.classList.add('no-scroll');

  const mainImage = popup.querySelector('.popup-main-image');

  function openFullscreen() {
    const currentSrc = mainImage.src;
    const miniImagesHtml = projet.images.map((img) => {
      const isActive = currentSrc.includes(img);
      return `<img src="assets/images/${img}" ${isActive ? 'class="active"' : ''}>`;
    }).join('');

    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.className = 'popup-fullscreen';
    fullscreenOverlay.innerHTML = `
      <div class="close-btn popup-fullscreen-close">Fermer</div>
      <img class="popup-fullscreen-main" src="${mainImage.src}" alt="Image plein écran">
      <div class="popup-fullscreen-mini">${miniImagesHtml}</div>
    `;
    document.body.appendChild(fullscreenOverlay);

    const fullscreenMainImg = fullscreenOverlay.querySelector('.popup-fullscreen-main');
    const fullscreenMiniContainer = fullscreenOverlay.querySelector('.popup-fullscreen-mini');

    fullscreenMiniContainer.querySelectorAll('img').forEach((miniImg) => {
      miniImg.addEventListener('click', (e) => {
        e.stopPropagation();
        fullscreenMainImg.src = miniImg.src;
        fullscreenMiniContainer.querySelectorAll('img').forEach((m) => m.classList.remove('active'));
        miniImg.classList.add('active');
      });
      miniImg.addEventListener('mouseenter', () => {
        fullscreenMainImg.src = miniImg.src;
        fullscreenMiniContainer.querySelectorAll('img').forEach((m) => m.classList.remove('active'));
        miniImg.classList.add('active');
      });
    });

    const closeBtn = fullscreenOverlay.querySelector('.popup-fullscreen-close');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeFullscreen();
    });

    requestAnimationFrame(() => fullscreenOverlay.classList.add('show'));

    function closeFullscreen() {
      fullscreenOverlay.classList.remove('show');
      setTimeout(() => fullscreenOverlay.remove(), 250);
      document.removeEventListener('keydown', onEscape);
      fullscreenOverlay.removeEventListener('click', onOverlayClick);
    }

    function onEscape(e) {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    }

    function onOverlayClick(e) {
      if (e.target === fullscreenOverlay || e.target.classList.contains('popup-fullscreen-main')) {
        closeFullscreen();
      }
    }

    fullscreenOverlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscape);
  }

  const fullscreenIcon = popup.querySelector('.popup-main-image-fullscreen-icon');

  mainImage.addEventListener('click', openFullscreen);
  fullscreenIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    openFullscreen();
  });

  document.querySelectorAll('.popup-mini-images img').forEach((img, index) => {
    if (index === 0) img.classList.add('active');

    img.addEventListener('click', (e) => {
      const mainImage = document.querySelector('.popup-main-image');
      mainImage.src = e.target.src;

      document.querySelectorAll('.popup-mini-images img').forEach((m) => m.classList.remove('active'));
      e.target.classList.add('active');
    });

    img.addEventListener('mouseenter', () => {
      const mainImage = document.querySelector('.popup-main-image');
      if (mainImage && img.src) {
        mainImage.src = img.src;
        document.querySelectorAll('.popup-mini-images img').forEach((m) => m.classList.remove('active'));
        img.classList.add('active');
      }
    });
  });  
  
  requestAnimationFrame(() => {
    popupBackground.classList.add('show');
    popup.classList.add('show');
  });

  function closePopup() {
    document.querySelector('.popup-fullscreen')?.remove();
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
    if (e.key === 'Escape' && !document.querySelector('.popup-fullscreen')) {
        closePopup();
    }
  });
}