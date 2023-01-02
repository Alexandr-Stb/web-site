$(document).ready(function () {

    var spin = 0
    $('._R').click(function () {
        console.log("Hello")
        if (spin == 0) {
            $('.hidden_1').css("transform", "translateX(0px)")
            $('.hidden_1').css("opacity", "1")
            $('.hidden_2').css("transform", "translateX(-10%)")
            $('.main_gameplay').css("transform", "translateX(10%)")
            $('.main_gameplay').css("opacity", "0")
            spin = 1
        } else if (spin == 1) {
            $('.hidden_1').css("transform", "translateX(10%)")
            $('.hidden_1').css("opacity", "0")
            $('.main_gameplay').css("transform", "translateX(-10%)")
            $('.hidden_2').css("transform", "translateX(0px)")
            $('.hidden_2').css("opacity", "1")
            spin = 2
        } else {
            $('.hidden_1').css("transform", "translateX(-10%)")
            $('.hidden_2').css("transform", "translateX(10%)")
            $('.hidden_2').css("opacity", "0")
            $('.main_gameplay').css("transform", "translateX(0)")
            $('.main_gameplay').css("opacity", "1")
            spin = 0
        }
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

    $('#screen').click(function () {
        location.href = "../screenshot/screenshot.html"
    })

    $('.image_review').click(function(){
        location.href = "https://www.youtube.com"
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