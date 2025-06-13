$(function(){
    // 탑 버튼
    const scrollToTop = () => {
        $("html, body").animate({ scrollTop: 0 }, 300);
    };
    $(".top").on("click", function () {
        scrollToTop();
    });

    // 모바일 헤더
    $('.m_menu').on('click', function(){
        $('body').toggleClass('fixed');
        $('.dim').fadeToggle(100);
        $('header .nav, .m_menu').toggleClass('active');
    });
    $('.dim').on('click', function(){
        $('body').removeClass('fixed');
        $('.dim').fadeOut(100);
        $('header .nav, .m_menu').removeClass('active');
    });
    $('.m_arrow').on('click', function(){
        $(this).toggleClass('active');
        $(this).next('.sub_nav').slideToggle(300);
    });

    // 이용약관
    $('#terms_btn01').on('click', function(){
        $('#terms_01').fadeIn(300);
        $('body').addClass('fixed');
    });
    $('#terms_btn02').on('click', function(){
        $('#terms_02').fadeIn(300);
        $('body').addClass('fixed');
    });
    $('.terms_close, .terms_wrap').on('click', function(){
        $('.terms_wrap').fadeOut(300);
        $('body').removeClass('fixed');
    });
    $(".terms_box").on("click", function (e) {
        e.stopPropagation();
    });

    // 애니메이션
    const aniBoxes = document.querySelectorAll(".ani_box");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);

                // 리뷰 슬라이드 자동 멈춤
                if (entry.target.matches(".review_slide")) {
                    setTimeout(() => {
                        profile_01.autoplay.stop();
                        profile_02.autoplay.stop();
                    }, 1000);
                }
            }
        });
    }, { threshold: 0.5 });

    aniBoxes.forEach(ani => observer.observe(ani));
});