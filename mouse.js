
let fmContainer = document.querySelectorAll(".fm__container");

if(fmContainer)
fmContainer.forEach(c => {
    let p = c.querySelector('.fm__target')
    let x,y;

    c.addEventListener('mousemove', (e)=> {
        x = (e.pageX - (p.offsetWidth/2 )) * -0.1
        y = (e.pageY - (p.offsetHeight/2 )) * -0.1
        p.style.transform = `scale(1.2) translate(${x}px,${y}px)`
    })
});


let xaxis = document.getElementById('xaxis')
let yaxis = document.getElementById('yaxis')
let zaxis = document.getElementById('zaxis')

let p = document.querySelectorAll('.fm__target')
let x,y;

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha    = event.alpha;
    const beta     = event.beta;
    const gamma    = event.gamma;
  
    xaxis.textContent =  gamma *2| 0
    yaxis.textContent = beta *2| 0
    zaxis.textContent = gamma | 0


    p.forEach(t => {
        x = gamma *2| 0
        y = beta *2| 0
        t.style.transform = `scale(1.5) translate(${x}px,${y}px)`
    });  
}


//https is needed to work
/*
let gyroscope = new Gyroscope({frequency: 60});
let p = document.querySelectorAll('.fm__target')
let x,y;
gyroscope.addEventListener('reading', (e) => {


    
    p.forEach(t => {
        x = gyroscope.y * -50 | 0
        y = gyroscope.x * -50 | 0
        t.style.transform = `scale(1.2) translate(${x}px,${y}px)`
    });  
});
gyroscope.start();
*/