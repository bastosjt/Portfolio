fetch('projets.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projet_container');

  if (!container) {
    console.error('Conteneur introuvable');
    return;
  }

  container.innerHTML = data.map(projet => `
    <div class="projet" data-id="${projet.id}">
      <img src="${projet.couverture}" alt="${projet.title}">
      <h1>${projet.title}</h1>
      <div id="ligne"></div>
      <p>${projet.description}</p>
      <ul>
          <div class="lang_box" id="${projet.type}"></div>
          <li>${projet.type}</li>
      </ul>
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
        ${projet.tags.map(tag => `<p id="${tag}">${tag}</p>`).join('')}
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
    img.addEventListener('click', (e) => {

      const mainImage = document.querySelector('.popup-main-image');
      mainImage.src = e.target.src;

      document.querySelectorAll('.popup-mini-images img').forEach((img) => {
        img.style.border = '3px solid #3C3C3C';
        img.style.borderRadius = '5px';
      });
      
      e.target.style.border = '3px solid #2AA4FE';
      e.target.style.borderRadius = '10px';
    });
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
