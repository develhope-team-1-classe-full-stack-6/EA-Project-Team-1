const rowCard = document.getElementById("row-card");

const cardContent = [
  {
    id: 0,
    href: "https://www.ea.com/it-it/games/it-takes-two/news/it-takes-two-now-available-on-nintendo-switch",

    src1: "../assets/images/star-wars/jedi-card.png",

    title: "Star Wars<sup>TM</sup> Jedi: Fallen Order | Dettagli versione next-gen",
  },

  {
    id: 1,
    href: "https://www.ea.com/it-it/news/ea-marvel-entertainment-multi-title-collaboration",

    src1: "../assets/images/star-wars/squadrons-card.jpg",

    title: "STAR WARS<sup>TM</sup>: Squadrons-Modifiche al bilanciamento - 6 maggio - Sito EA ufficiale",
  },

  {
    id: 2,
    href: "https://www.ea.com/it-it/games/starwars/squadrons/news/weekly-balancing-04-07",

    src1: "../assets/images/star-wars/squadrons-2-card.jpg",

    title: "STAR WARS<sup>TM</sup>: Squadrons-Modifiche al bilanciamento - 7 aprile - Sito EA ufficiale",
  },
];

function colGeneratorCard(row, item, cont) {
  for (let i = 0; i < cont.length; i++) {
    row.innerHTML += item(cont[i].href, cont[i].src1, cont[i].title);
  }
}

function card(href, src1, title,) {
  const card = `
    <a href=${href} class="card bg-dark text-white">
            <img src=${src1} class="card-img-top" alt="${title}">
            <div class="card-body p-4">
              <h3 class="h5 title text-center text-md-start mb-2">${title}</h3>
            </div>
    </a>
  `;
  return card;
}

colGeneratorCard(rowCard, card, cardContent);