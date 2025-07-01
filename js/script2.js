const texts = {
    es: {
        home: "Bienvenidos a Agencia Casablanca",
        about: "Sobre Nosotros",
        contact: "Contáctanos"
    },
    en: {
        home: "Welcome to Agencia Casablanca",
        about: "About Us",
        contact: "Contact Us"
    }
};

function changeLanguage(lang) {
    document.querySelector('#home-title').textContent = texts[lang].home;
    // Aplica cambios similares a otros textos
}