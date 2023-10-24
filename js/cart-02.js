const cartWrapper = document.querySelector(".cart-wrapper");

// отслеживаием клики
window.addEventListener("click", function (event) {
  // проверяем был ли клик на кнопку добавить в корзину
  if (event.target.hasAttribute("data-cart")) {
    // находим карточку товара
    const card = event.target.closest(".card");

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };
    //проверить есть ли такой товар в корзине, если есть изменим счетчик
    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    //если есть ++

    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    }
    //если нет товара
    else {
      //собранные данные подставляем в шаблон
      const cartItemHtml = `	<div class="cart-item" data-id="${productInfo.id}">
 <div class="cart-item__top">
     <div class="cart-item__img">
         <img src=${productInfo.imgSrc} alt=${productInfo.title}>
     </div>
     <div class="cart-item__desc">
         <div class="cart-item__title">${productInfo.title}</div>
         <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}.</div>

         <!-- cart-item__details -->
         <div class="cart-item__details">

             <div class="items items--small counter-wrapper">
                 <div class="items__control" data-action="minus">-</div>
                 <div class="items__current" data-counter="">${productInfo.counter}</div>
                 <div class="items__control" data-action="plus">+</div>
             </div>

             <div class="price">
                 <div class="price__currency"> ${productInfo.price}</div>
             </div>

         </div>
         <!-- // cart-item__details -->`;
      //отображаем товар в корзине
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
    }
    card.querySelector("[data-counter]").innerText = "1";
    //отображаем статуса в корзине
    toggleCartStatus();

    //пересчет корзины
    calcCartPriceAndDelivery();
  }
});
