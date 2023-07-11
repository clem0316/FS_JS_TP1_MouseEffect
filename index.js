// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

const cursor2 = document.querySelector(".cursor2");

window.addEventListener("mousemove", (e) => {
  cursor2.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
});

const cursor3 = document.querySelector(".cursor3");

window.addEventListener("mousemove", (e) => {
  cursor3.style.left = e.pageX + "px";
  cursor3.style.top = e.pageY + "px";
});
