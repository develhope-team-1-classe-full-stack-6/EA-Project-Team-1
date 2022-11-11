
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
/*cards*/
const rowCard = document.getElementById("row-card");
const rowCard2 = document.getElementById("row-card-2");
const rowCard3 = document.getElementById("row-card-3");
const rowCard4 = document.getElementById("row-card-4");
const rowCard5 = document.getElementById("row-card-5");
const rowCard6 = document.getElementById("row-card-6");
const rowCard7 = document.getElementById("row-card-7");
const rowCard8 = document.getElementById("row-card-8");

const cardContent = [
  {
    id: 0,
    href: "https://www.ea.com/it-it/games/fifa/fifa-23/news/fifa-23-pitch-notes-fifa-world-cup",

    src1: "../assets/images/sports/f23-worldcup-featureimg-16x9.jpg.adapt.crop16x9.431p.jpg",

    type: "FIFA",

    date: "1 nov 2022",

    title: "FIFA 23 | Note degli sviluppatori - FIFA World Cup<sup>tm</sup>",

    content:
      "Abbiamo numerosi dettagli da condividere sulla FIFA World Cup 2022™, disponibile a breve in FIFA 23.",
  },

  {
    id: 1,
    href: "https://www.ea.com/it-it/games/fifa/fifa-23/news/fifa-23-show-racism-the-red-card",

    src1: "../assets/images/sports/main.jpg.adapt.crop16x9.431p.jpg",

    type: "FIFA",

    date: "28 ott 2022",

    title: "Show Racism the Red Card",

    content:
      "28 ottobre 2022 - EA SPORTS™ e Show Racism the Red Card (SRtRC) hanno annunciato che l'opera d'arte vincitrice del concorso scolastico \"IT\'S IN THE GAME\" di quest'anno sarà da oggi parte di FIFA 23.",
  },

  {
    id: 2,
    href: "https://www.ea.com/it-it/games/fifa/fifa-20/news/pitch-notes-fifa-23-title-update-2",

    src1: "../assets/images/sports/pitch-notes-tile-update.png.adapt.crop16x9.431p.png",

    type: "FIFA",

    date: "18-ott-2022",

    title: "FIFA 23 | Note degli sviluppatori sull'aggiornamento #2 - EA SPORTS",

    content:
      "L'aggiornamento #2 di FIFA 23 è disponibile per tutte le versioni e include modifiche alla velocità della palla di un passaggio rasoterra, alla precisione dei pallonetti e all'efficacia dei contrasti in piedi.",
  },

  {
    id: 3,
    href: "https://www.ea.com/it-it/games/fifa/fifa-20/news/pitch-notes-fifa-23-title-update-2",

    src1: "../assets/images/sports/f23-featured-image-ea-play-trial.jpg.adapt.crop16x9.431p.jpg",

    type: "FIFA",

    date: "26 sett 2022",

    title: `FIFA 23 - Versione di prova in accesso anticipato EA Play - Sito ufficiale …`,

    content: `Inizia la tua stagione in anticipo con la versione di prova in accesso anticipato EA Play di FIFA 23`
      ,
  },

  {
    id: 4,
    href: "https://www.ea.com/it-it/games/fifa/fifa-20/news/pitch-notes-fifa-23-fgs-23-deep-dive",

    src1: "../assets/images/sports/pitchnotes-23-hotorange.png.adapt.crop16x9.431p.png",

    type: "FIFA",

    date: "26 sett 2022",

    title: "FIFA 23 - Note degli sviluppatori - Un'occhiata da vicino alla FGS 23 - EA …",

    content:
      "La FIFA Global Series (FGS) di quest'anno sarà simile a quella della passata stagione, ma con alcune modifiche di rilievo.",
  },

  {
    id: 5,
    href: "https://www.ea.com/it-it/games/fifa/fifa-20/news/musqueam-fifa-23",

    src1: "../assets/images/sports/f23-media-musqueam-environment.jpg.adapt.crop16x9.431p.jpg",

    type: "FIFA",

    date: "23 sett 2022",

    title: "Musqueam x FIFA 23",

    content:
      "Scopri di più Musqueam in FIFA 23",
  },
];

function colGeneratorCard(row, item, cont) {
  for (let i = 0; i < cont.length; i++) {
    row.innerHTML += item(cont[i].href, cont[i].src1, cont[i].type, cont[i].date, cont[i].title, cont[i].content);
  }
}

function card(href, src1, type, date, title, content) {
  const card = `
    <a href=${href} class="card">
            <img src=${src1} class="card-img-top" alt="${title}">
            <div class="card-body p-4">
              <div class="d-flex flex-column align-items-center flex-md-row align-items-md-start mb-2">
                <span class="me-md-3" style="color:var(--orange);">${type}</span>
                <span>${date}</span>
              </div>
              <h3 class="h5 title text-center text-md-start mb-2">${title}</h3>
              <p class="card-text text-dark">${content}</p>
            </div>
    </a>
  `;
  return card;
}

colGeneratorCard(rowCard, card, cardContent);
colGeneratorCard(rowCard2, card, cardContent);
colGeneratorCard(rowCard3, card, cardContent);
colGeneratorCard(rowCard4, card, cardContent);
colGeneratorCard(rowCard5, card, cardContent);
colGeneratorCard(rowCard6, card, cardContent);
colGeneratorCard(rowCard7, card, cardContent);
colGeneratorCard(rowCard8, card, cardContent);
