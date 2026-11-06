let audio=new Audio
function Lion() {
    document.body.style.backgroundColor = "goldenrod";
    document.getElementById("icon").innerHTML = "🦁";
    document.getElementById("message").innerHTML = "Lion is here!"
    audio.pause();
    audio=new Audio('sounds/soundzee-lion-snarl-growl-354324.mp3');
    audio.play();
}
function Tiger() {
    document.body.style.backgroundColor = "orange";
    document.getElementById("icon").innerHTML = "🐯";
    document.getElementById("message").innerHTML = "Tiger is here!"
    audio.pause();
    audio=new Audio('sounds/sherimfal-tiger-light-roar-t-293716.mp3');
    audio.play();
}
function Deer() {
    document.body.style.backgroundColor = "brown";
    document.getElementById("icon").innerHTML = "🦌";
    document.getElementById("message").innerHTML = "Deer season is here!"
    audio.pause();
    audio=new Audio('sounds/dragon-studio-deer-grunt-472371.mp3');
    audio.play();
}   
function Bear() {
    document.body.style.backgroundColor = "grey";
    document.getElementById("icon").innerHTML = "🐻";
    document.getElementById("message").innerHTML = "Bear is here!"
    document.body.style.color = "white";
    audio.pause();
    audio=new Audio('sounds/universfield-bear-growl-191995.mp3');
    audio.play();
}
function Snake() {
    document.body.style.backgroundColor = "lightgreen";
    document.getElementById("icon").innerHTML = "🐍";
    document.getElementById("message").innerHTML = "Snake is here!"
    audio.pause();
    audio=new Audio('sounds/freesound_community-snake-hiss-95241.mp3');
    audio.play();
}
function Fox() {
    document.body.style.backgroundColor = "orange";
    document.getElementById("icon").innerHTML = "🦊";
    document.getElementById("message").innerHTML = "Fox is here!"
    audio.pause();
    audio=new Audio('sounds/dragon-studio-howling-wolves-515977 (1).mp3');
    audio.play();
}
function Cat() {
    document.body.style.backgroundColor = "goldenbrown";
    document.getElementById("icon").innerHTML = "🐈";
    document.getElementById("message").innerHTML = "Cat is here!"
    audio.pause();
    audio=new Audio('sounds/dragon-studio-cat-meow-401729.mp3');
    audio.play();
}
