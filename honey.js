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
const imga=document.querySelectorAll(".imeg");
imga.forEach(img => {
    img.addEventListener("click",function click(){
        switch(a)
        {
            case 0:
        img.style.transform="scale(1.5)";
        a=1;
        img.style.zIndex="3";
        document.body.appendChild(clone);
        break
        case 1:
            img.style.transform="scale(1)";
            img.style.zIndex="1";
            a=0
            break
        }
    }
        );
})
const plus=document.querySelectorAll("#plus");
const minus = document.querySelectorAll("#minus");
const count = document.querySelectorAll("#count")
let bio=0;
let aka=0;
let peach=0;
plus.forEach(pluses=>
    {
        count.forEach(numbers=>{
            pluses.addEventListener("click",function oneup(){
                if(but.getAttribute("name")=="bio"){
                numbers.innerHTML=++bio;
                }
                if(but.getAttribute("name")=="peach"){
                numbers.innerHTML=++aka;
                }
                if(but.getAttribute("name")=="aka"){
                numbers.innerHTML=++peach;
                }
            }
        )
})
    })
let sub_a=false;
let sub_b=false;
let sub_p=false;
const buy_but=document.querySelectorAll("#button");
buy_but.forEach(but=>{
    but.addEventListener("click",function clank(){
        if(but.getAttribute("name")=="bio"){
            sub_b=true;
        }
        if(but.getAttribute("name")=="peach"){
            sub_p=true;
        }
        if(but.getAttribute("name")=="aka"){
            sub_a=true;
        }
    })
})
const cart=document.getElementById("cart");
cart.addEventListener("mouseenter",function hove(){
    
})