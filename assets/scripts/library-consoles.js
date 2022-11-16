const boxContent = [
    {
      id: 0,

      src1: "../../../assets/images/games/library/consoles/wild-hearts.jpg",

      logoWidth: "width: 130px",
      
      src2: "../../../assets/images/games/library/consoles/wild-hearts-logo.png",

      href1: "https://www.ea.com/it-it/games/wild-hearts/wild-hearts",

      href2: "https://help.ea.com/",

    },

    {
        id: 1,

        src1: "../../../assets/images/games/library/consoles/nhl23.jpg",

        logoWidth: "width: 130px",
        
        src2: "../../../assets/images/games/library/consoles/nhl23-game-box-logo-white.svg",

        href1: "https://www.ea.com/it-it/games/nhl/nhl-23",

        href2: "https://help.ea.com/",

    },

    {
        id: 2,

        src1: "../../../assets/images/games/library/consoles/fifa23.jpg",

        logoWidth: "width: 140px",
        
        src2: "../../../assets/images/games/library/consoles/fifa23-logo-white-stacked.svg",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-23",

        href2: "https://help.ea.com/",

    },

    {
        id: 3,

        src1: "../../../assets/images/games/library/consoles/madden-23.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/m23-gamebox-logo.svg",

        href1: "https://www.ea.com/games/madden-nfl/madden-nfl-23?setLocale=en-us",

        href2: "https://help.ea.com/",

    },

    {
        id: 4,

        src1: "../../../assets/images/games/library/consoles/f1-22.png",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/f122-gamebox-logo.png",

        href1: "https://www.ea.com/it-it/games/f1/f1-22",

        href2: "https://help.ea.com/",

    },

    {
        id: 5,

        src1: "../../../assets/images/games/library/consoles/grid-legends.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/grid-legends-logo-gamebox.png",

        href1: "https://www.ea.com/it-it/games/grid/grid-legends",

        href2: "https://help.ea.com/",

    },

    {
        id: 6,

        src1: "../../../assets/images/games/library/consoles/battlefield-2042.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/battlefield-2042-mono-logo-svg.svg",

        href1: "https://www.ea.com/it-it/games/battlefield/battlefield-2042",

        href2: "https://help.ea.com/",

    },

    {
        id: 7,

        src1: "../../../assets/images/games/library/consoles/nhl22.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/nhl22-mono-logo.png",

        href1: "https://www.ea.com/games/nhl/nhl-22?setLocale=en-us",

        href2: "https://help.ea.com/",

    },

    {
        id: 8,

        src1: "../../../assets/images/games/library/consoles/fifa22.jpg",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/fifa22-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-22",

        href2: "https://help.ea.com/",

    },

    {
        id: 9,

        src1: "../../../assets/images/games/library/consoles/lost-in-random.jpg",

        logoWidth: "width: 150px",
        
        src2: "../../../assets/images/games/library/consoles/lir-logo-mono.png",

        href1: "https://www.ea.com/it-it/games/lost-in-random",

        href2: "https://help.ea.com/",

    },

    {
        id: 10,

        src1: "../../../assets/images/games/library/consoles/madden-22.jpg",

        logoWidth: "width: 140px",
        
        src2: "../../../assets/images/games/library/consoles/madden-nfl-22-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/madden-nfl/madden-nfl-22",

        href2: "https://help.ea.com/",

    },

    {
        id: 11,

        src1: "../../../assets/images/games/library/consoles/f1-21.jpg",

        logoWidth: "width: 140px",
        
        src2: "../../../assets/images/games/library/consoles/f1-2021-mono-logo.svg",

        href1: "https://www.ea.com/it-it/games/f1/f1-2021",

        href2: "https://help.ea.com/",

    },

    {
        id: 12,

        src1: "../../../assets/images/games/library/consoles/it-takes-two.jpg",

        logoWidth: "width: 130px",
        
        src2: "../../../assets/images/games/library/consoles/it-takes-two-logo-mono.png",

        href1: "https://www.ea.com/it-it/games/it-takes-two",

        href2: "https://help.ea.com/",

    },

    {
        id: 13,

        src1: "../../../assets/images/games/library/consoles/fifa21.png",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/fifa-21-primary-stacked-white.svg",

        href1: "https://www.ea.com/it-it/games/fifa/fifa-21",

        href2: "https://help.ea.com/",

    },

    {
        id: 14,

        src1: "../../../assets/images/games/library/consoles/madden-21.png",

        logoWidth: "width: 160px",
        
        src2: "../../../assets/images/games/library/consoles/m21-logo-light.svg",

        href1: "https://www.ea.com/games/madden-nfl/madden-nfl-23?setLocale=en-us",

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