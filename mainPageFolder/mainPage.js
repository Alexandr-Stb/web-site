
const animItems = document.querySelectorAll('._anim-items')
const elem = document.querySelector('#upBtn')
console.log(animItems)
if (animItems.length > 0) {
    console.log("Hi")
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active')
            }

        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

$(document).ready(function () {
    $('#toTop').fadeOut(1);
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#toTop').fadeIn(900);
            } else {
                $('#toTop').fadeOut(900);
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 300);
        });
    });
    

    $('#games').click(
        function(){
            location.href = "../gamePage/gamePage.html"
        }
    )
    $('#reviews').click(
        function(){
            location.href = "../reviews/reviews.html"
        }
    )

    $('#screen').click(function () {
        location.href = "../screenshot/screenshot.html"
    })

    $('#gameplay').click(function () {
        location.href = "../gameplay/gameplay.html"
    })

    $('.image_review').click(function(){
        location.href = "../gameReviews/gameReview.html"
    })

    $('#tg').click(function(){
        location.href = "https://telegram.org"
    })
    $('#inst').click(function(){
        location.href = "https://instagram.com"
    })

    $('#vk').click(function(){
        location.href = "https://vk.com"
    })

    $('.button').click(function(){
        location.href = "https://vk.com"
    })
        
});














