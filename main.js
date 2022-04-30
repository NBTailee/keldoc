const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const arrowReturn1 = document.querySelector('.more-1');
const arrowReturn2 = document.querySelector('.more-2');
const showUp = document.querySelector('.text-content');
const searchIcon = document.querySelector('.search-icon');
const searchControl = document.querySelector('.search-control');

function slideScroll(){
    var scrollAni = document.querySelectorAll('.scroll');
    for(var i = 0; i < scrollAni.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = scrollAni[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            if(scrollAni[i].tagName === 'H2'){
                scrollAni[i].classList.remove('aniHead');
                scrollAni[i].classList.add('pop3');
            }else if(scrollAni[i].tagName === 'P'){
                scrollAni[i].classList.remove('textBox');
                scrollAni[i].classList.add('pop5');
            }else{
                scrollAni[i].classList.add('pop4');
            }
        }else{
            if(scrollAni[i].tagName === 'H2'){
                scrollAni[i].classList.add('aniHead');
                scrollAni[i].classList.remove('pop3');
            }else if(scrollAni[i].tagName === 'P'){
                scrollAni[i].classList.remove('textBox');
                scrollAni[i].classList.remove('pop5');
            }else{
                scrollAni[i].classList.remove('pop4');
            }
            // scrollAni[i].classList.remove('active');
        }
        // console.log(windowHeight);
        // console.log(revealTop);
    }
    var services = document.querySelectorAll('.services-item');
    for(var i = 0; i < services.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = services[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            services[i].classList.add('services-item-active');
            services[i].classList.add('services-item');
        }else{
            services[i].classList.remove('services-item-active');
            services[i].classList.add('services-item');
        }
    }
    var banner2 = document.querySelectorAll('.activated');
    for(var i = 0; i < banner2.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = banner2[i].getBoundingClientRect().top;
        var revealPoint = 150;
        // console.log(banner2[i].className);
        if(revealTop < windowHeight - revealPoint){
            if(banner2[i].className === 'activated grid-1'){
                banner2[i].classList.remove('grid-1');
                banner2[i].classList.add('slide-in-1');
            }else if(banner2[i].className === 'activated grid-2'){
                banner2[i].classList.remove('grid-2');
                banner2[i].classList.add('slide-in-2');
            }else if(banner2[i].className === 'activated grid-3'){
                banner2[i].classList.remove('grid-3');
                banner2[i].classList.add('slide-in-3');
            }else if(banner2[i].className === 'activated grid-4'){
                banner2[i].classList.remove('grid-4');
                banner2[i].classList.add('slide-in-4');
            }else if(banner2[i].className === 'activated grid-5'){
                banner2[i].classList.remove('grid-5');
                banner2[i].classList.add('slide-in-5');
            }else if(banner2[i].className === 'activated grid-6'){
                banner2[i].classList.remove('grid-6');
                banner2[i].classList.add('slide-in-6');
            }
        }else{
            if(banner2[i].className === 'activated slide-in-1'){
                banner2[i].classList.remove('slide-in-1');
                banner2[i].classList.add('grid-1');
            }else if(banner2[i].className === 'activated slide-in-2'){
                banner2[i].classList.remove('slide-in-2');
                banner2[i].classList.add('grid-2');
            }else if(banner2[i].className === 'activated slide-in-3'){
                banner2[i].classList.remove('slide-in-3');
                banner2[i].classList.add('grid-3');
            }else if(banner2[i].className === 'activated slide-in-4'){
                banner2[i].classList.remove('slide-in-4');
                banner2[i].classList.add('grid-4');
            }else if(banner2[i].className === 'activated slide-in-5'){
                banner2[i].classList.remove('slide-in-5');
                banner2[i].classList.add('grid-5');
            }else if(banner2[i].className === 'activated slide-in-6'){
                banner2[i].classList.remove('slide-in-6');
                banner2[i].classList.add('grid-6');
            }
        }
    }
    // banner2[i].classList.remove('services-item-active');
    // banner2[i].classList.add('services-item');
    var banner3 = document.querySelectorAll('.ava');
    for(var i = 0; i < banner3.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = banner3[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            if(banner3[i].className === 'img-three ava'){
                banner3[i].classList.add('active-img-2');
            }else if(banner3[i].className === 'img-avatar ava'){
                banner3[i].classList.add('active-img-1');
            }
        }else{
            if(banner3[i].className === 'img-three ava active-img-2'){
                banner3[i].classList.remove('active-img-2');
            }else if(banner3[i].className === 'img-avatar ava active-img-1'){
                banner3[i].classList.remove('active-img-1');
            }
        }
    }
    var banner3Ani = document.querySelectorAll('.banner-three-animation');
    for(var i = 0; i < banner3Ani.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = banner3Ani[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            if(banner3Ani[i].className === 'banner-three-content-container-1 banner-three-animation'){
                banner3Ani[i].classList.add('banner-three-active');
            }else if(banner3Ani[i].className === 'banner-three-content-container-2 banner-three-animation'){
                banner3Ani[i].classList.add('banner-three-active');
            }
        }else{
            banner3Ani[i].classList.remove('banner-three-active');
        }
    }
}

window.addEventListener('scroll', slideScroll);


function show(){
    Object.assign(showUp.style, {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'var(--transition)',
        'transition-delay': '0.5s' 
    });
    var text = document.querySelector('.text');
    var pop1 = document.querySelector('.pop1');
    var pop2 = document.querySelector('.pop2');
    var navbar = document.querySelector('.navbar');
    Object.assign(navbar.style, {
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'var(--transition)',
        'transition-delay': '0.4s' 
    });
    
    Object.assign(text.style,{
        opacity: '0.8',
        transform: 'translateX(0)',
        transition: 'var(--transition)',
        'transition-delay': '0.5s'
    });
    Object.assign(pop1.style,{
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'var(--transition)',
        'transition-delay': '0.5s'
    });
    Object.assign(pop2.style,{
        opacity: '1',
        transform: 'translateY(0)',
        transition: 'var(--transition)',
        'transition-delay': '0.5s'
    });
    
    
}
// searchControl.onmouseout = function(){
//     Object.assign(searchIcon.style,{
//         transform: 'translateX(50px)',
//         transition: 'var(--transition)',
//     });
//     Object.assign(searchControl.style,{
//         'padding-right': '0px',
//         opacity: '0',
//         transition: 'var(--transition)',
//     });
// }
showUp.addEventListener('load',show());
navbarShowBtn.addEventListener('click',function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});
arrowReturn1.onmouseout = function(){
    arrowReturn1.querySelector('.arrow-1').classList.add('arrow-return');
}
arrowReturn2.onmouseout = function(){
    arrowReturn2.querySelector('.arrow-2').classList.add('arrow-return');
}
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winsize = window.matchMedia("(min-width: 1200px)");
    if(winsize.matches){
        document.querySelector('.search-icon img').src = "./image/search-icon.png";
    }else{
        document.querySelector('.search-icon img').src = "./image/search-icon-dark.png";
    }
}changeSearchIcon();
// tabs animation
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.pane-item');
const tab = $('.tab-item.active');
const line = $('.tabs .line');

line.style.left = tab.offsetLeft + 'px';
line.style.width = tab.offsetWidth + 'px';


console.log(tabs, panes)
tabs.forEach((tab, index) => {
    var pane = panes[index];
    tab.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active');
        tab.classList.add('active');

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';

        document.querySelector('.pane-item.active').classList.remove('active');
        pane.classList.add('active');
    }
});
// progress bar
window.addEventListener('scroll', () =>{
    const indicatorBar = document.querySelector('.scroll-indicator-bar');

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height)*100;

    indicatorBar.style.width = scrollValue + "%";
})



/* <====================slider section====================> */
        // let swiper = new Swiper(".swiper", {
        // //   cssMode: true,
        //   rewind: true,
        //   centerSlides: true,
        //   effect: 'cards',
        //   autoplay: {
        //       delay: 3000,
        //   },
        //   navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   },
        //   pagination: {
        //     el: ".swiper-pagination",
        //   },
        //   mousewheel: true,
        //   keyboard: true,
        // });