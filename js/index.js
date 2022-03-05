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
        addCase();
        document.getElementById("errorMessage").innerHTML = '';
        const allInput = document.querySelectorAll('input');
        allInput.forEach(input => {
            input.value = "";
        })
    }
}

function addCase() {
    let number = +document.getElementById("numberCase").value;

    switch (number) {
        case case1.number:
            document.getElementById("resulttext").innerHTML = `Статья: ${case1.article}, Номер дела: ${case1.number}, Название дела: ${case1.title}, Год: ${case1.year}, ФИО судьи: ${case1.judgename}, ФИО адвоката: ${case1.lawyername}, Решение: ${case1.decision}`;
            break;
        case case2.number:
            document.getElementById("resulttext").innerHTML = `Статья: ${case2.article}, Номер дела: ${case2.number}, Название дела: ${case2.title}, Год: ${case2.year}, ФИО судьи: ${case2.judgename}, ФИО адвоката: ${case2.lawyername}, Решение: ${case2.decision}`;
            break;
        case case3.number:
            document.getElementById("resulttext").innerHTML = `Статья: ${case3.article}, Номер дела: ${case3.number}, Название дела: ${case3.title}, Год: ${case3.year}, ФИО судьи: ${case3.judgename}, ФИО адвоката: ${case3.lawyername}, Решение: ${case3.decision}`;
            break;
        case case4.number:
            document.getElementById("resulttext").innerHTML = `Статья: ${case4.article}, Номер дела: ${case4.number}, Название дела: ${case4.title}, Год: ${case4.year}, ФИО судьи: ${case4.judgename}, ФИО адвоката: ${case4.lawyername}, Решение: ${case4.decision}`;
            break;
        case case5.number:
            document.getElementById("resulttext").innerHTML = `Статья: ${case5.article}, Номер дела: ${case5.number}, Название дела: ${case5.title}, Год: ${case5.year}, ФИО судьи: ${case5.judgename}, ФИО адвоката: ${case5.lawyername}, Решение: ${case5.decision}`;
            break;
        default:
            document.getElementById("resulttext").innerHTML = 'В нашей базе нет дела под номером ' + numberCase;
    }
}