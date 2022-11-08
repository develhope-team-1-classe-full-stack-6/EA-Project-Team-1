const tabGeneri = document.getElementById("tab-generi");
const tabPiattaforme = document.getElementById("tab-piattaforme");
const tabClassificazioneEtà = document.getElementById("tab-classificazione-età");
const tabModalitàDiGioco = document.getElementById("tab-modalità-di-gioco");

const piattaformeTabBtn = document.querySelector(".piattaforme-tab");
const classificazioneEtàTabBtn = document.querySelector(".classificazione-età-tab");
const modalitàDiGiocoTabBtn = document.querySelector(".modalità-di-gioco-tab");

const cardContentGeneri = [
    {
        id: 0,
        href: "https://www.ea.com/it-it/games/library/action",
        title: "Azione",
    },
    {
        id: 1,
        href: "https://www.ea.com/it-it/games/library/adventure",
        title: "Avventura",
    },
    {
        id: 2,
        href: "https://www.ea.com/it-it/games/library/family",
        title: "Famiglia",
    },
    {
        id: 3,
        href: "https://www.ea.com/it-it/games/library/fantasy",
        title: "Fantasy",
    },
    {
        id: 4,
        href: "https://www.ea.com/it-it/games/library/horror",
        title: "Horror",
    },
    {
        id: 5,
        href: "https://www.ea.com/it-it/games/library/mmorpg",
        title: "MMORPG",
    },
    {
        id: 6,
        href: "https://www.ea.com/it-it/games/library/music",
        title: "Musica",
    },
    {
        id: 7,
        href: "https://www.ea.com/it-it/games/library/platform-games",
        title: "Giochi Platform",
    },
    {
        id: 8,
        href: "https://www.ea.com/it-it/games/library/puzzle",
        title: "Rompicapo",
    },
    {
        id: 9,
        href: "https://www.ea.com/it-it/games/library/racing",
        title: "Corse",
    },
    {
        id: 10,
        href: "https://www.ea.com/it-it/games/library/rpg",
        title: "Giochi di Ruolo",
    },
    {
        id: 11,
        href: "https://www.ea.com/it-it/games/library/shooter",
        title: "Sparatutto",
    },
    {
        id: 12,
        href: "https://www.ea.com/it-it/games/library/simulation",
        title: "Simulazione",
    },
    {
        id: 13,
        href: "https://www.ea.com/it-it/games/library/sports",
        title: "Sport",
    },
    {
        id: 14,
        href: "https://www.ea.com/it-it/games/library/strategy",
        title: "Strategia",
    },
];

function colGeneratorCard(row, item, cont) {
    for (let i = 0; i < cont.length; i++) {
        row.innerHTML += item(cont[i].href, cont[i].title);
    }
};

function card(href, title) {
    const card = `
    <a href="${href}" class="card">
    <div class="h3-container">
    <h3>${title}</h3>
    <img class="arrow" src="../assets/images/arrow-card-libreria-giochi.svg" alt="arrow">
    </div>
    <img
    src="../assets/images/background-card-libreria-giochi.png"
    class="card-img-top"
    alt="grey-background"
    />
    <div class="card-body p-4">
    <h3 class="h5 title text-center text-md-start mb-2">
    ${title}
    </h3>
    </div>
    </a>
    `;
    return card;
}
colGeneratorCard(tabGeneri, card, cardContentGeneri);

piattaformeTabBtn.addEventListener("click", () => {
    const cardContentPiattaforme = [
        {
            id: 0,
            href: "https://www.ea.com/it-it/games/library/xbox-series-x",
            src: "../assets/images/xbox-seres-x-transparent-background-card-platforms-libreria-giochi.png",
            title: "Xbox Series X",
        },
        {
            id: 1,
            href: "https://www.ea.com/it-it/games/library/ps5",
            src: "../assets/images/ps5-transparent-background-card-platforms-libreria-giochi.png",
            title: "PlayStation 5",
        },
        {
            id: 2,
            href: "https://www.ea.com/it-it/games/library/pc-download",
            src: "../assets/images/pc-transparent-background-card-platforms-libreria-giochi.png",
            title: "Scaricabile per PC",
        },
        {
            id: 3,
            href: "https://www.ea.com/it-it/games/library/xbox-one",
            src: "../assets/images/xbox-one-transparent-background-card-platforms-libreria-giochi.png",
            title: "Xbox One",
        },
        {
            id: 4,
            href: "https://www.ea.com/it-it/games/library/ps4",
            src: "../assets/images/ps4-transparent-background-card-platforms-libreria-giochi.png",
            title: "PlayStation 4",
        },
        {
            id: 5,
            href: "https://www.ea.com/it-it/games/library/nintendo-switch",
            src: "../assets/images/nintendo-switch-transparent-background-card-platforms-libreria-giochi.png",
            title: "Nintendo Switch<sup>tm</sup>",
        },
        {
            id: 6,
            href: "https://www.ea.com/it-it/games/library/nintendo-wii-u",
            src: "../assets/images/wii-u-transparent-background-card-platforms-libreria-giochi.png",
            title: "Nintendo Wii U",
        },
        {
            id: 7,
            href: "https://www.ea.com/it-it/games/library/mobile",
            src: "../assets/images/mobile-transparent-background-card-platforms-libreria-giochi.png",
            title: "Cellulari",
        },
        {
            id: 8,
            href: "https://www.ea.com/it-it/games/library/nintendo-3ds",
            src: "../assets/images/nintendo-3ds-transparent-background-card-platforms-libreria-giochi.png",
            title: "Nintendo 3DS",
        },
        {
            id: 9,
            href: "https://www.ea.com/it-it/games/library/playstation-vita",
            src: "../assets/images/ps-vita-transparent-background-card-platforms-libreria-giochi.png",
            title: "PS Vita",
        },
        {
            id: 10,
            href: "https://www.ea.com/it-it/games/library/mac-download",
            src: "../assets/images/best-laptop-and-smartphone-brand-transparent-background-card-platforms-libreria-giochi.png",
            title: "Download per Mac",
        },
        {
            id: 11,
            href: "https://www.ea.com/it-it/games/library/xbox-360",
            src: "../assets/images/xbox360-transparent-background-card-platforms-libreria-giochi.png",
            title: "Xbox360",
        },
        {
            id: 12,
            href: "https://www.ea.com/it-it/games/library/ps3",
            src: "../assets/images/ps3-transparent-background-card-platforms-libreria-giochi.png",
            title: "PlayStation 3",
        },
        {
            id: 13,
            href: "https://www.ea.com/it-it/games/library/psp",
            src: "../assets/images/psp-transparent-background-card-platforms-libreria-giochi.png",
            title: "PSP(PlaystationPortable)",
        },
        {
            id: 14,
            href: "https://www.ea.com/it-it/games/library/ps2",
            src: "../assets/images/ps2-transparent-background-card-platforms-libreria-giochi.png",
            title: "PlayStation 2",
        },
        {
            id: 15,
            href: "https://www.ea.com/it-it/games/library/facebook",
            src: "../assets/images/facebook-transparent-background-card-platforms-libreria-giochi.png",
            title: "Facebook",
        },
        {
            id: 16,
            href: "https://www.ea.com/it-it/games/library/online",
            src: "../assets/images/network-transparent-background-card-platforms-libreria-giochi.png",
            title: "Online",
        },
    ];

    function colGeneratorCard(row, item, cont) {
        for (let i = 0; i < cont.length; i++) {
        row.innerHTML += item(cont[i].href, cont[i].src, cont[i].title);
        }
    };

    function cardPiattaforme(href, src, title) {
        const cardPiattaforme = `
        <a href=${href} class="card">
            <img
            src="${src}"
            class="card-img-top"
            alt="${title}"
            />
            <div class="card-body p-4">
                <h3 class="h5 title text-center text-md-center mb-2">
                    ${title}
                </h3>
            </div>
        </a>
        `;
    return cardPiattaforme;
};
colGeneratorCard(tabPiattaforme, cardPiattaforme, cardContentPiattaforme);
}, {once:true});

classificazioneEtàTabBtn.addEventListener("click", () =>{
    const cardContentClassificazioneEtà = [
        {
            id: 0,
            href:"https://www.ea.com/it-it/games/base-games?/filter/ratingCategory=pegi-3",
            title: "PEGI 3",
        },
        {
            id: 1,
            href:"https://www.ea.com/it-it/games/base-games?/filter/ratingCategory=pegi-7",
            title: "PEGI 7",
        },
        {
            id: 2,
            href:"https://www.ea.com/it-it/games/base-games?/filter/ratingCategory=pegi-12",
            title: "PEGI 12",
        },
        {
            id: 3,
            href:"https://www.ea.com/it-it/games/base-games?/filter/ratingCategory=pegi-16",
            title: "PEGI 16",
        },
    ];
    function colGeneratorCard(row, item, cont) {
        for (let i = 0; i < cont.length; i++) {
            row.innerHTML += item(cont[i].href, cont[i].title);
        }
    };

    function card(href, title) {
        const card = `
        <a href="${href}" class="card">
        <div class="h3-container">
            <h3>${title}</h3>
            <img class="arrow" src="../assets/images/arrow-card-libreria-giochi.svg" alt="arrow">
        </div>
        <img
            src="../assets/images/background-card-libreria-giochi.png"
            class="card-img-top"
            alt="grey-background"
        />
        <div class="card-body p-4">
            <h3 class="h5 title text-center text-md-start mb-2">
            ${title}
            </h3>
        </div>
        </a>
        `;
        return card;
    };

    colGeneratorCard(tabClassificazioneEtà, card, cardContentClassificazioneEtà);
}, {once:true});

modalitàDiGiocoTabBtn.addEventListener("click", () =>{
    const cardContentModalitàDiGioco = [
        {
            id: 0,
            href:"https://www.ea.com/it-it/games/library/freetoplay",
            title: "Gratis",
        },
        {
            id: 1,
            href:"https://www.ea.com/it-it/games/library/multiplayer",
            title: "Multigiocatore",
        },
        {
            id: 2,
            href:"https://www.ea.com/it-it/games/library/singleplayer",
            title: "Giocatore Singolo",
        },
    ];
    function colGeneratorCard(row, item, cont) {
        for (let i = 0; i < cont.length; i++) {
            row.innerHTML += item(cont[i].href, cont[i].title);
        }
    };

    function card(href, title) {
        const card = `
        <a href="${href}" class="card">
        <div class="h3-container">
            <h3>${title}</h3>
            <img class="arrow" src="../assets/images/arrow-card-libreria-giochi.svg" alt="arrow">
        </div>
        <img
            src="../assets/images/background-card-libreria-giochi.png"
            class="card-img-top"
            alt="grey-background"
        />
        <div class="card-body p-4">
            <h3 class="h5 title text-center text-md-start mb-2">
            ${title}
            </h3>
        </div>
        </a>
        `;
        return card;
    };
    colGeneratorCard(tabModalitàDiGioco, card, cardContentModalitàDiGioco);
}, {once:true});
