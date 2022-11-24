import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

// load event
var navigationItems = document.querySelectorAll(".nav-link");
addEventListener("load", (event) => {
    navigationItems.forEach(item => {
        item.style.color = "red";
    });
});

// mouseover event

const allPictures = document.querySelectorAll("img");

allPictures.forEach((picture) => {
    picture.addEventListener("mouseover", (event) => {
        picture.style.filter = "grayscale(100%)";
    });
});

// dblclik 

allPictures.forEach((picture) => {
    picture.addEventListener("dblclick", (e) => {
        picture.style.filter = "unset";
    });
});

// zoom



allPictures.forEach((picture) => {
    
    picture.addEventListener("wheel", (event) => {
        event.preventDefault();
    
        scale += event.deltaY * -0.01;
    
        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 4);
    
        // Apply scale transform
        picture.style.transform = `scale(${scale})`;        
    })  
});

    let scale = 1;


// keydown

const input = document.querySelector("input");
const log = document.querySelector("#log");
const allButtons = document.querySelectorAll(".btn");
input.addEventListener("keydown", logKey);


function logKey (e) {
    // log.textContent += `${e.code}`;
    if(e.key == 1) {
        allButtons[0].style.background = "red";
    } else if(e.key == 2) {
        allButtons[1].style.background = "red";
    } else if(e.key == 3) {
        allButtons[2].style.background = "red";
    } else if(e.key == 4) {
        allButtons.forEach(button => {
            button.style.background = "#17A2B8";
        });
    }
}

input.addEventListener("keyup", (e) => {
    if(e.key == 4){
        input.setAttribute("disabled","disabled"); 
    }
})

// focus

input.addEventListener("focus", (e) => {
    e.target.style.border = "thick solid black";
});

// resize

window.addEventListener("resize", (e) =>{
    log.textContent = window.innerWidth;
});

// select

function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  input.addEventListener('select', logSelection);