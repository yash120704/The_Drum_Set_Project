var allButtons = document.querySelectorAll(".drum");
for(let i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener("click",function () {
        var butName = this.innerHTML;
        sound(butName);
        animation(butName);
    });    
}
document.addEventListener("keypress",function (event) {
    var key = event.key;
    sound(key);
    animation(key);
});
function sound(pressed){
    switch (pressed) {
        case 'w':
            var audio = new Audio("./sounds/aud-0.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/aud-1.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/aud-2.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/aud-3.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/aud-4.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/aud-5.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/aud-6.mp3");
            audio.play();
            break;
        default:
            break;
    } 
}
function animation(key){
    var letter = document.querySelector("."+key).classList;
    letter.toggle("pressed");
    setTimeout(function () {
        letter.toggle("pressed");
    },500);
}