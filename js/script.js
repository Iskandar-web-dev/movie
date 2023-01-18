/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let img = document.querySelectorAll(".promo__adv img")
let promo = document.querySelectorAll('.promo__genre')
let bg = document.querySelectorAll(".promo__bg")
console.log(promo);
img.forEach(img => {
    function deleteee() {
        img.remove()
    }
    deleteee()
})

promo.forEach(img =>{
    img.innerHTML = "ДРАМА"
})

bg.forEach(bg => {
    bg.style.background = `url('./img/bg.jpg')`
})