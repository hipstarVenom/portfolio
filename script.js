document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {

  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Simulate success
      alert("Message sent successfully!");
      form.reset();
    });
  
    function validateEmail(email) {
      // Basic email regex
      const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  
   
  /* Fade-in Animation via JS */
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });
  });
