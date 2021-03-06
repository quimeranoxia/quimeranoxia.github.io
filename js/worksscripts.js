var idImg = -1;

function loadWorks () {
  for (let n = 0; n < 12; n++) {
      document.getElementById("img" + String(n)).src = thumbnail[n];
      document.getElementById("full" + String(n)).src = full[n];
  }
}

function ampliar (imgI) {
  // Y atual da página
  maintainPageY = window.pageYOffset;
  // Hides entire page
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "none";
  document.getElementById("imagemampliada").style.display = "flex";
  // Transition to black bg
  document.body.style.transition = "all 0.3s";
	document.body.style.backgroundColor = "black";
  // Displays image
  document.getElementById("full" + String(imgI)).style.transition = "all 0.3s";
  document.getElementById("full" + String(imgI)).style.display = "flex";
  // id to close
  idImg = imgI;
}

function fechar () {
  // Hides image
  document.getElementById("full" + String(idImg)).style.transition = "all 0.3s";
  document.getElementById("full" + String(idImg)).style.display = "none";
  // Displays back entire page
  document.getElementById("imagemampliada").style.display = "none";
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "inline";
  // Mantém Y da página (precisa estar nessa ordem depois das outras coisas!)
  window.scrollTo(0, maintainPageY);
  // Fade out back to the page
  document.body.style.transition = "none";
  document.body.style.backgroundColor = "transparent";
}
