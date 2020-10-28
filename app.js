const img = document.getElementById('image');
const btn = document.getElementById('button');
let moveright = {
    opacity: "1"
};
let moved = {
    opacity: "0"
}
let animationduration = {
    "duration": 1000
}
let fade1 = {
    opacity: "1"
};
let fade2 = {
    opacity: "0"
}
btn.addEventListener('click', () => { 
    img.style.display = "block";
    img.animate([moved, moveright], animationduration).onfinish = fadeout;
});
// let nextImage = () => {
//     img.style.left = 0;
//     // if(img.style.left == 0){
//     //     img.animate([fade1,fade2],animationduration);
//     // }
//     img.style.background = `url('3.jpg') no-repeat center center/cover`
//     img.animate([fade2,fade1],animationduration);
//     // if(btn.addEventListener('click')){
//     //     img.animate([moveright,moved],animationduration);
//     // }
// }
let fadeinNext = () => {
    let fade3 = {
        opacity: "0"
    }
    let fade4 = {
        opacity: "1"
    }
    let Animeduration = {
        "duration": 1000
    }
    img.style.left = 0;
    img.style.background = `url('${random()}.jpg') no-repeat center center/cover`;
    img.animate([fade3, fade4], Animeduration).onfinish = fadeout;
}
let fadeout = () => {
    let fade5 = {
        opacity: "0"
    }
    let fade6 = {
        opacity: "1"
    }
    let Animeduration = {
        "duration": 1000
    }
    img.animate([fade6, fade5], Animeduration).onfinish = fadeinNext;

}
function random() {
    return Math.floor(Math.random() * 17) + 1;

}

// let MyImages = new Array();
// for (let i = 0; i < 18; i++) {
//     MyImages[i] = i + 1;
//     function NumberReturn() {
//         return MyImages[i];
//     }
// };
