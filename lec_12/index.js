let bpx = document.getElementById("box")
let genbtn = document.getElementById("btn")
let stopbtn=document.getElementById("stop")
let colors = ["red", "yellow", "blue", "pink", "green", "black", "grey", "purple"]
function randomColor(){
    let index = Math.floor(Math.random()*10)
    let color = colors[index]
    return color
}

genbtn.addEventListener("click", function(){
    let color = randomColor();
    box.style.background=color;


    setInterval(()=>{
        let color = random
    }
)

})