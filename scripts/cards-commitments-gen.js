const rowCard = document.getElementById("row-card");
const rowCard2 = document.getElementById("row-card-2");
const rowCard3 = document.getElementById("row-card-3");
const rowCard4 = document.getElementById("row-card-4");
const rowCard5 = document.getElementById("row-card-5");
const rowCard6 = document.getElementById("row-card-6");

const cardContent = [
    {
      id: 0,
      href: "https://www.ea.com/it-it/commitments/people-and-culture",
  
      src1: "../assets/images/commitments/ea-commitments-1.jpg",
  
      title: "Squadre di lavoro sane e all'insegna della diversità",
  
      content:
        "Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. ",
    },
  
    {
      id: 1,
      href: "https://www.ea.com/it-it/commitments/positive-play",
  
      src1: "../assets/images/commitments/ea-commitments-2.jpg",
  
      title: "Gioco positivo",
  
      content:
        "Crediamo nel potere del gioco positivo. Far parte di una community di giocatori dovrebbe essere un'esperienza positiva, divertente, equa e sicura per tutti.EA e MARVEL ENTERTAINMENT annunciano una collaborazione su più titoli per lo sviluppo di giochi d'azione e avventura",
    },
  
    {
      id: 2,
      href: "https://www.ea.com/it-it/commitments/social-impact",
  
      src1: "../assets/images/commitments/ea-commitments-3.jpg",
  
      title: "Impatto sociale",
  
      content:
        "Ci impegniamo a esercitare un impatto positivo sulle comunità in cui viviamo, giochiamo e lavoriamo.",
    },
  
    {
      id: 3,
      href: "https://www.ea.com/it-it/commitments/privacy",
  
      src1: "../assets/images/commitments/ea-commitments-4.jpg",
  
      title: "Investire nella privacy e nella sicurezza",
  
      content: `La privacy e la sicurezza sono fondamentali nelle nostre attività e nei rapporti con i nostri giocatori e dipendenti. Ci impegniamo a gestire con la massima cura le informazioni relative a tutte le parti coinvolte.`
        ,
    },
  
    {
      id: 4,
      href: "https://www.ea.com/it-it/commitments/environment",
  
      src1: "../assets/images/commitments/ea-commitments-5.jpg",

      title: "Proteggere l'ambiente",
  
      content:
        "Ci impegniamo a operare in modo sostenibile e stiamo investendo attivamente nella nostra comprensione e capacità di gestire la nostra impronta ecologica.",
    },
  
    {
      id: 5,
      href: "https://ir.ea.com/corporate-governance/governance-documents/default.aspx",
  
      src1: "../assets/images/commitments/ea-commitments-6.jpg",

      title: "Rafforza il governo societario",
  
      content:
        "Le pratiche di amministrazione aziendali ricoprono un ruolo cruciale nel nostro modo di fare business e sono fondamentali per mettere in atto le nostre strategie e le nostre iniziative di impatto.",
    },
  ];


  function colGeneratorCard(row, item, cont) {
    for (let i = 0; i < cont.length; i++) {
      row.innerHTML += item(cont[i].href, cont[i].src1, cont[i].title, cont[i].content);
    }
  }


  function card(href, src1, title, content) {
    const card = `
      <a href=${href} class="card">
              <img src=${src1} class="card-img-top" alt="${title}">
              <div class="card-body p-4">
                <h3 class="h5 title text-center text-md-start mb-2">${title}</h3>
                <p class="card-text text-dark">${content}</p>
              </div>
      </a>
    `;
    return card;
  }

  colGeneratorCard(rowCard, card, cardContent);
