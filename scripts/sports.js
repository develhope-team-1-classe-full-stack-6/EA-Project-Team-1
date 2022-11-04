
const boxContent = [
  {
      id: 0,
      href: "https://www.ea.com/it-it/games/nhl/nhl-23",

      src1: "../assets/images/sports/nhl23-game-box-bg-1x1.jpg.adapt.crop1x1.767w.jpg",
      
      src2: "../assets/images/sports/nhl23-game-box-logo-white.svg",

  },

  {
      id: 1,
      href: "https://www.ea.com/it-it/games/fifa/fifa-23",

      src1: "../assets/images/sports/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/sports/fifa23-logo-white-stacked.svg",

  },

  {
      id: 2,
      href: "https://www.ea.com/en-us/games/madden-nfl/madden-nfl-23",

      src1: "../assets/images/sports/madden-23-keyart.jpg.adapt.crop1x1.767w.jpg",
      
      src2: "../assets/images/sports/m23-gamebox-logo.svg",
  },

  {
      id: 3,
      href: "https://www.ea.com/it-it/games/f1/f1-22",

      src1: "../assets/images/sports/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png",
      
      src2: "../assets/images/sports/f122-gamebox-logo.png",
  },

  {
      id: 4,
      href: "https://www.ea.com/it-it/games/fifa/fifa-22",

      src1: "../assets/images/sports/fifa22-key-art.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/sports/fifa22-mono-logo.svg"
  },

  {
      id: 5,
      href: "https://www.ea.com/en-us/games/nhl/nhl-22?isLocalized=true",

      src1: "../assets/images/sports/nhl22-gin-16x9.jpg.adapt.crop1x1.767p.jpg",
      
      src2: "../assets/images/sports/nhl22-mono-logo.png",
  },

  {
      id: 6,
      href: "https://www.ea.com/it-it/games/ufc/ufc-4",

      src1: "../assets/images/sports/ufc4-gin-keyart.png.adapt.crop1x1.767p.png",
      
      src2: "../assets/images/sports/ufc-mono-logo.svg",
  },

  {
      id: 7,
      href: "https://www.ea.com/it-it/games/pga-tour",

      src1: "../assets/images/sports/easports-pgatour-keyart.jpg.adapt.crop1x1.767w.jpg",
      
      src2: "../assets/images/sports/easports-pga-tour-mono-logo-white.svg",
  },

  {
      id: 8,
      href: "https://www.ea.com/en-us/games/f1/f1-2021",

      src1: "../assets/images/sports/formula1-gamebox-1x1.jpg.adapt.crop1x1.767w.jpg",
      
      src2: "../assets/images/sports/f1-2021-mono-logo.svg",
  }
];


const row = document.getElementById("row1");

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


const boxContentMobile = [
    {
        id: 0,
        href: "https://www.ea.com/it-it/games/fifa/fifa-mobile",
  
        src1: "../assets/images/sports/fifa-mobile-key-art.jpg.adapt.crop1x1.767w.jpg",
        
        src2: "../assets/images/sports/fifa-mobile--logo.svg",
  
    },
  
    {
        id: 1,
        href: "https://www.ea.com/it-it/games/nba-live/nba-live-mobile/",
  
        src1: "../assets/images/sports/nba-live-mobile-giannis-gamebox-1x1.jpg.adapt.crop1x1.767w.jpg",
        
        src2: "../assets/images/sports/nba-live-mobile-mono-logo.png",
  
    },
  
    {
        id: 2,
        href: "https://www.ea.com/en-us/games/madden-nfl/madden-nfl-22-mobile?isLocalized=true",
  
        src1: "../assets/images/sports/madden-22-mobile-keyart.jpg.adapt.crop1x1.767w.jpg",
        
        src2: "../assets/images/sports/madden-22-mobile-mono-logo.svg",
    },
  
    {
        id: 3,
        href: "https://www.ea.com/games/f1/f1-mobile-racing",
  
        src1: "../assets/images/sports/formula1-mobileracing-gamebox.png.adapt.crop1x1.767w.png",
        
        src2: "../assets/images/sports/f1-mobileracing-logo.svg",
    },
  ];

  
const row2 = document.getElementById("row2");

function colGenerator2(item, cont) {
    for (let i = 0; i < cont.length; i++) {
      row2.innerHTML += `<div class="box col-12 col-md-6">
    ${item(cont[i].href, cont[i].src1, cont[i].src2)}
    </div>`;
    }
  }

  
colGenerator2(box, boxContentMobile);
