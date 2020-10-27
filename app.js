let i;
let image = document.getElementById('img');
let imageleft = {"opacity":"1"};
let imageright = {"opacity":"0"};
let AnimationDuration = {"duration":2000}

    // image.addEventListener('click', function fun() {

    //     image.style.background = `url('${random()}.jpg') no-repeat center center/cover`;
    //     image.style.animationIterationCount = 'infinite';
    
    // });
function random(){
    return Math.floor(Math.random() * 17) + 1 ; 

}

/*  Without click and after every 2 second the image will changes  */


setInterval(function(){
image.style.background = `url('${random()}.jpg') no-repeat center center/cover`;
image.animate([imageleft,imageright],AnimationDuration);

},2000);
















// function imagechange(name){
//     image = document.addEventListener('click');


// }
