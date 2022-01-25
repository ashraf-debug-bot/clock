

function navLinks(){
    var burger =document.querySelector('.burger');
    var nav =document.querySelector('.nav-links');

     burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            //burger animation 
            burger.classList.toggle('toggle');


        });
    
     
}
navLinks();

function changeBg(){
    var navbar=document.getElementById('navbarNav');
    var scrollValue=window.scrollY;

    if (scrollValue <10){

        navbar.classList.remove('bgcolor');
        
    }else{
        navbar.classList.add('bgcolor');
    }
}
window.addEventListener('scroll',changeBg);


var a;
var date;
var timeJs;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(()=>{
    a = new Date();
    date =a.toLocaleDateString(undefined,options);
    timeJs =a.getHours() + ':' + a.getMinutes() +':'+a.getSeconds();
    document.getElementById('time').innerHTML=date +" "+ " time "+ timeJs;
    
    
},1000);
