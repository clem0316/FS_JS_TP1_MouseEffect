// const cursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });

// const mouse1 = document.querySelector(".mouse1");

// window.addEventListener("mousemove", (e) => {
//   mouse1.style.left = e.pageX + "px";
//   mouse1.style.top = e.pageY + "px";
// });

// const mouse2 = document.querySelector(".mouse2");

// window.addEventListener("mousemove", (e) => {
//   mouse2.style.left = e.pageX + "px";
//   mouse2.style.top = e.pageY + "px";
// });

// Ci-dessus, la version en déclarant chaque curseur indépendamment.
// C-dessous, la refactorisation en ajoutant une classe commune "mouses" à nos 3 cercles de curseur

const mouses = document.querySelectorAll(".mouses");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});

// - NOTE 1 :Attnetion à bien différencier querySelector (qui prend la première div avec la classe "mouses") et le querySelectorAL-ll (qui va prendre toutes les div avec la classe "mouses")
// - NOTE 2 : on utlise le forEach pour passer tous les léments ocmportant la classe "mouses". Puis on nomme un paramètre (comme on veut) qui représente chacune des div de la classe "mouses"
