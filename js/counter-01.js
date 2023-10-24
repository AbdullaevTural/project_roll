window.addEventListener("click", function (event) {
  let counter;
  // отслеживаием клики
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //находим обертку счетчика
    let counterWrapper = event.target.closest(".counter-wrapper");
    //находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    // проверка на товар

    if (parseInt(counter.innerText) > 1) {
      // Изменяем текст в счетчике уменьшая его на 1
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest(".cart-item").remove();
      //отображаем статуса в корзине
      toggleCartStatus();

      //пересчет общей стоимости в корзине
      calcCartPriceAndDelivery();
    }
    {
    }
  }
  // проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
