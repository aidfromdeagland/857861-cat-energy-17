//main order popup
var orderMain = document.querySelectorAll(".product-card__btn");
var orderAdditional = document.querySelectorAll(".additional-list__btn");
var modalOrder = document.querySelector(".modal");

for (var i = 0; i < orderMain.length; i++) {
  orderMain[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOrder.classList.add("modal--show");
  });
}

for (var i = 0; i < orderAdditional.length; i++) {
  orderAdditional[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOrder.classList.add("modal--show");
  });
}

var modalClose = document.querySelector(".modal__btn-close");
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.remove("modal--show");
});
