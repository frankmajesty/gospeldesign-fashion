// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {link.addEventListener("click", function(e) {e.preventDefault():
const target = document.querySelector(this.getAttribute("href"));
    if (target)
        {target.scrollIntoView({behavior: "smooth"});
    }
  });
});

// create lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const galleryImages = document.querySelectorAll(".gallery-grid img");
galleryImages.forEach(img=> {img.addEventListener("click", e => {
    lightbox.classList.add("active");
    const bigImg = document.createElement("img");
    bigImg.scr = img.scr;
    while (lightbox.firstChild);{
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(bigImg);
});
});
// close lightbox on click
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget)return;
    lightbox.classList.remove("active")
});
// Gallery lightbox with Next/Prev
const lightbox = 
document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const PrevBtn = 
document.createElement("button");
PrevBtn.classname = "prev";
PrevBtn.innerHTML = "&#10094;"; // <
lightbox.appendChild(PrevBtn);

const nextBtn =
document.createElement("button");
nextBtn.className = "next";
PrevBtn.innerHTML = "&#10095;"; // >
lightbox.appendChild(PrevBtn);

const bigBtn =
document.createElement("img");
lightbox.appendChild(bigImg);

const galleryImages =