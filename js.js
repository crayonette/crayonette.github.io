/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');


/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('My tastes are simple: I am easily satisfied with the best – Sir Winston Churchill')
})