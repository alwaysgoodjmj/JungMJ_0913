// top_menu
const topMenu = document.querySelector('.top_menu');

window.onscroll = function(){
    let top = window.scrollY;
    if(top >= 30){
        topMenu.classList.add('on');
    } else{
        topMenu.classList.remove('on');
    }
}

topMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    const element = document.querySelector(link);
    element.scrollIntoView({behavior: "smooth"});
})

// skills
const numAni = document.querySelectorAll('.per');
const skillSection = document.querySelector('.skills');
const triggerPoint = skillSection.offsetTop - 600;
const timer = null;
let excuted = false;

window.addEventListener('scroll', function(){
    const scrollAmt = this.scrollY;
    if(scrollAmt > triggerPoint){
        if(!excuted){
            startNumCount();
            excuted = true;
        }
    }
});

function startNumCount(){
    function changeNum(i){
        let num = 0;
        const targetNum = parseInt(numAni[i].getAttribute('data-count'));
        const timer = setInterval(function(){
            ++num;
            numAni[i].innerText = num;
            if(num  == targetNum){
                clearInterval(timer);
            }            
        }, 15);
    }
        for(let i = 0; i < numAni.length; i++){
        changeNum(i);
        }
}

