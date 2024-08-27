// Select all flip containers
const flipContainers = document.querySelectorAll('.flip-container');
const popClose = document.querySelector('.close-btn');
const popOuter = document.getElementById('surprisePop');
const popPhoto = document.getElementById('photosurprisePop');

// Flag to track if a div has been clicked
let gameActive = true;

// Add click event listener to each flip container
flipContainers.forEach(container => {
  container.addEventListener('click', function() {
    if (gameActive) { // Only allow click if game is active
      this.classList.add('clicked'); // Flip the clicked div
      gameActive = false; // Set game to inactive after one div is flipped

      // Add blocked class to all containers to prevent further clicks
      flipContainers.forEach(cont => {
        cont.classList.add('blocked');
      });

      const backgroundImage = this.querySelector('.back').style.backgroundImage;
      const imageUrl = backgroundImage.slice(5, -2);

      popPhoto.style.backgroundImage = `url(${imageUrl})`;

      setTimeout(()=>{
        popOuter.classList.remove('hidden');
      },700);
    }
  });
});


popClose.addEventListener('click', () => {
    // Hide the popup
    popOuter.classList.add('hidden');
  
    
  });

