let bee = document.getElementById("bee");
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

/*let start = Date.now();
let timer = setInterval(async function(){
    draw(timepass);
},20);

function draw(timepass){
    bee.style.left = timepass / 5 + 'px';
}*/
