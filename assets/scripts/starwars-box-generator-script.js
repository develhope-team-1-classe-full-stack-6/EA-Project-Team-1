
const boxContent = [
  {
    id: 0,

    src1: "../assets/images/star-wars/star-wars-jedi-survivor-box.1x1.767p.jpg",

    logoWidth: "width: 130px",
    
    src2: "../assets/images/star-wars/star-wars-jedi-survivor-logo-white-xl-l-m.png.adapt.crop3x5.767w.png",

    href1: "https://www.ea.com/it-it/games/starwars/star-wars-jedi-survivor",

    href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

    href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },

  {
      id: 1,

      src1: "../assets/images/star-wars/aside-squadrons-box-sws-keyart.jpg.adapt.crop1x1.767w.jpg",

      logoWidth: "width: 70px",
      
      src2: "../assets/images/star-wars/sws-logo-light.svg",

      href1: "https://www.ea.com/it-it/games/starwars/star-wars-squadrons",

      href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

      href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },

  {
      id: 2,

      src1: "../assets/images/star-wars/aside-jedi-box-star-wars-jedi-home-hero-large-xl.jpg.adapt.crop1x1.767w.jpg",

      logoWidth: "width: 140px",
      
      src2: "../assets/images/star-wars/jedi-the-fallen-order-box-logo.svg",

      href1: "https://www.ea.com/it-it/games/starwars/star-wars-jedi-fallen-order",

      href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

      href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },

  {
      id: 3,

      src1: "../assets/images/star-wars/aside-battlefront-II-box-SWBF2-1x1-Tile.png.adapt.crop1x1.767w.png",

      logoWidth: "width: 160px",
      
      src2: "../assets/images/star-wars/battlefront-2-logo.png",

      href1: "https://www.ea.com/it-it/games/starwars/star-wars-battlefront-2",

      href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

      href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },

  {
      id: 4,

      src1: "../assets/images/star-wars/aside-hero-of-galaxies-box-swgh-xl.jpg.adapt.crop1x1.767w.jpg",

      logoWidth: "width: 160px",
      
      src2: "../assets/images/star-wars/aside-box-galaxy-of-heroes-logo-game-boxes-logo-swgh.png",

      href1: "https://www.ea.com/it-it/games/starwars/star-wars-galaxy-of-heroes",

      href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

      href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },

  {
      id: 5,

      src1: "../assets/images/star-wars/star-wars-battlefront-box.767p.jpg",

      logoWidth: "width: 160px",
      
      src2: "../assets/images/star-wars/battlefront-1-logo-box.png",

      href1: "https://www.ea.com/it-it/games/starwars/star-wars-battlefront",

      href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

      href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },

  {
      id: 6,

      src1: "../assets/images/star-wars/aside-old-republic-box-star-wars-the-old-republic-key-art.jpg.adapt.crop1x1.767w.jpg",

      logoWidth: "width: 160px",
      
      src2: "../assets/images/star-wars/star-wars-the-old-republic-mono-logo.png",

      href1: "https://www.ea.com/it-it/games/starwars/star-wars-the-old-republic",

      href2: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",

      href3: "https://answers.ea.com/t5/STAR-WARS/ct-p/starwars-en",
  },
];


const row = document.getElementById("box-generator-starwars");

function colGenerator(item, cont) {
for (let i = 0; i < cont.length; i++) {
  row.innerHTML += `<div class="box col-12 col-md-6 col-xl-4 pb-4">
${item(cont[i].src1, cont[i].logoWidth, cont[i].src2, cont[i].href1, cont[i].href2, cont[i].href3)}
</div>`;
}
}

function box(src1, logoWidth, src2, href1, href2, href3) {
const box = `
  <div class="position-relative d-flex justify-content-center align-items-center box-container-blue">
      <img class="position-absolute top-0 start-0 box-background"
          src=${src1}>
      <img class="position-absolute box-logo" style="${logoWidth}; transition: all 300ms ease-out;"
          src=${src2}>
      <div class="position-absolute text-center">
          <a href=${href1}>Sito ufficiale</a>
          <a href=${href2} class="b3">Aiuto</a>
          <a href=${href3} class="b3">Forum</a>
      </div>
  </div>
`;

return box;
}

colGenerator(box, boxContent);
