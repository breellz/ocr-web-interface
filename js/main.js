const activeImage = document.querySelector(".active-work img");
const images = document.querySelectorAll(".img-card img");
const activeDesc = document.querySelector(".active-img-desc");

const nav = document.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

// Mobile Nav

menuBtn.addEventListener("click", function () {
  mobileNav.classList.add("active");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
})

closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
})

// Mobile Nav Menu Links

mobileNavLinks.forEach(link => (link.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
})))

// Eventlisteners for images

//images.forEach(image => (image.addEventListener("click", changeImage)));

//function changeImage(e) {
  //activeImage.src = e.target.src;
  //activeDesc.innerHTML = e.target.nextElementSibling.innerText;
//}

// Scroll Menu Add Class

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
})

//To click the hidden button through the visible one
const realFileBtn = document.getElementById('real-file');
		const customBtn = document.getElementById('custom-button');
        const customtext = document.getElementById('custom-text')

customBtn.addEventListener('click', function () {
  realFileBtn.click();
})

realFileBtn.addEventListener('change', function () {
  if (realFileBtn.value) {
    customtext.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    customtext.innerHTML = "No file chosen";
  }
});
//to get access to client's webcam

   if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
   }
const video = document.querySelector("#videoElement");


		const context = canvas.getContext('2d');
    const capture = document.getElementById('capture');
    
		capture.addEventListener('click', () => {
			//Draw the video frame to canvas
			context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    });
    