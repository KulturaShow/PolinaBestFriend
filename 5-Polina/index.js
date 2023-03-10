let phrases = [
  { text: 'всегде поддержит', image: '../5-Polina/Img/1.jpeg' } ,
   { text: 'рядом даже когда далеко', image: '../5-Polina/Img/2.jpeg' },
 { text: 'мотивирует на действия', image: '../5-Polina/Img/3.jpeg' },
 { text: 'тайно любит меня', image: '../5-Polina/Img/4.jpeg' },
 { text: 'самая красивая', image: '../5-Polina/Img/5.jpeg' },
 { text: 'добивается всего и мотивирует всех вокруг', image: '../5-Polina/Img/6.jpeg' },
 { text: 'не умеет выбирать парней...', image: '../5-Polina/Img/2.jpeg' },
 { text: 'Готова ждать меня до 30 :3', image: '../5-Polina/Img/2.jpeg' }, 
 { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
 let randIndex = Math.floor(Math.random() * arr.length);
 return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
 let randomElement = getRandomElement(phrases);
 smoothly(phrase, 'textContent', randomElement.text);
 image.src = randomElement.image;
 smoothly(image, 'src', randomElement.image);
 if (randomElement.text.length > 40) {
   advice.style.fontSize = '33px';
 } else {
   advice.style.fontSize = '42px';
 }
});
