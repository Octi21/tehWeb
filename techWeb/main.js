const servicii = [
    {
        id: 1,
        titlu: "Mecanica",
        par1: "REVIZII – Filtre (aer,ulei,combustibil, polen) si Ulei, Lichide Racire / Ungere", 
        par2: "FRANE – Placute si Discuri de Frana, Saboti si Cilindrii de frana, ABS Senzori",
    },
    {
        id: 2,
        titlu: "Electrica",
        par1: "PORNIRE MOTOR – Electromotor, Bendix, Bujii Scanteie / Incandescente, Contacte", 
        par2: "BATERII-INCARCARE – Acumulator, Alternator, Releu incarcare, Sigurante",
    },
    {
        id: 3,
        titlu: "Geometrie",
        par1: "SERVICE ROTI – Inlocuiri – Anvelope vara-iarna-all seasons, Jante, Valve, Echilibrari", 
        par2: "GEOMETRIE ROTI 3D – Verificare si Reglare Geometrie roti cu aparat HUNTER de ultima generatie 3D cu camere video de inalta rezolutie pentu orice tip de autovehicul",
    },

];
var width = window.innerWidth;
if(width < 850) {
    delete servicii[2].par2;
}
const h3 = document.getElementById("h3");
const p11 = document.getElementById("p11");
const p22 = document.getElementById("p22");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currItem  = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = servicii[currItem];
    h3.textContent = item.titlu;
    p11.textContent = item.par1;
    p22.textContent = item.par2;
});

function showPerson(person) {
    const item = servicii[person];
    h3.textContent = item.titlu;
    p11.textContent = item.par1;
    p22.textContent = item.par2;
}

nextBtn.addEventListener("click", function () {
    currItem++;
    if (currItem > servicii.length - 1) {
        currItem = 0;
    }
    showPerson(currItem);
});

prevBtn.addEventListener("click", function () {
    currItem--;
    if (currItem < 0) {
        currItem = servicii.length - 1;
    }
    showPerson(currItem);
  });

randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currItem = Math.floor(Math.random() * servicii.length);
    showPerson(currItem);
});  



// search bar

var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var search = form.querySelector("input[type=search]");
    var str1 = "service auto ";
    search.value = str1.concat(search.value);
    //  search.value = "service auto " + search.value;
     form.submit();
});



// schimba culoare 

const colors = ["white", "violet", "rgba(133,122,200)", "grey"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// radio btn

function ghe() {
    if (document.getElementById("no").checked)
    {
        localStorage.setItem("ok","no");
    }
}

// settimeout 

//localStorage.setItem("ok","no");
var ok = localStorage.getItem("ok");
if (ok != "yes"){
    setTimeout(function(){ alert("Doriti sa primiti cookie-uri"); }, 2000);
    //ok = 1;
    localStorage.setItem("ok","yes")
    ok = localStorage.getItem("ok");
}

// setinterval 

setInterval(function(){ alert("Mai sunteti la calculator?"); }, 600000);


// checkbox

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

// create   ,  classlist


function fFot() {
    var width = window.innerWidth;
    if(width > 850) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Interf pt PC";
    var element = document.getElementById("similar");
    element.appendChild(btn);
    document.getElementById("footr").classList.add("prop1", "prop2");
  }
}
  