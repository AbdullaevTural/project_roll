function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmptyBadge = document.querySelector("[data-cart-empty]");
  const orderForm = document.querySelector("#order-form");
  if (cartWrapper.children.length > 0) {
    // удаяем надпись через css стиль none
    cartEmptyBadge.classList.add("none");
    // добовляем надпись через удаление css стиль none
    orderForm.classList.remove("none");
  } else {
    // добовляем надпись через удаление css стиль none
    cartEmptyBadge.classList.remove("none");
    // удаяем надпись через css стиль none
    orderForm.classList.add("none");
  }
}
