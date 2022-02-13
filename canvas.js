var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

let mouse = {
    x:undefined,
    y:undefined
}

function lol() {
    // let col = ['red', 'pink', 'blue', 'yellow', 'purple', 'brown'];
    let col = ['#353D40', '#D9D9D9', '#A1A5A6', '#F2B138', '#003F63'];
    let ran = Math.random() * 6;
    let ok = Math.round(ran);
    //console.log(ok);
    let ye = col[ok];
    return ye;
}

// Line
// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(50,50);
// c.lineTo(100,200);
// c.strokeStyle = 'blue';
// c.stroke();

function OneOrTwo() {
    let col = ['+','-','+','+'];
    let ran = Math.random() * 3;
    let ok = Math.round(ran);
    // console.log(ok)
    let ye = col[ok];
    return ye;

}
// console.log(OneOrTwo())
//ignore the below code
// function rect(x,y,w,h) {
//     c.beginPath();
//     c.fillRect(x,y,w,h)
//     c.clearRect(x+10,y+10,w-20,h-20)
//     let angle = Math.random() * 90;
//     // c.rotate(angle)
// }

// let w = 60//Math.random() * 50;
// let h = 60//Math.random() * 50;
let ran = [];

window.addEventListener('mousemove', function (event) {
    let ye = lol();
    // c.fillStyle = ye;
    let co = getRandomColor();
    c.fillStyle = co;
    c.strokeStyle = co;
    let xo = Math.random() * 30;
    let yo = Math.random() * 30;
    ran.pop()
    ran.pop()
    ran.push(xo)
    ran.push(yo)
    // console.log(ran)
    // console.log(pp(xo,yo));
    mouse.x = event.x;
    mouse.y = event.y;
    make()
    // console.log(make().rect)
    // rect(x,y,w,h)

})


function make(){
    requestAnimationFrame(make);
    // c.clearRect(0,0,innerWidth,innerHeight)
    lastD();
     
}

let w = 20//Math.random() * 50;
let h = 20//Math.random() * 50;
// let xx = Math.random() * 30;
// let yy = Math.random() * 30;
// let x = mouse.x + xx;
// let y = mouse.y + yy;
// console.log(x)
// console.log(mouse.x)


function theRect() {
    // let w = 10//Math.random() * 50;
    // let h = 10//Math.random() * 50;
    // let xx = Math.random() * 30;
    // let yy = Math.random() * 30;

    //console.log(x)
    lastD()

}

let rectArray = [];

function lastD() {
    rectArray=[]
    for (let i = 0; i < 5; i++) {
        let xx = ran[0];
        let yy = ran[1];
        // console.log(ran)
        // let r = Math.floor().Math.random()*2;
        // console.log(r)
        let x = mouse.x;
        let y = mouse.y;
        // rectArray.push(new Rectangle(x,y,w,h));
        let rect = new Rectangle(x,y,w,h);
        rect.update();
        
    }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function Rectangle(x ,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.draw = function() {
        // c.fillRect(x,y,w,h)
        lines(x, y);
        // c.clearRect(x+20,y+20,w-20,h-20)
    
        // let angle = 100//Math.random() * 90;
        // c.rotate(angle)
    }

    this.update = function() {
    
        
        
        
    

        this.draw();
    }
    
}

window.addEventListener('click',() => {
    window.location.reload();
})

window.addEventListener('resize',function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

window.addEventListener('mousemove',function() {
    canvas.style.backgroundColor = getRandomColor();
})


function lines(x, y) {
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(x, y);
    // c.lineTo(100,200);
    c.lineTo(innerWidth, innerHeight);
    c.lineTo(x, y);
    c.lineTo(0, innerHeight);
    c.lineTo(x, y);
    c.lineTo(innerWidth, 0);
    // c.strokeStyle = ye;
    c.stroke();
}


// c.fillStyle = 'pink';
// c.fillRect( 200, 300, 10, 10);
// c.fillRect( 200, 200, 10, 10);
// c.fillStyle = 'yellow';
// c.fillRect( 100, 400, 10, 10,);
// c.clearRect(0,0,innerWidth,innerHeight)
// c.fillRect( 300, 400, 10, 10);
// c.fillRect( 200, 110, 10, 10);



// let rect = new Rectangle(mouse.x ,mouse.y ,10,10)
// console.log(rect)

// function animate() {
//     requestAnimationFrame(animate)
//     let rect = new Rectangle(100 ,100 ,10,10)
// }

// animate()

