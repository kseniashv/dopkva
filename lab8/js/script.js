function validateFullName(input) {
    const fullName = input.value.trim(); // Удаляем лишние пробелы
    const namePattern = /^[а-яА-Я\s]+$/;
    const errorSpan = document.getElementById("fullNameError");

    if (fullName === "") {
        errorSpan.textContent = "Поле ФИО не может быть пустым";
    } else if (fullName.length < 15 || !namePattern.test(fullName)) {
        errorSpan.textContent = "Используйте не менее 15 символов на русском языке";
    } else {
        errorSpan.textContent = "";
    }
}

function validatePhone(input) {
    const phone = input.value.trim();
    const phonePattern = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const errorSpan = document.getElementById("phoneError");

    if (phone === "") {
        errorSpan.textContent = "Поле Номер телефона не может быть пустым";
    } else if (!phonePattern.test(phone)) {
        errorSpan.textContent = "Номер телефона введен неправильно!";
    } else {
        errorSpan.textContent = "";
    }
}

function validateEmail(input) {
    const email = input.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorSpan = document.getElementById("emailError");

    if (email === "") {
        errorSpan.textContent = "Поле Почта не может быть пустым";
    } else if (!emailPattern.test(email)) {
        errorSpan.textContent = "Почта введена неправильно!";
    } else {
        errorSpan.textContent = "";
    }
}

function validateAge(input) {
    const age = parseInt(input.value.trim());
    const errorSpan = document.getElementById("ageError");

    if (isNaN(age) || age < 18) {
        errorSpan.textContent = "Введите корректный возраст (больше или равно 18)";
    } else {
        errorSpan.textContent = "";
    }
}

function changeFontColor() {
    const fontInfo = document.getElementById("title");

    const currentColor = window.getComputedStyle(fontInfo).color;

// Если текущий цвет текста красный, меняем на синий, иначе на желтый
    if (currentColor === 'rgb(255, 0, 0)') {
        fontInfo.style.color = 'blue';
    }
    else {
        fontInfo.style.color = 'yellow';
    }
}
    changeFontColor();

//делаем невидимой текст,класс которого tit
function hideElement() {
    const element = document.getElementById("tit");
    element.style.display = "none";
    }
