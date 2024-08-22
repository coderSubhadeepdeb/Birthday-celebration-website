const gallery= document.querySelector(".gallery-photos");
const galleryform= document.querySelector("#gallery-imagesub-form");

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
       gallery.classList.add("show");
    }, 900);
});

galleryform.addEventListener('submit', (event)=>{
    event.preventDefault();
    galleryform.reset();
});
