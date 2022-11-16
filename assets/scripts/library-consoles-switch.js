const boxContent = [
    {
      id: 0,

      src1: "../../../assets/images/games/library/consoles/lost-in-random.jpg",

        logoWidth: "width: 150px",
        
        src2: "../../../assets/images/games/library/consoles/lir-logo-mono.png",

        href1: "https://www.ea.com/it-it/games/lost-in-random",

        href2: "https://help.ea.com/",

    },

    {
        id: 1,

        src1: "../../../assets/images/games/library/consoles/nfs.jpg",

        logoWidth: "width: 150px",
        
        src2: "../../../assets/images/games/library/consoles/nfshpr-logo-white.png",

        href1: "https://www.ea.com/it-it/games/need-for-speed/need-for-speed-hot-pursuit-remastered",

        href2: "https://help.ea.com/",

    },

    {
        id: 2,

        src1: "../../../assets/images/games/library/consoles/fifa21.png",

        logoWidth: "width: 140px",
        
        src2: "../../../assets/images/games/library/consoles/fifa-21-primary-stacked-white.svg",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-21",

        href2: "https://help.ea.com/",

    },

    {
        id: 3,

        src1: "../../../assets/images/games/library/consoles/plants-vs-zombies.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/plants-vs-zombies-battle-for-neighborville-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/plants-vs-zombies/plants-vs-zombies-battle-for-neighborville",

        href2: "https://help.ea.com/",

    },

    {
        id: 4,

        src1: "../../../assets/images/games/library/consoles/fifa-20.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/fifa20-logo-primary-vertical.svg",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-22",

        href2: "https://help.ea.com/",

    },

    {
        id: 5,

        src1: "../../../assets/images/games/library/consoles/apex-legends.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/apex-legends-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/apex-legends",

        href2: "https://help.ea.com/",

    },

    {
        id: 6,

        src1: "../../../assets/images/games/library/consoles/fifa-19.jpg",

        logoWidth: "width: 180px",
        
        src2: "../../../assets/images/games/library/consoles/fifa-19-mono-logo.png",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-22",

        href2: "https://help.ea.com/",

    },

    {
        id: 7,

        src1: "../../../assets/images/games/library/consoles/unravel-two.jpg",

        logoWidth: "width: 170px",
        
        src2: "../../../assets/images/games/library/consoles/unravel-2-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/unravel/unravel-two",

        href2: "https://help.ea.com/",

    },

    {
        id: 8,

        src1: "../../../assets/images/games/library/consoles/burnout-paradise.jpg",

        logoWidth: "width: 200px",
        
        src2: "../../../assets/images/games/library/consoles/burnout-paradise-remastered-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/burnout/burnout-paradise-remastered",

        href2: "https://help.ea.com/",

    },

    {
        id: 9,

        src1: "../../../assets/images/games/library/consoles/fe.jpg",

        logoWidth: "width: 60px",
        
        src2: "../../../assets/images/games/library/consoles/fe-mono-logo.png",

        href1: "https://www.ea.com/it-it/games/fe",

        href2: "https://help.ea.com/",

    },

    {
        id: 10,

        src1: "../../../assets/images/games/library/consoles/fifa-18.jpg",

        logoWidth: "width: 170px",
        
        src2: "../../../assets/images/games/library/consoles/fifa-18-mono-logo.png",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-23",

        href2: "https://help.ea.com/",

    }];

    const row = document.getElementById('ps5-row');

    function colGenerator(item, cont) {
        for (let i = 0; i < cont.length; i++) {
          row.innerHTML += `<div class="box col-12 col-md-6 col-xl-4 pb-4">
        ${item(cont[i].src1, cont[i].logoWidth, cont[i].src2, cont[i].href1, cont[i].href2)}
        </div>`;
        }
      }


      function box(src1, logoWidth, src2, href1, href2) {
        const box = `
          <div class="position-relative d-flex justify-content-center align-items-center box-container-blue">
              <img class="position-absolute top-0 start-0 box-background"
                  src=${src1}>
              <img class="position-absolute box-logo" style="${logoWidth}; transition: all 300ms ease-out;"
                  src=${src2}>
              <div class="position-absolute text-center">
                  <a href=${href1}>Sito ufficiale</a>
                  <a href=${href2} class="b3">Supporto</a>
              </div>
          </div>
      `;
      
        return box;
      }
      
      colGenerator(box, boxContent);