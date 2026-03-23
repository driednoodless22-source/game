let firstCard = null;
let lock = false;

function startGame(total){

const game = document.getElementById("game");
game.innerHTML = "";

let images = [
"images/เขื่อน.jpg",
"images/คู่.jpg",
"images/ดอก.jpg",
"images/ปัจ.jpg",
"images/ยิ้ม.jpg",
"images/หญ้า.jpg"
];

let selected = images.slice(0,total/2);
let cards = [...selected,...selected];

cards.sort(()=>0.5-Math.random());

cards.forEach(img=>{

let card = document.createElement("div");
card.className = "card";
card.dataset.value = img;

card.innerHTML = "?";

card.onclick = function(){
flip(card);
};

game.appendChild(card);

});

}

function flip(card){

if(lock || card.classList.contains("open")) return;

card.classList.add("open");
card.innerHTML = `<img src="${card.dataset.value}">`;

if(!firstCard){
firstCard = card;
return;
}

if(firstCard.dataset.value === card.dataset.value){

firstCard = null;

}else{

lock = true;

setTimeout(()=>{

firstCard.classList.remove("open");
card.classList.remove("open");

firstCard.innerHTML = "?";
card.innerHTML = "?";

firstCard = null;
lock = false;

},800);

}

}