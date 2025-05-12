// =============== SLIDER ===============
let slides = document.querySelectorAll(".slider");
let cardElements = document.querySelectorAll(".crd");
let connectBtn = document.getElementById("connect");
let count = 0;

// Set initial slider positions
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function moveSlider() {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}

setInterval(() => {
    count++;
    if (count === slides.length) {
        count = 0;
    }
    moveSlider();
}, 2000);



// =============== CARD DETAIL VIEW ===============
cardElements.forEach(card => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").src;

        // Create detail page content
        const detailPage = document.createElement("div");
        detailPage.className = "cardDetail";

        detailPage.innerHTML = `
            <h1>Challenge Details</h1>
            <p>Duration: 12 Weeks</p>
            <img src="${imgSrc}" alt="Challenge Image">
            <h3>About This Challenge</h3>
            <p class="dumiText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nam odit eligendi, ducimus consectetur voluptate ea?
                Quod sequi voluptatem autem dolor earum. Ex!
            </p>
            <button onclick="goBack()">Join Now</button>
            <a href="#" onclick="goBack()">Back</a>
        `;

        // Clear body and append detail view
        document.body.innerHTML = "";
        document.body.appendChild(detailPage);
    });
});

// Go back function
function goBack(e) {
    e?.preventDefault();

    // Rebuild original container
    location.reload(); // Or dynamically re-add content
}

// =============== CONTACT FORM VALIDATION ===============
connectBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let name = document.getElementById("name");

    if (!email.value || !pass.value || !name.value) {
        alert("Please enter all details.");
    } else {
        alert("Thanks for connecting!");
    }
});