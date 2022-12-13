/*let bee = document.getElementById("bee");
let bee_cord=bee.getBoundingClientRect();
let cart = document.getElementById("cart");
let cart_cord=cart.getBoundingClientRect();
let buttons = document.getElementById("button_cover");
let timer= Date.now();
function timer_f(){setInterval(function()
    { 
    bee.style.right=(parseFloat(bee.style.right)+0.1)+'px';
    bee.style.top+=(parseFloat(bee.style.top)+0.1)+'px';
    if(bee_cord.top==cart_cord.top && bee_cord.right==cart_cord.right){
    clearInterval(timer);
    window.location="login.php";
    return;
    }},1)}

buttons.addEventListener("click",function() {
    bee.style.display='inline';
    let timepass=Date.now()-timer;
    timer_f(timepass);

});
*/
/*let start = Date.now();
let timer = setInterval(async function(){
    draw(timepass);
},20);

function draw(timepass){
    bee.style.left = timepass / 5 + 'px';
}*/
var a = 0;
const imga = document.querySelectorAll(".imeg");
imga.forEach(img => {
    img.addEventListener("click", function click() {
        switch (a) {
            case 0:
                img.style.transform = "scale(1.5)";
                a = 1;
                img.style.zIndex = "3";
                document.body.appendChild(clone);
                break
            case 1:
                img.style.transform = "scale(1)";
                img.style.zIndex = "1";
                a = 0
                break
        }
    });
})
let bio = 0;
let aka = 0;
let peach = 0;
const plus = document.getElementById("buy_windows")
const buy_but = document.querySelectorAll("#button");
buy_but.forEach(but => {
    but.addEventListener("click", () => {
        for (n = 1; n < 6; n += 2) {
            for (y = 1; y < 6; y += 2) {
                switch (plus.childNodes[n].childNodes[5].childNodes[y].attributes[1].value) {
                    case "count":
                        switch (n) {
                            case 1:
                                plus.childNodes[n].childNodes[5].childNodes[y].innerHTML = aka;
                            case 3:
                                plus.childNodes[n].childNodes[5].childNodes[y].innerHTML = bio;
                            case 5:
                                plus.childNodes[n].childNodes[5].childNodes[y].innerHTML = peach;
                        }
                        case "incr":
                            switch (n) {
                                case 1:
                                    aka++;
                                case 3:
                                    bio++;
                                case 5:
                                    peach++;
                            }
                        case "decr":
                                    switch (n) {
                                        case 1:
                                            aka--;
                                        case 3:
                                            bio--;
                                        case 5:
                                            peach--;
                                    }
                            
                }
            }
        }
    })
})
const cart = document.getElementById("cart");
cart.addEventListener("mouseenter", function hove() {

})