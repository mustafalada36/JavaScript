// const target = document.querySelector('body')
// function onclick(){
//     console.log("clicked the body");
// }
// target.addEventListener(onclick);


// For example

let target1 = prompt("What is Your Name");
if (typeof(target1) === 'String'){
    var h1 = document.createElement('h1');
    h1.innerText = target1;
    document.body.innerText = '';
    document.body.appendChild(h1);
}


//test
var h1 = document.querySelector('h1');
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

h1.addEventListener('click', handleClicks);