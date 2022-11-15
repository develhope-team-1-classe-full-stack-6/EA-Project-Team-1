// Funzione generatrice delle card Inside EA
const rowCard = document.getElementById("row-card");
const rowCard2 = document.getElementById("row-card-2");
const rowCard3 = document.getElementById("row-card-3");

const cardContent = [
  {
    id: 0,
    href: "https://www.ea.com/it-it/news/firemonkeys-studio-celebrates-10-years-of-the-sims-freeplay",

    src1: "../assets/images/commitments/diversityinsidecard01.jpg",

    type: "Inside EA",

    date: "13-gen-2022",

    title: "Firemonkeys Studio di EA festeggia i 10 anni di The Sims FreePlay",

    content:
      "Tutto è cominciato realizzando The Sims per dispositivi mobili: da allora è diventato uno dei titoli preferiti della serie",
  },

  {
    id: 1,
    href: "https://www.ea.com/it-it/news/able-celebrates-ndeam-2021",

    src1: "../assets/images/commitments/diversityinsidecard02.jpg",

    type: "Inside EA",

    date: "2-nov-2021",

    title: "ABLE festeggia il mese nazionale di sensibilizzazione dell'occupazione per disabili",

    content:
      "È il momento di educare sui problemi di handicap e celebrare i numerosi e variegati contributi dei lavoratori con disabilità",
  },

  {
    id: 2,
    href: "https://www.ea.com/it-it/news/juntos-stronger-together",

    src1: "../assets/images/commitments/diversityinsidecard03.jpg",

    type: "Inside EA",

    date: "15-ott-2021",

    title: "Vieni a costruire il futuro di The Sims a Maxis",

    content:
      "Festeggiamo e supportiamo i dipendenti e i giocatori EA ispanici/latini",
  }
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

// Funzione generatrice delle 6 card impegni

const row = document.querySelector('.impegnicontainer');
const boxContent = [
  {
      id: 0,
      href: "https://www.ea.com/it-it/commitments/people-and-culture",
      h1: "Squadre di lavoro sane e all'insegna della diversità"

  },

  {
      id: 1,
      href: "https://www.ea.com/it-it/commitments/positive-play",
      h1: "Gioco positivo"

  },

  {
      id: 2,
      href: "https://www.ea.com/it-it/commitments/social-impact",
      h1: "Impatto sociale"
  },

  {
      id: 3,
      href: "https://www.ea.com/it-it/commitments/privacy",
      h1: "Investire nella privacy e nella sicurezza"
  },

  {
      id: 4,
      href: "https://www.ea.com/it-it/commitments/environment",
      h1: "Proteggere l'ambiente"
  },

  {
      id: 5,
      href: "https://ir.ea.com/corporate-governance/governance-documents/default.aspx",
      h1: "Rafforzare il governo societario"
  }
];

function colGenerator(item, cont) {

  for (let i = 0; i < cont.length; i++) {
    row.innerHTML += `
  ${item(cont[i].href, cont[i].h1)}`;
  }

}

function box(href, h1) {
  const box = `
  <div class="cardimpegni"><a href=${href} class="impegnilink" style="text-decoration: none"><h3 class="h5">${h1}</h3></a></div>
  `;
  return box;
}

colGenerator(box, boxContent);