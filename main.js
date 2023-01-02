const copy = document.querySelector(".copy");
const password = document.querySelector(".password span");
const lengthNumber = document.querySelector(".length-number");
const lengthBar = document.querySelector(".length-bar");
const point = document.querySelector(".point");
const level = document.querySelector(".level span");
const levelBoxes = document.querySelectorAll(".level div");
const generateButton = document.querySelector("#generate-button");


const charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
const charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsetNumbers = "0123456789";
const charsetSymbols = "€$*&#!@%";
let allCharsets = "";

const selectRandomChar = (charset) => {
  let randomVal = charset[Math.floor(Math.random() * charset.length)];
  return randomVal;
};

function passwordGenerator() {
  let featuredPassword = "";
  let includeUpper = document.querySelector("#includeUppercase").checked;
  let includeLower = document.querySelector("#includeLowercase").checked;
  let includeNumbers = document.querySelector("#includeNumbers").checked;
  let includeSymbols = document.querySelector("#includeSymbols").checked;
  if (includeUpper) {
    let selectedChar = selectRandomChar(charsetUppercase);
    featuredPassword += selectedChar;
    allCharsets += charsetUppercase;
  }
  if (includeLower) {
    let selectedChar = selectRandomChar(charsetLowercase);
    featuredPassword += selectedChar;
    allCharsets += charsetLowercase;
  }
  if (includeNumbers) {
    let selectedChar = selectRandomChar(charsetNumbers);
    featuredPassword += selectedChar;
    allCharsets += charsetNumbers;
  }
  if (includeSymbols) {
    let selectedChar = selectRandomChar(charsetSymbols);
    featuredPassword += selectedChar;
    allCharsets += charsetSymbols;
  }
  for (let i = featuredPassword.length; i <= lengthNumber.innerHTML; i++) {
    featuredPassword += selectRandomChar(allCharsets);
  }
  allCharsets = "";
 
  return featuredPassword;
 
}

const properties = document.querySelector(".properties");

properties.addEventListener("input", () => {
  let checkBoxes = document.querySelectorAll(".properties input");
  generateButton.setAttribute("disabled", "disabled");

  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked === true) {
      generateButton.removeAttribute("disabled");
    }
  }
});

generateButton.addEventListener("click", () => {
  password.innerHTML = passwordGenerator();
});



lengthBar.addEventListener("click", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  point.style.left = `${x}px`;
  let lengthLevel = document.querySelector(".length-level")
  lengthLevel.classList.remove("d-none")
  lengthLevel.style.backgroundColor = "aquamarine"
  lengthLevel.style.width = `${e.offsetX}px`
  lengthLevel.style.height = "5px"

  if (x <= 611) {
    lengthNumber.innerHTML = 5;
    level.innerHTML = "Easy"
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.remove("strength-color")
      
    }
    for (let i = 0; i < 1; i++) {
      levelBoxes[i].classList.add("strength-color")
      
    }
    return;
  }
 
  if (x <= 653) {
    lengthNumber.innerHTML = 8;
    level.innerHTML = "Easy"
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.remove("strength-color")
      
    }
    for (let i = 0; i < 1; i++) {
      levelBoxes[i].classList.add("strength-color")
      
    }
    return;
  }

  if (x <= 692) {
    lengthNumber.innerHTML = 10;
    level.innerHTML = "Medium"
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.remove("strength-color")
      
    }
    for (let i = 0; i < 2; i++) {
      levelBoxes[i].classList.add("strength-color")
      
    }
    return;
  }
 
  if (x <= 735) {
    lengthNumber.innerHTML = 12;
    level.innerHTML = "Normal"
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.remove("strength-color")
      
    }
    for (let i = 0; i < 3; i++) {
      levelBoxes[i].classList.add("strength-color")
      
    }
    return;
  }
  
  if (x <= 777) {
    lengthNumber.innerHTML = 15;
    level.innerHTML = "Hard"
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.remove("strength-color")
      
    }
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.add("strength-color")
      
    }
    return;
  }

  if (x <= 800) {
    lengthNumber.innerHTML = 18;
    level.innerHTML = "Hard"
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.remove("strength-color")
      
    }
    for (let i = 0; i < levelBoxes.length; i++) {
      levelBoxes[i].classList.add("strength-color")
      
    }
    return;
  }
 
});


copy.addEventListener("click" , () =>{
  navigator.clipboard.writeText(password.innerHTML)
})





