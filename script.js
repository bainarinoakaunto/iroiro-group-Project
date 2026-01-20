<script>
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
    });
  });
function onScroll() {
  const sections = document.querySelectorAll('section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible'); // 任意で消す
    }
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
