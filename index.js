const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');  // Animate hamburger to X
    navLinks.classList.toggle('active');   // Show/hide links
});

// Add active class to clicked nav link
const links = navLinks.querySelectorAll('a');
console.log(links);
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active from all links
        links.forEach(l => l.classList.remove('active'));

        // Add active to the clicked one
        link.classList.add('active');
        
        // (Optional) close the menu after clicking a link
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});






let observer = new IntersectionObserver(updates => {
  updates.forEach(update => {
    // console.log(update)
      if (update.isIntersecting) {
          update.target.classList.add('visible');
      }
      //  else {
      //     update.target.classList.remove('visible');
      // }
  });
}, { threshold: [0.25,0.5] });

var element8 = document.querySelectorAll(".element");

element8.forEach(element =>{
    console.log(element.id);
  observer.observe(element);
})

