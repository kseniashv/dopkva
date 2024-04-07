'use strict'
// Генератор случайного числа от 1 до 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 5; // число попыток
let userName = prompt("Введите ваше имя: ")
alert(`Добро пожаловать в игру Угадайка, ${userName}!`)
// Функция для игры
function guessNumber() {
    let userInput = parseInt(prompt("Угадайте число от 1 до 10. У Вас " + attempts + " попыток."));
    if (userInput === randomNumber) {
        alert("Поздравляем! Вы угадали число!");
        playAgain();
    } 
    else if (userInput > randomNumber && userInput > 0 && userInput <= 10) {
        alert("Загаданное число меньше.");
        attempts--;
        checkAttempts();
    } 
    else if (userInput < randomNumber && userInput > 0 && userInput <= 10) {
        alert("Загаданное число больше.");
        attempts--;
        checkAttempts();
    } 
    else {
        alert("Вы ввели не число или число вне диапазона. Начните игру заново.");
        alert("Пожалуйста, введите число от 1 до 10");
        guessNumber();
    }
}

// Функция для проверки количества попыток
function checkAttempts() {
    if (attempts === 0) {
        alert("Вы использовали все попытки. Загаданное число было: " + randomNumber);
        playAgain();
    } 
    else {
        guessNumber();
    }
}

// Функция для перезапуска игры
function playAgain() {
    if (confirm("Хотите сыграть еще раз?")) {
        attempts = 5;
        randomNumber = Math.floor(Math.random() * 10) + 1;
        guessNumber();
    } 
    else {
        alert(`Спасибо за игру! До свидания, ${userName}`);
    }
}

// Запуск игры
guessNumber();