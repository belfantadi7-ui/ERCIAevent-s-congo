/*==================================================
            ERCIA EVENTS
            SCRIPT JAVASCRIPT
==================================================*/


/*==================================================
        MENU MOBILE
==================================================*/


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}



/*==================================================
        HEADER AU SCROLL
==================================================*/


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }


});



/*==================================================
        ANIMATION DES COMPTEURS
==================================================*/


const counters = document.querySelectorAll(".stat h2");


let started = false;


function startCounter(){


    if(started) return;


    counters.forEach(counter=>{


        let target = +counter.innerText.replace(/\D/g,'');


        let count = 0;


        let speed = target / 100;



        let update = ()=>{


            count += speed;


            if(count < target){


                counter.innerText = Math.floor(count)+"+";


                requestAnimationFrame(update);


            }

            else{


                counter.innerText = target+"+";


            }


        }


        update();



    });


    started=true;


}



window.addEventListener("scroll",()=>{


    const stats = document.querySelector(".statistics");


    if(stats){


        let position = stats.getBoundingClientRect().top;


        let screen = window.innerHeight;


        if(position < screen - 100){


            startCounter();

        }


    }


});




/*==================================================
        APPARITION AU SCROLL
==================================================*/


const elements = document.querySelectorAll(

".category-card, .provider-card, .why-card, .step, .city-card, .event-card, .blog-card, .testimonial"

);



elements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(40px)";


});




function reveal(){


    elements.forEach(element=>{


        let position = element.getBoundingClientRect().top;


        let screen = window.innerHeight;



        if(position < screen - 80){


            element.style.opacity="1";

            element.style.transform="translateY(0)";

            element.style.transition="0.7s";


        }



    });


}



window.addEventListener("scroll",reveal);


reveal();





/*==================================================
        BOUTON RETOUR EN HAUT
==================================================*/


const backTop = document.createElement("button");


backTop.innerHTML = "↑";


backTop.className="back-top";


document.body.appendChild(backTop);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }

    else{


        backTop.classList.remove("show");


    }


});




backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});