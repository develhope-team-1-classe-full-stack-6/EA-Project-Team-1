let count = 1;
let totalFrames = 10;
let current = 1;

// Carousel counter
const decrease = document.getElementById("slider-control-prev").onclick = () => {
  if(count <= 1){
    count = 11 - count;
    document.getElementById("countLabel").innerText = count + "/10";
  } else{
    count -=1;
    document.getElementById("countLabel").innerText = count + "/10";
  }
};

const increase = document.getElementById("slider-control-next").onclick = () => {
  if(count >= 10){
    count = 1;
    document.getElementById("countLabel").innerText = count + "/10";
  } else{
    count +=1;
    document.getElementById("countLabel").innerText = count + "/10";
  }
};

// Modal Carousel & counter
const prev = document.getElementById("modal-control-prev");
prev.onclick = () => {
  current--;
  if(count <= 1 && current == 0){
    count = 11 - count;
    current = totalFrames;
    document.getElementById("countLabel-2").innerText = count + "/10";
  } else{
    count -=1;
    document.getElementById("countLabel-2").innerText = count + "/10";
  }
  for(let i = totalFrames; i > 0; i--){
    document.querySelector("#frame-slider iframe:nth-child(" + i + ")").style.display = "none";
  }
  document.querySelector("#frame-slider iframe:nth-child(" + current + ")").style.display = "block";
};

const next = document.getElementById("modal-control-next");
next.onclick = () => {
  current++;
  if(count >= 10 && current > totalFrames){
    count = 1;
    current = 1;
    document.getElementById("countLabel-2").innerText = count + "/10";
  } else{
    count +=1;
    document.getElementById("countLabel-2").innerText = count + "/10";
  }
  for(let i = totalFrames; i > 0; i--){
    document.querySelector("#frame-slider iframe:nth-child(" + i + ")").style.display = "none";
  }
  document.querySelector("#frame-slider iframe:nth-child(" + current + ")").style.display = "block";
};