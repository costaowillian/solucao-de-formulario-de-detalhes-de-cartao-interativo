const checkName = () => {
    const cardName = document.querySelector("#name").value;
    const replaceName = document.querySelector("#replaceName");
    
    if(cardName == "") {
        const nameError = document.getElementById("nameError");
        if(nameError.classList.contains("hide") == true) {
            nameError.classList.remove("hide");
            nameError.innerHTML += "digite o nome impresso no cartão";
        }
    } else if (cardName != "") {
        nameError.classList.add("hide");
        replaceName.innerHTML = "";
        replaceName.innerHTML += cardName;
    }
}

const formattedNumber = (cardNumber) => {
    const formattedNumber = cardNumber.substring(0, 4) + "  " + cardNumber.substring(4, 8) + "  " + cardNumber.substring(8, 12) + "  " + cardNumber.substring(12, 16);
    return formattedNumber;
}

const isNumber = (value) => {  
    return /^-?\d+$/.test(value);
}

const checkNumber = () => {
    const cardNumber = document.querySelector("#cardNumber").value.replaceAll(" ","");
    const reaplceCardNumber = document.querySelector("#reaplceCardNumber");
    numberError.innerHTML = "  ";
    numberError.classList.add("hide");
    if(!isNumber(cardNumber)) {
        if (numberError.classList.contains("hide") == true){
            numberError.classList.remove("hide");
            numberError.innerHTML += "digite somente números";
        }
    } else if(cardNumber.length < 16 || cardNumber.length > 16) {
        const numberError = document.getElementById("numberError");
        if(numberError.classList.contains("hide") == true) {
            numberError.classList.remove("hide");
            numberError.innerHTML += "digite todos os 16 números do seu cartão";
        }
    } else if (cardNumber.length == 16) {
        numberError.classList.add("hide");
        const number = formattedNumber(cardNumber);
        reaplceCardNumber.innerHTML = "";
        reaplceCardNumber.innerHTML += number;
    } 
}

const formatedDate = (month, year) => {
    const date = month + "/" + year;
    return  date;
}

const checkDate = () => {
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const replaceDate = document.querySelector("#replaceDate");
    

    if(month == "" || year == "") {
        const dateError = document.getElementById("dateError");
        if(dateError.classList.contains("hide") == true) {
            dateError.classList.remove("hide");
            dateError.innerHTML += "digite a data de vencimento";
        }
    } else {
        dateError.classList.add("hide");
        const date = formatedDate(month, year);
        replaceDate.innerHTML = "";
        replaceDate.innerHTML += date;
    } 
}

const formattedCvc = (cvc) => {
    const formattedCvc = cvc.replace(/(\d{2})(\d{1})/, "**1");
    return formattedCvc;
}

const checkCvc = () => {
    const cvc = document.querySelector("#cvc").value;
    const recplaceCvc = document.querySelector("#recplaceCvc");

    if(cvc.length < 3 || cvc.length > 3 ) {
        const cvcError = document.getElementById("cvcError");
        if(cvcError.classList.contains("hide") == true) {
            cvcError.classList.remove("hide");
            cvcError.innerHTML += "o cvc contém 3 dígitos";
        }
    } else if (cvc.length == 3) {
        cvcError.classList.add("hide");
        const formatedCvc = formattedCvc(cvc);
        recplaceCvc.innerHTML = "";
        recplaceCvc.innerHTML = formatedCvc;
    }   
}

const newHtml = () => {
    return `
        <div id="completed" class="hide">
        <img src="assets/img/icon-complete.svg" alt="icon completed">
        <h2>Obrigado!</h2>
        <p>Já adicionamos os dados do seu cartão.</p>
        <button id="confirm">Continuar</button></div>
    `
}

function confirm() {
    const cardName = document.querySelector("#name").value;
    const cardNumber = document.querySelector("#cardNumber").value;
    const year = document.querySelector("#year").value;
    const cvc = document.querySelector("#cvc").value;
    const html = document.querySelector("#form-control");
    const incompleteFields = document.querySelector("#incompleteFields");
    if (cardName != "" || cardNumber != "" || year != "" || cvc != "") {
        html.innerHTML = "";
        const completedHtml = newHtml();
        html.innerHTML += completedHtml;  
    } else {
        if(incompleteFields.classList.contains("hide") == true){
            incompleteFields.classList.remove("hide");
            incompleteFields.innerHTML += "preencha todos os campos.";
        }   
    }
}

//events
const cardNumber = document.querySelector("#cardNumber");

cardNumber.addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, "$4 $4 $4 $4");
});