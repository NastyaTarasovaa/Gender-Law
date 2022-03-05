const changeOnNumber = elem => {
    const value = elem.value;
    elem.value = value.replace(/\D/g, '');
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
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");
    let year = document.getElementById("year").value;

    for (let input of inputs) {
        checkValidity(input);
    }

    if (!year) {
        errors.push("Год не заполнен.");
    } else {
        let nowDate = new Date();
        if (year > nowDate.getFullYear()) {
            errors.push("Год заполнен некорректно.");
        }
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

addBtn.addEventListener("click", addStuff);