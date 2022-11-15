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
    href: "https://www.ea.com/it-it/games/it-takes-two/news/it-takes-two-now-available-on-nintendo-switch",

    src1: "./assets/images/it-takes-two-card-img.jpg",

    type: "It Takes Two",

    date: "4-nov-2022",

    title: "It Takes Two è ora disponibile su Nintendo Switch<sup>tm</sup>",

    content:
      "Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>tm</sup>",
  },

  {
    id: 1,
    href: "https://www.ea.com/it-it/news/ea-marvel-entertainment-multi-title-collaboration",

    src1: "./assets/images/marvel-card.jpg",

    type: "Electronic Arts Inc.",

    date: "31-ott-2022",

    title: "EA e MARVEL ENTERTAINMENT annunciano una collaborazione su più titoli",

    content:
      "EA e MARVEL ENTERTAINMENT annunciano una collaborazione su più titoli per lo sviluppo di giochi d'azione e avventura",
  },

  {
    id: 2,
    href: "https://www.ea.com/it-it/games/the-sims/the-sims-4/news/play-the-sims-4-for-free-beginning-october-18",

    src1: "./assets/images/logo-the-sims-4.png",

    type: "Electronic Arts Inc.",

    date: "18-ott-2022",

    title: "Giocate a The Sims 4 gratis a partire dal 18 ottobre",

    content:
      "Ulteriori aggiornamenti a seguire durante uno streaming speciale: behind The Sims summit",
  },

  {
    id: 3,
    href: "https://www.ea.com/it-it/games/the-sims/the-sims-4/news/everything-announced-during-the-behind-the-sims-summit",

    src1: "./assets/images/logo-the-sims-4.png",

    type: "Electronic Arts Inc.",

    date: "18-ott-2022",

    title: `Tutto ciò che è stato annunciato durante l'evento:"Behind The Sims Summit"`,

    content: `Uno sguardo al passato, al presente e al radioso futuro di The Sims`
      ,
  },

  {
    id: 4,
    href: "https://www.ea.com/it-it/news/origin-for-mac",

    src1: "./assets/images/eacom-brand-featured-image-16x9.png.adapt.crop16x9.431p.png",

    type: "Electronic Arts Inc.",

    date: "6-ott-2022",

    title: "Un aggiornamento per i nostri giocatori Mac sull'EA app per Windows",

    content:
      "Forse avrai letto qualche notizia sulla nuova EA app per Windows, che presto diventerà il principale punto di riferimento per i giochi PC di EA, andando a sostituire Origin.",
  },

  {
    id: 5,
    href: "https://www.ea.com/it-it/news/ea-app",

    src1: "./assets/images/monitor-fifa-card-img.jpg",

    type: "Electronic Arts Inc.",

    date: "7/11/2022",

    title: "La nuovissima EA app per Windows",

    content:
      "Siamo lieti di annunciare che l'EA app ha ufficialmente abbandonato la fase open beta e presto sostituirà Origin in qualità di piattaforma primaria per PC.",
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
