
$(document).ready(function(){

    //Hover на сетку проектов
    $(".project").hover(
        function() {
            $(".overlay", this).css("display", "flex");
        }, function(){
            $(".overlay", this).css("display", "none");
    });

    //Переход на раздел при клике на якорь
    function scrollToAnchor(finD) {
        var aLink = $("a[name='"+ finD +"']");
        $('html').animate({scrollTop: aLink.offset().top}, 1500);
    }

    $(".aboutMe-link").click(function() {
        scrollToAnchor('aboutMe');
    });

    $(".projects-link").click(function() {
        scrollToAnchor('projects');
    });

    $(".contact-link").click(function() {
        scrollToAnchor('contact');
    });

    //кнопка для возврата наверх страницы
    $(function backToTop() {
        let button = $('.back_to_top');

        $(window).on('scroll', () => {
            if($(this).scrollTop() >= 50) {
                button.fadeIn('slow');
            } else {
                button.fadeOut('slow');
            }
        });

        button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
        })
    });

    $('.project').on('click', function(e) {
        e.preventDefault();
    });

});