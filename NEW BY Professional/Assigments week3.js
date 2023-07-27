// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(message, style)
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px"
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle)
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle)
//     } else {
//         console.log(message, style)
//     }
    
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
// celebrateStyler('birthday')


// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt)  
//     celebrateStyler(reason)
    
// }
// // Call styleAndCelebrate

// styleAndCelebrate('#1d5c63', '#ede6db', '40px', 'Congrats!', 'champions')




// Task 1: Code a Person class
class Person {
    constructor(name = "lada", age = 21, energy = 100) {
        this.name = "Lada1"
        this.age = 20
        this.energy = 100
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
 }
// Task 2: Code a Worker class
  class Worker extends Person{
      constructor(name = "lada2", age = 21, energy = 100,xp = 0,
          hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
      }
      
        doSomethingFun(){
            super.doSomethingFun;
        }

        sleep() {
            super.sleep;
        }

        goToWork() {
            this.xp += 10;
        }
 }
// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker();
    intern.name = "Lada3";
    intern.age = 21
    intern.energy = 110
    intern.xp = 0
    intern.hourlyWage = 10
    intern.goToWork();
    return (intern);
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker( "Lada4",30,120,100.30);
   
    manager.doSomethingFun();
    return (manager);
}

console.log(intern());
console.log(manager());
//comment