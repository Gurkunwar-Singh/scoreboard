let home=document.getElementById("home");
let guest=document.getElementById("guest");
let count=0;
let count2=0;
console.log(home.innertext);
function one(){
  count++;
  home.textContent=count;
}
function two(){
  count+=2;
  home.textContent=count;
}
function three(){
  count+=3;
  home.textContent=count;
}
function one1(){
  count2++;
 guest.textContent=count2;
}
function two2(){
  count2+=2;
 guest.textContent=count2;
}
function three3(){
  count2+=3;
  guest.textContent=count2;
}