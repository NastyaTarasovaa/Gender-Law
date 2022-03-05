const changeOnNumber = elem => {
    const value = elem.value;
    elem.value = value.replace(/\D/g, '');
}

class courtСase {
    constructor(judgename, lawyername, casenumber) {
        this.judgename = judgename;
        this.lawyername = lawyername;
        this.casenumber = casenumber;
    }
}

let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения ' + input.placeholder);
    }

    if (validity.rangeOverflow) {
        let max = input.max;
        errors.push('Максимальное значение не может быть больше чем ' + max);
    }

    if (validity.rangeUnderflow) {
        let min = input.min;
        errors.push('Минимальное значение не может быть больше чем ' + min);
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    if (errors != '') {
        document.getElementById("errorMessage").innerHTML = errors.join('. <br>');
    } else {
        document.getElementById("errorMessage").innerHTML = '';
        const allInput = document.querySelectorAll('input');
        allInput.forEach(input => {
            input.value = "";
        })

        alert(`Добро пожаловать!`);
    }
}