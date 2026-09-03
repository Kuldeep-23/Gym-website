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
      detailPage.innerHTML = `
        <div class="cardDetail" role="dialog" aria-modal="true" aria-label="Challenge details">
          <h1>Challenge Details</h1>
          <p>Duration: 12 Weeks</p>
          <img src="${image.src}" alt="Challenge image">
          <h3>About This Challenge</h3>
          <p class="dumiText">
            Build consistency with simple daily workouts and nutrition-focused habits for sustainable fitness progress.
          </p>
          <div class="cardDetailActions">
            <button type="button" class="joinBtn">Join Now</button>
            <button type="button" class="backBtn">Back</button>
          </div>
        </div>
      `;

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
