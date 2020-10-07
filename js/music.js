window.addEventListener('load',() => {
    const sounds = document.querySelectorAll(".sound");  // get all the sounds
    const keys = document.querySelectorAll(".keys div"); // all the divs inside of keys
    const visual = document.querySelector(".visual"); // selects the visual div 
    const body = document.querySelector("body");
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "aqua",
        "#8a2be2"
    ];

    const body_colors = [
        "#e02856",
        "#5edf94",
        "#1cbfd4",
        "#ddc163",
        "#76ccee",
        "#ee76da"
    ];

    // lets get going with the sound
    keys.forEach((key,index) => {    
        key.addEventListener('click', function(){
            sounds[index].currentTime = 0;  // this helps us to play multiple times continuously
            sounds[index].play();

            create_bubbles(index);
        })
    }) 

    // function for bubbles
    const create_bubbles =  (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        body.style.backgroundColor = body_colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }


})