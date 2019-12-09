$(window).scroll(function(){
    let wScroll = $(this).scrollTop();


    $('.contactText').css({
        'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    })

    /* nem működik!! */

    if(wScroll > $('.s1').height()){
        $("#contactButton").toggleClass("btn btn-lg btn-outline-dark")
    }
})