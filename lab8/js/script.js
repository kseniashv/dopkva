function checkName() {

    let first = document.getElementById("fio").value;

    let regex = /^[а-яА-Я\s]{15,30}$/;
    

    if (regex.test(first)) { // if testing of first is true 

        document.getElementById("fio").style.color = "green";
        return true;

    }

    else {// if it's not 

        document.getElementById("fio").style.color = "red";
        document.getElementById("fio_span").innerHTML = "Используйте не менее 15 и не более 30 символов на русском языке";
        return false;

    }

}

function checkPhone() {

    let second = document.getElementById("phone").value;

    let regex = /^[\d\+][\d\(\)\ -]{10}\d$/;



    if (regex.test(second)) { // if testing of first is true 

        document.getElementById("phone").style.color = "green";
        return true;

    }

    else {// if it's not 

        document.getElementById("phone").style.color = "red";

        return false;

    }

}

function checkEmail() {

    let third= document.getElementById("mail").value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;



    if (regex.test(third)) { // if testing of first is true 

        document.getElementById("mail").style.color = "green";
        return true;

    }

    else {// if it's not 

        document.getElementById("mail").style.color = "red";

        document.getElementById("mail_span").innerHTML = "Введите почту в соответствии с форматом";

        return false;

    }

}

function checkAge() {

    let fourth= document.getElementById("age").value;
    let regex = /^\d+$/;
    // let regex = /^\d+$/;
    if (regex.test(fourth)) { // if testing of first is true 

        document.getElementById("age").style.color = "green";
        return true;

    }

    else {// if it's not 

        document.getElementById("age").style.color = "red";
        return false;

    }

}

function having(chF, chPh, chE, chA){
    if (chF() && chPh() && chE() && chA()) {
        return true;
    }
    else {
        return false;
    }
}

function sub() {
    if (!having(checkName, checkPhone, checkEmail, checkAge)) {
        document.getElementById("but1").disabled = true;
        setTimeout(function () { document.getElementById("but1").disabled = false; }, 3000); return false;

    } else {
        return true;
    }
}
