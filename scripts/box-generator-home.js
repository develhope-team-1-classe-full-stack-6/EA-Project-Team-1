
const boxContent = [
    {
      id: 0,

      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "./assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",

      src2: "./assets/images/fifa23-logo-white-stacked.svg",

      logoWidth: "width: 130px",
    },

    {
        id: 1,
  
        href: "https://www.ea.com/it-it/games/apex-legends/apex-legends-mobile",
  
        src1: "./assets/images/apex-mobile-keyart-1x1.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "./assets/images/apex-mobile-logo.svg",
  
        logoWidth: "width: 70px",
    },

    {
        id: 2,
  
        href: "https://www.ea.com/it-it/games/f1/f1-22",
  
        src1: "./assets/images/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png",
  
        src2: "./assets/images/f122-gamebox-logo.png",
  
        logoWidth: "width: 160px",
    },

    {
        id: 3,
  
        href: "https://www.ea.com/it-it/games/battlefield/battlefield-2042",
  
        src1: "./assets/images/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "./assets/images/battlefield-2042-mono-logo-svg.svg",
  
        logoWidth: "width: 160px",
    },

    {
        id: 4,
  
        href: "https://www.ea.com/it-it/games/apex-legends",
  
        src1: "./assets/images/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "./assets/images/apex-legends-mono-logo.svg",
  
        logoWidth: "width: 100px",
    },

    {
        id: 5,
  
        href: "https://www.ea.com/it-it/games/the-sims/the-sims-4",
  
        src1: "./assets/images/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "./assets/images/game-box-logo-thesims4-refresh.svg",
  
        logoWidth: "width: 160px",
    },
];


const row = document.getElementById("box-generator-home");

function colGenerator(item, cont) {
  for (let i = 0; i < cont.length; i++) {
    row.innerHTML += `<div class="box col-12 col-md-6 col-xl-4 pb-4">
  ${item(cont[i].href, cont[i].src1, cont[i].src2, cont[i].logoWidth)}
  </div>`;
  }
}

function box(href, src1, src2, logoWidth) {
  const box = `
  <a class="position-relative d-flex justify-content-center align-items-center box-container" href=${href}>
  <img class="position-absolute top-0 start-0 box-background" src=${src1}>
  <img class="position-absolute box-logo" style="${logoWidth}; transition: all 300ms ease-out;" src=${src2}>
  <p class="position-absolute b3">Sito ufficiale</p>
</a>
`;

  return box;
}

colGenerator(box, boxContent);
