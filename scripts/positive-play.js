// Funzione generatrice delle card Inside EA
const rowCard = document.getElementById("row-card");
const rowCard2 = document.getElementById("row-card-2");
const rowCard3 = document.getElementById("row-card-3");

const cardContent = [
  {
    id: 0,
    href: "https://www.ea.com/it-it/news/celebrating-6-years-of-our-purpose-beliefs-awards",

    src1: "../assets/images/commitments/ea-impegni-01.png",

    type: "Inside EA",

    date: "19-set-2022",

    title: "Festeggiamo i 6 anni dei nostri Purpose and Belief Awards",

    content:
      "Questi valori sono alla base di tutto ciò che facciamo.",
  },

  {
    id: 1,
    href: "https://www.ea.com/it-it/news/ea-s-summer-of-steam",

    src1: "../assets/images/commitments/ea-impegni-02.png",

    type: "Inside EA",

    date: "25-ago-2022",

    title: "Un'estate di STEAM con EA",

    content:
      "Un posto per mettere in luce e omaggiare il sostegno di EA ai programmi estivi che aiutano i giovani di diversa estrazione a sviluppare competenze in ambito STEAM (scienza, tecnologia, ingegneria, arti e matematica).",
  },

  {
    id: 2,
    href: "https://www.ea.com/it-it/news/come-build-the-future-of-the-sims-at-maxis",

    src1: "../assets/images/commitments/ea-impegni-03.jpg",

    type: "Inside EA",

    date: "1-apr-2022",

    title: "Vieni a costruire il futuro di The Sims a Maxis",

    content:
      "La nostra ambizione: ispirare tutti a creare un mondo migliore attraverso il gioco creativo",
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
      h1: "Squadre sane e all'insegna della diversità"

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
      h1: "Investire nell'ambiente"
  },

  {
      id: 5,
      href: "https://ir.ea.com/corporate-governance/governance-documents/default.aspx",
      h1: "Rafforzare la gestione d'impresa"
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