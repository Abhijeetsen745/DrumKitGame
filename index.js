//detecting clicks

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

//detecting keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//making sound
function makeSound(key){
    switch (key) {
        case 'w':
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
    case 'a':
        var audio=new Audio("./sounds/tom-2.mp3");
        audio.play();break;
        case 's':
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();break;
            case 'd':
                var audio=new Audio("./sounds/tom-4.mp3");
                audio.play();break;
                case 'j':
                    var audio=new Audio("./sounds/snare.mp3");
                    audio.play();break;
                    case 'k':
                        var audio=new Audio("./sounds/kick-bass.mp3");
                        audio.play();break;
                        case 'l':
                            var audio=new Audio("./sounds/crash.mp3");
                            audio.play();break;
        default:alert("you are pressing wrong button!!");
            break;
    }
}

//giving some animations
function buttonAnimation(curkey){
    var activeButton=document.querySelector("."+curkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150)
}

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("keypress",function(event){
//         var buttonInnerHtml=event.key;
//           switch(buttonInnerHtml){
//             case "w":var audio = new Audio("./sounds/crash.mp3");
//             audio.play();break;
//             case "a":var audio = new Audio("./sounds/snare.mp3");
//             audio.play();break;
//             case "s":var audio = new Audio("./sounds/tom-1.mp3");
//             audio.play();break;
//           }
//     })
// }