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