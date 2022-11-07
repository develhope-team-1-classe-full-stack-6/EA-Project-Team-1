const row = document.getElementById("row");
const boxContent = [
  {
      id: 0,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",

  },

  {
      id: 1,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",

  },

  {
      id: 2,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",
  },

  {
      id: 3,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",
  },

  {
      id: 4,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg"
  },

  {
      id: 5,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",
  },

  {
      id: 6,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",
  },

  {
      id: 7,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",
  },

  {
      id: 8,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/fifa23-logo-white-stacked.svg",
  }
];

function colGenerator(item, cont) {
  for (let i = 0; i < cont.length; i++) {
    row.innerHTML += `<div class="box col-12 col-md-6 col-xl-4">
  ${item(cont[i].href, cont[i].src1, cont[i].src2)}
  </div>`;
  }

}

function box(href, src1, src2) {
  const box = `
  <a
      class="position-relative d-flex justify-content-center align-items-center sidebar-little-box"
      href=${href}
       >
          <img
          class="w-100 h-auto"
          src=${src1}
          />
              <img
                  class="position-absolute sidebar-little-box-logo"
                  src=${src2}
                  alt=""
              />
  </a>
  `;
  return box;
}

colGenerator(box, boxContent);