const messagebox= document.querySelector(".messages");
const wishform= document.querySelector("#wishing-messagesub-form");

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
       messagebox.classList.add("show");
    }, 900);
});
wishform.addEventListener('submit', (event)=>{
    event.preventDefault();
    wishform.reset();
});