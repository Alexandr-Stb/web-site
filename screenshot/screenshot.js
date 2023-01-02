$(document).ready(function () {
    $('.line img').click(function(){
        $('.modal_window').addClass('_active')
        $('.shadow').addClass('_active')
        $('html').addClass('_locScroll')
    })

    $('.shadow').click(function(){
        $('.modal_window').removeClass('_active')
        $('.shadow').removeClass('_active')
        $('html').removeClass('_locScroll')
    })

    $('.modal_close').click(function(){
        $('.modal_window').removeClass('_active')
        $('.shadow').removeClass('_active')
        $('html').removeClass('_locScroll')
    })

    $('#gameplay').click(function () {
        location.href = "../gameplay/gameplay.html"
    })
    $('.logo').click(function () {
        location.href = '../mainPageFolder/mainPage.html'
    })

    $('#main').click(function () {
        location.href = '../mainPageFolder/mainPage.html'
    })
    $('#games').click(function () {
        location.href = "../gamePage/gamePage.html"
    })

    $('#reviews').click(function () {
        location.href = "../reviews/reviews.html"
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