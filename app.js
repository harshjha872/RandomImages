let i;
let image = document.getElementById('img');

    // image.addEventListener('click', function fun() {

    //     image.style.background = `url('${random()}.jpg') no-repeat center center/cover`;
    //     image.style.animationIterationCount = 'infinite';
    
    // });
function random(){
    return Math.floor(Math.random() * 5) + 1 ; 

}

/*  Without click and after every 2 second the image will changes  */


setInterval(function(){
image.style.background = `url('${random()}.jpg') no-repeat center center/cover`;
// image.style.animationIterationCount = 'infinite';
},1000);
















// function imagechange(name){
//     image = document.addEventListener('click');


// }
