let sidebar = document.querySelector(".sidebar");
function toggleSidebar() {
  const breakpoint = 768; // Adjust breakpoint as needed
  if (window.innerWidth > breakpoint) {
    sidebar.classList.add("open");
  } else {
    sidebar.classList.remove("open");
  }
}
// Initial check
toggleSidebar();
// Listen for window resize events
window.addEventListener('resize', toggleSidebar);
// Get all the section elements and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list li a');

// Function to update the active link based on the scroll position
function updateActiveLink() {
  let scrollPosition = window.scrollY + (window.innerHeight * 0.63); // 63% of the viewport height

  sections.forEach((section, index) => {
    // Get the top position of the section and its height
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    // Check if the scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to the respective link
      navLinks[index].classList.add('active');
    }
  });
}
// Call updateActiveLink on page load to set the initial active link
window.addEventListener('load', updateActiveLink);

// Call updateActiveLink whenever the user scrolls
window.addEventListener('scroll', updateActiveLink);

// Smooth scrolling for sidebar links
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});