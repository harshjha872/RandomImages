const img = document.getElementById('image');
const btn = document.getElementById('button');
let moveright = { opacity: "1" };
let moved = { opacity: "0" };
let animationduration = { "duration": 1000 };
let fade1 = { opacity: "1" };
let fade2 = { opacity: "0" };


btn.addEventListener('click', () => {
    img.style.display = "block";
    img.animate([moved, moveright], animationduration).onfinish = fadeout;
});


let fadeinNext = () => {
    let fade3 = { opacity: "0" };
    let fade4 = { opacity: "1" };
    let Animeduration = { "duration": 1000 }
    img.style.background = `url('${random()}.jpg') no-repeat center center/cover`;
    img.animate([fade3, fade4], Animeduration).onfinish = fadeout;
}


let fadeout = () => {
    let fade5 = { opacity: "0" };
    let fade6 = { opacity: "1" };
    let Animeduration = { "duration": 500 }
    img.animate([fade6, fade5], Animeduration).onfinish = fadeinNext;

}


function random() {
    return Math.floor(Math.random() * 17) + 1;

}


