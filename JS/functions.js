let menuVisible = false;

function mostrarOcultarMenu(){
  if(menuVisible){
    document.getElementById("nav").classList = "";
    menuVisible = false;
  }
  else{
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar(){
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("analogicas");
    habilidades[1].classList.add("digitales");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("granangular");
    habilidades[4].classList.add("organizacion");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("creatividad");
    habilidades[7].classList.add("innovacion");
  }
}

window.onscroll = function(){
  efectoHabilidades();
}