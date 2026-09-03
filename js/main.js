const slides = document.querySelectorAll('.slider');
const cardElements = document.querySelectorAll('.crd');
const connectBtn = document.getElementById('connect');
let count = 0;

function moveSlider() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}

if (slides.length > 0) {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  if (slides.length > 1) {
    setInterval(() => {
      count = (count + 1) % slides.length;
      moveSlider();
    }, 2000);
  }
}

function closeCardDetail() {
  const overlay = document.querySelector('.cardDetailOverlay');
  if (overlay) {
    overlay.remove();
  }
}

if (cardElements.length > 0) {
  cardElements.forEach((card) => {
    card.addEventListener('click', () => {
      const image = card.querySelector('img');
      if (!image) {
        return;
      }

      closeCardDetail();

      const detailPage = document.createElement('div');
      detailPage.className = 'cardDetailOverlay';

      const detailCard = document.createElement('div');
      detailCard.className = 'cardDetail';
      detailCard.setAttribute('role', 'dialog');
      detailCard.setAttribute('aria-modal', 'true');
      detailCard.setAttribute('aria-label', 'Challenge details');

      const title = document.createElement('h1');
      title.textContent = 'Challenge Details';

      const duration = document.createElement('p');
      duration.textContent = 'Duration: 12 Weeks';

      const detailImage = document.createElement('img');
      detailImage.src = image.src;
      detailImage.alt = 'Challenge image';

      const aboutTitle = document.createElement('h3');
      aboutTitle.textContent = 'About This Challenge';

      const aboutText = document.createElement('p');
      aboutText.className = 'dumiText';
      aboutText.textContent = 'Build consistency with simple daily workouts and nutrition-focused habits for sustainable fitness progress.';

      const actionWrapper = document.createElement('div');
      actionWrapper.className = 'cardDetailActions';

      const joinButton = document.createElement('button');
      joinButton.type = 'button';
      joinButton.className = 'joinBtn';
      joinButton.textContent = 'Join Now';

      const backButton = document.createElement('button');
      backButton.type = 'button';
      backButton.className = 'backBtn';
      backButton.textContent = 'Back';

      actionWrapper.append(joinButton, backButton);
      detailCard.append(title, duration, detailImage, aboutTitle, aboutText, actionWrapper);
      detailPage.appendChild(detailCard);

      detailPage.addEventListener('click', (event) => {
        if (event.target === detailPage) {
          closeCardDetail();
        }
      });

      const backBtn = detailPage.querySelector('.backBtn');
      if (backBtn) {
        backBtn.addEventListener('click', closeCardDetail);
      }

      document.body.appendChild(detailPage);
    });
  });
}

if (connectBtn) {
  connectBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const name = document.getElementById('name');

    if (!email || !pass || !name) {
      return;
    }

    if (!email.value.trim() || !pass.value.trim() || !name.value.trim()) {
      alert('Please enter all details.');
      return;
    }

    alert('Thanks for connecting!');
  });
}
