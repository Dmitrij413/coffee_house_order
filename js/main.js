
const userSurname =  document.querySelector('[name="surname"]');
const userName = document.querySelector('[name="name"]');

const goodsElements = document.querySelectorAll('[name="goods"]'); //получите элементы checkbox с товарами goods(*)
const countElements = document.querySelectorAll('[type="number"]');

const btn = document.querySelector('.btn');
const resultElem =document.querySelector('.sum');

    let sum = null;

const countGoods = {
    "espresso": 0,
    "americano": 0,
    "latte": 0,
    "cappuccino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
//либо, вы можете создать переменные/массив для хранения значений
// const choicePriceGoods = {
//     "espresso": 0,
//     "americano": 0,
//     "latte": 0,
//     "cappuccino": 0,
//     "chocolate_muffin": 0,
//     "blueberry_muffin": 0,
//     "apple_tart": 0
// }

function summary(){
    goodsElements.forEach(element =>{
        sum += countGoods[element.dataset.goods]*element.value;
    })
    resultElem.textContent = sum;
    sum = 0;
}

countElements.forEach(elem => {
    elem.addEventListener("change", function (){
        goodsElements.forEach(good => {
            if (elem.value > 0) {
                countGoods[elem.id] = elem.value;
                if (good.dataset.goods === elem.id) {
                    good.checked = true;
                }
            } else {
                countGoods[elem.id] = 0;
                good.checked = false;
                elem.value = 0;
            }
        })
        summary();
    })
})

goodsElements.forEach(product => {
    product.addEventListener("change", function (){
        countElements.forEach(countElement => {
            if (countElement.id === product.dataset.goods) {
                if (product.checked) {
                    countElement.value = 1;
                    countGoods[countElement.id] = 1;
                }
                else {
                    countElement.value = 0;
                    countGoods[countElement.id] = 0;
                }
            }
        });
        summary();
    })
});

btn.addEventListener("click", function (){
    userSurname.value === "" ? alert("Введите фамилию!") :
        userName.value === "" ? alert("Введите имя!") :
            resultElem.textContent < 1 ? alert("Выберете товар!") :
                alert(`Заказчик: ${userSurname.value} ${userName.value}\nИтого: ${resultElem.textContent}`);
})