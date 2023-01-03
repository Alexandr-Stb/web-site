$(document).ready(function () {
    var audio = document.getElementsByTagName('audio')[0];

    $('._scrimer').click(function () {
        audio.play()
        setTimeout(function () { $('.scrimer').css('background', 'url(./gamePageImg/bestGames/scrimer.jpg) no-repeat').css("background-size", "100% 100%") }, 100)
        setTimeout(function () { $('.scrimer').css('background', 'none') }, 3000)
    })

    $('.logo').click(function () {
        location.href = '../index.html'
    })

    $('#main').click(function () {
        location.href = '../index.html'
    })

    $('#reviews').click(
        function () {
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

})