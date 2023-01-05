# <div align=center>![logo](./readmeFolder/logo.png)



Perfect Game[^1] - это шаблон сайта, который публикует обзоры игр, скриншоты пользователей, и видео с геймплеем. На сайте реализованны все базовые механики свзяки **HTML, CSS, JavaScript. JS** шел в связке с **jQuerry**.  Вся верстка делалась с авторского макета, сделанного в **Figma[^2]**


## Начинка

На сайте реализованны 6 полноценных страниц :

    -Главная
    -Игры
    -Обзоры
    -Скриншоты
    -Геймплей
    -Отдельная страница под обзор игры

### Главная

На главной странице реализованна механика автоскролла и анимация появления с помощью скрипта **jQuerry**

![animation](./readmeFolder/autoScrollAnimation.gif)


### Игры и обзоры

На странице игр и обзоров, реализованна анимация при наведении на отдельный блок с помощью **CSS**.
```css
.game img {
    width: 100%;
    height: 190px;
    border-radius: 36px;
    box-shadow: 0px 24px 24px -24px #00A3FF;
    transition: all 300ms ease-out;
}
.game img:hover {
    transform: translateY(-20%);
    box-shadow: 0px 0px 20px 5px #00A3FF;
}
```

![animation](https://drive.google.com/file/d/18x-ib8wh_JqRm9YiVn4zKq4wwNbUWYqM/view?usp=sharing)

### Скриншоты

На странице скришотов реализовано модульное окно с помощью jQuerry скрипта:

```JavaScript
$(document).ready(function () {     // подключение jQuerry
    $('.line img').click(function(){        //обработка клика по картинке
        $('.modal_window').addClass('_active')      //переключение видимости модального окна
        $('.shadow').addClass('_active')        // переключение видимости затеменния фона
        $('html').addClass('_locScroll')    // блокировка скролла
    })

    $('.shadow').click(function(){      // обработка клика по фону
        $('.modal_window').removeClass('_active')       //закрытие модульного окна
        $('.shadow').removeClass('_active')     //закрытие темного фона
        $('html').removeClass('_locScroll')     //Включение скролла
    })

    $('.modal_close').click(function(){     //обработа клика по кнопке закрытия
        $('.modal_window').removeClass('_active')       //закрытие модульного окна
        $('.shadow').removeClass('_active')     //закрытие темного фона
        $('html').removeClass('_locScroll')     //Включение скролла
    })
```

Добавочный класс _active в **CSS**
```css
.modal_window._active {
    visibility: visible; 
}
```


![animation](./readmeFolder/modalWindow.gif)




### Геймплей

На странице геймплея, реализована механика бесконечного слайдера с помощью **jQuerry** скрипта:

```JavaScript
$(document).ready(function () {

    var spin = 0                        //счетчик прокруток
    $('._R').click(function () {        //обработчик клика по кнопке
        if (spin == 0) {                
            $('.hidden_1').css("transform", "translateX(0px)")       //изменение положения блока   
            $('.hidden_1').css("opacity", "1")                          //на странице  относительно
            $('.hidden_2').css("transform", "translateX(-10%)")             //количества спинов
            $('.main_gameplay').css("transform", "translateX(10%)")       
            $('.main_gameplay').css("opacity", "0")                     
            spin = 1                //изменение количества спинов
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
```

![animation](./readmeFolder/gameplaySlider.gif)

### Отдельная страница под обзор игры

Все ссылки на страницах выше ведут, на эту страницу.


[^1]:[Ссылка на демо сайта (GitHubPages)](https://alexandr-stb.github.io/web-site)


[^2]:[Ссылка на макет (Figma)](https://www.figma.com/file/YQTADHwxZTjUB3mgqr2eUW/Perfect-Game?node-id=0%3A1&t=k9uesZSKH9ADGVD4-1)

