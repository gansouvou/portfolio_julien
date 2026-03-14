// Validation du formulaire
document.addEventListener("DOMContentLoaded", () => {

    // 1.Animation du menu de navigation
    const nav = document.querySelector('.nav-links');
    const toggleMenu = document.querySelector('.toggle-menu');

    if (toggleMenu) {
        toggleMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggleMenu.classList.toggle('active');
    });
    }

    // formulaire par whatsapp
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");


  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = encodeURIComponent(document.getElementById("name").value);
      const adress = encodeURIComponent(document.getElementById("adress").value);
      const message = encodeURIComponent(document.getElementById("message").value);

      feedback.textContent = " Redirection vers WhatsApp...";
      feedback.style.color = "lightgreen";

      const whatsappNumber = "22943955625";
      const url = `https://wa.me/${whatsappNumber}?text=👤 Nom: ${name}%0A📍 Adresse: ${adress}%0A💬 Message: ${message}`;

      window.open(url, "_blank");
    });
  }

});
