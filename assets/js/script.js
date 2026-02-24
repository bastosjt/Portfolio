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

  const preloadedProjects = new Set();
  const PRELOAD_DELAY = 180;

  function preloadProjectAssets(projet) {
    const icon = Array.isArray(projet.icone) ? projet.icone[0] : projet.icone;
    const urls = [
      `assets/icons/${icon}`,
      ...projet.images.map(img => `assets/images/${img}`)
    ];

    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

  const projets = document.querySelectorAll('.projet');
  projets.forEach(projetEl => {
    let preloadTimeout = null;

    projetEl.addEventListener('mouseenter', () => {
      const projetId = projetEl.getAttribute('data-id');
      const projet = data.find(p => p.id === projetId);
      if (!projet) return;

      if (preloadedProjects.has(projetId)) return;
      preloadTimeout = setTimeout(() => {
        preloadTimeout = null;
        preloadedProjects.add(projetId);
        preloadProjectAssets(projet);
      }, PRELOAD_DELAY);
    });

    projetEl.addEventListener('mouseleave', () => {
      if (preloadTimeout) {
        clearTimeout(preloadTimeout);
        preloadTimeout = null;
      }
    });

    projetEl.addEventListener('click', () => {
      const projetId = projetEl.getAttribute('data-id');
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

  // Utiliser description_det[0] comme description principale dans le popup (identique à la section featured)
  // On affiche les 3 derniers points de description_det dans le popup (en excluant [0])
  const primaryDescription = (projet.description_det && projet.description_det[0]) || projet.description || '';
  let detailPoints = [];
  if (projet.description_det && projet.description_det.length > 1) {
    // Prendre les 3 derniers éléments (en excluant [0] qui est utilisé comme description principale)
    const remainingPoints = projet.description_det.slice(1);
    detailPoints = remainingPoints.slice(-3); // Les 3 derniers
  }

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <div class="close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </div>
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
          <div class="popup-desc-highlight liquid_glass">
            <h3>${projet.title}</h3>
            <p>${primaryDescription}</p>
          </div>
          ${detailPoints.length ? `
          <ul class="popup-desc-list">
            ${detailPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
          ` : ''}
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
  
  /* Double rAF pour laisser le layout se calculer (évite glitch Safari/Arc sur l’affichage des infos) */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      popupBackground.classList.add('show');
      popup.classList.add('show');
    });
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

// Charger les 2 derniers projets pour la section featured
fetch('assets/data/projets.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('featured_projects_container');
  
  if (!container) {
    console.error('Conteneur featured_projects_container introuvable');
    return;
  }

  // Trier les projets par date (du plus récent au plus ancien)
  // Convertir les dates en format comparable
  const sortedProjects = [...data].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA; // Plus récent en premier
  });

  // Prendre les 2 premiers projets (les plus récents)
  const featuredProjects = sortedProjects.slice(0, 2);

  if (featuredProjects.length === 0) {
    container.innerHTML = '<p>Aucun projet à afficher</p>';
    return;
  }

  container.innerHTML = featuredProjects.map((projet, index) => {
    // index 0 = dernier projet (pas inversé), index 1 = avant-dernier projet (inversé)
    // L'ordre sera inversé visuellement avec column-reverse en CSS
    const isReverse = index === 1;
    const couverture = Array.isArray(projet.couverture) ? projet.couverture[0] : projet.couverture;
    const icone = Array.isArray(projet.icone) ? projet.icone[0] : projet.icone;
    
    // Utiliser description_det[0] comme description principale, sinon description
    const mainDescription = (projet.description_det && projet.description_det[0]) || projet.description || '';
    
    return `
      <div class="featured_project ${isReverse ? 'featured_project_reverse' : ''}" data-id="${projet.id}">
        <div class="featured_project_image" style="background-image: url('assets/images/${couverture}');"></div>
        <div class="featured_project_info">
          <div class="featured_project_info_header">
            <h2 class="featured_project_title">${projet.title}</h2>
            <div class="featured_project_badges">
              ${projet.titre_description.map((titre_desc, idx) => `
                <span class="featured_project_badge" style="--accent-color: ${projet.titre_description_color[idx]}">${titre_desc}</span>
              `).join('')}
            </div>
          </div>
          <div class="featured_project_separator" style="margin: 25px 0"></div>
          <p class="featured_project_description">${mainDescription}</p>
        </div>
      </div>
    `;
  }).join('');

  // Ajouter les événements de clic - UN SEUL event listener par projet pour éviter le double clic
  container.querySelectorAll('.featured_project').forEach((projectEl, index) => {
    const projetId = featuredProjects[index].id;
    const projet = data.find(p => p.id === projetId);
    
    if (!projet) return;
    
    // Event listener sur le projet entier
    projectEl.addEventListener('click', (e) => {
      // Ne pas ouvrir la popup si on clique sur un lien externe
      if (e.target.tagName === 'A' && e.target.href && !e.target.href.includes('#')) {
        return; // Laisser le lien s'ouvrir normalement
      }
      
      // Si c'est le bouton "En savoir plus", ouvrir la popup
      const button = e.target.closest('button');
      if (button) {
        e.preventDefault();
        e.stopPropagation();
        showPopup(projet);
        return;
      }
      
      // Pour les autres clics sur le projet (image, info, etc.), ouvrir la popup
      showPopup(projet);
    });
  });
})
.catch(error => {
  console.error('Erreur lors du chargement des projets featured :', error);
  const container = document.getElementById('featured_projects_container');
  if (container) {
    container.innerHTML = '<p>Impossible de charger les projets</p>';
  }
});

// Fonction pour parser les dates et les convertir en objets Date comparables
function parseDate(dateString) {
  if (!dateString) return new Date(0);
  
  // Gérer les formats de date variés
  // Format "26 sept. 2025"
  const months = {
    'janvier': 0, 'janv.': 0, 'jan': 0,
    'février': 1, 'févr.': 1, 'fév': 1,
    'mars': 2, 'mar': 2,
    'avril': 3, 'avr': 3,
    'mai': 4,
    'juin': 5,
    'juillet': 6, 'juil': 6,
    'août': 7, 'aout': 7,
    'septembre': 8, 'sept.': 8, 'sep': 8,
    'octobre': 9, 'oct': 9,
    'novembre': 10, 'nov': 10,
    'décembre': 11, 'déc': 11, 'dec': 11
  };

  // Format "26 sept. 2025"
  const match1 = dateString.match(/(\d+)\s+([a-zéèêàùûôîïç]+)\.?\s+(\d{4})/i);
  if (match1) {
    const day = parseInt(match1[1]);
    const monthName = match1[2].toLowerCase();
    const year = parseInt(match1[3]);
    const month = months[monthName];
    if (month !== undefined) {
      return new Date(year, month, day);
    }
  }

  // Format "2024 – 2025" (plage de dates)
  const match2 = dateString.match(/(\d{4})\s*[–-]\s*(\d{4})/);
  if (match2) {
    const year = parseInt(match2[2]); // Prendre la dernière année
    return new Date(year, 11, 31); // Fin de l'année
  }

  // Format simple "2025"
  const match3 = dateString.match(/(\d{4})/);
  if (match3) {
    return new Date(parseInt(match3[1]), 11, 31);
  }

  // Par défaut, retourner une date très ancienne
  return new Date(0);
}
