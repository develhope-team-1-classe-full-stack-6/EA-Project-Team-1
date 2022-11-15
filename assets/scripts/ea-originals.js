
const boxContent = [
    {
      id: 0,

      href: "https://www.ea.com/it-it/games/wild-hearts/wild-hearts",

      src1: "../assets/images/ea-originals/wild-hearts-key-art.jpg.adapt.crop1x1.767p.jpg",

      src2: "../assets/images/ea-originals/wild-hearts-logo.png",

      logoWidth: "width: 160px",
    },

    {
        id: 1,
  
        href: "https://www.ea.com/it-it/games/lost-in-random",
  
        src1: "../assets/images/ea-originals/lir-keyart.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/lir-logo-mono.png",
  
        logoWidth: "width: 160px",
    },

    {
        id: 2,
  
        href: "https://www.ea.com/it-it/games/it-takes-two",
  
        src1: "../assets/images/ea-originals/it-takes-two-keyart.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/it-takes-two-logo-mono.png",
  
        logoWidth: "width: 160px",
    },

    {
        id: 3,
  
        href: "https://www.ea.com/it-it/games/rocket-arena",
  
        src1: "../assets/images/ea-originals/rocket-arena-keyart-16x9.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/rocket-arena-mono-logo.svg",
  
        logoWidth: "width: 100px",
    },

    {
        id: 4,
  
        href: "https://www.ea.com/it-it/games/sea-of-solitude",
  
        src1: "../assets/images/ea-originals/sos-section-keyart-xl.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/sea-of-solitude-mono-logo.png",
  
        logoWidth: "width: 160px",
    },

    {
        id: 5,
  
        href: "https://www.ea.com/it-it/games/unravel/unravel-two",
  
        src1: "../assets/images/ea-originals/unravel-2-key-art.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/unravel-2-mono-logo.svg",
  
        logoWidth: "width: 160px",
    },

    {
        id: 6,
  
        href: "https://www.ea.com/it-it/games/a-way-out",
  
        src1: "../assets/images/ea-originals/a-way-out-key-art.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/a-way-out-mono-logo.png",
  
        logoWidth: "width: 160px",
    },

    {
        id: 7,
  
        href: "https://www.ea.com/it-it/games/fe",
  
        src1: "../assets/images/ea-originals/fe-keyart.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/fe-mono-logo.png",
  
        logoWidth: "width: 70px",
    },

    {
        id: 8,
  
        href: "https://www.ea.com/it-it/games/unravel/unravel",
  
        src1: "../assets/images/ea-originals/unravel.jpg.adapt.crop1x1.767p.jpg",
  
        src2: "../assets/images/ea-originals/unravel-logo-white.png",
  
        logoWidth: "width: 160px",
    },
];


const row = document.getElementById("ea-originals-row");

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
</a>
`;

  return box;
}

colGenerator(box, boxContent);
