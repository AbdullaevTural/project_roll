// находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// отслеживаием клики
btnMinus.addEventListener("click", function () {
  // Проверяем больше 1
  if (parseInt(counter.innerText) > 1) {
    // Изменяем текст в счетчике уменьшая его на 1
    counter.innerText = --counter.innerText;
  }
});
btnPlus.addEventListener("click", function () {
  counter.innerText = ++counter.innerText;
});
