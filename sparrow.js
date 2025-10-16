


const menuCont = document.getElementById('menuCont');
const newnav = document.getElementById('newnav');

menuCont.addEventListener('click', () => {
    menuCont.classList.toggle('active');  // Animate hamburger to X
    newnav.classList.toggle('active');   // Show/hide links
});


const links2 = newnav.querySelectorAll('a');

links2.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Iterating");
        // Remove active from all links
        links2.forEach(l => l.classList.remove('active'));

        // Add active to the clicked one
        link.classList.add('active');
        
        // (Optional) close the menu after clicking a link
        menuCont.classList.remove('active');
        newnav.classList.remove('active');
        console.log("removed");
    });
});



  // Event listeners for hover
  document.querySelectorAll('#navbar-section nav a').forEach(link => {
    link.addEventListener('mouseenter', e => {
      const key = e.target.dataset.content;
      animateChange(key);
    });
  });

  // Load 'features' section initially
  window.addEventListener('DOMContentLoaded', () => {
    animateChange('features');
  });


  let currentScale = 1;
const SCALE_STEP = 0.1;
const MAX_SCALE = 2;
const MIN_SCALE = 1; // minimum 1x zoom

// Zoom In/Out buttons
document.getElementById('zoomIn').addEventListener('click', () => {
  if (currentScale < MAX_SCALE) currentScale += SCALE_STEP;
  dynamicImage.style.transform = `scale(${currentScale})`;
});

document.getElementById('zoomOut').addEventListener('click', () => {
  if (currentScale > MIN_SCALE) currentScale -= SCALE_STEP;
  dynamicImage.style.transform = `scale(${currentScale})`;
});

// Mouse move effect
dynamicImage.addEventListener('mousemove', (e) => {
  const rect = dynamicImage.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  dynamicImage.style.transformOrigin = `${x}% ${y}%`;
  dynamicImage.style.transform = `scale(${currentScale})`;
});

// Reset transform-origin when mouse leaves
dynamicImage.addEventListener('mouseleave', () => {
  dynamicImage.style.transformOrigin = 'center center';
});