const responsive ={
    0:{
        items :1
    },
    320:{
        items : 1
    },
    560:{
        items : 2
    },
    970:{
        items :3
    }
}
const scrollup = document.querySelector('.topscroll');
scrollup.addEventListener('click',()=>{
    scrollTo(0,0);
});
$(document).ready(function(){
    $nav = $('.nav');
    $toggle = $('.toggle');
    $toggle.click(function(){
        $nav.toggleClass('collapse');
    });

    $('.owl-carousel').owlCarousel({
        loop : true,
        autoplay : true,
        autoplayTimeout : 2000,
        dots : false,
        nav : true,
        navText : [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive : responsive

    });
    
    AOS.init();
});