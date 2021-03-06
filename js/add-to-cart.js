/*Got some help from Marius Solheim, fellow students, and was 
also inspired by this https://www.youtube.com/watch?v=YeFzkC2awTM,  
this https://vimeo.com/457504978/726aababe6 and https://codepen.io/chrisachinga/pen/MWwrZLJ*/

const addToCartButton = document.querySelector(".add-to-cart-button");

let cartArray = [];

addToCartButton.addEventListener("click", addNumberOfJackets);

//functions for adding and updating number of items in cart

function addNumberOfJackets() {
  let jacketCounter = localStorage.getItem("cartAmount");

  jacketCounter = parseInt(jacketCounter);

  if (jacketCounter) {
    localStorage.setItem("cartAmount", jacketCounter + 1);
    jacketAmount.textContent = jacketCounter + 1;
  } else {
    localStorage.setItem("cartAmount", 1);
    jacketAmount.textContent = 1;
  }

  addJacket();
  successPopup();
}

function addJacket() {
  let cartArray = [];
  cartArray = JSON.parse(localStorage.getItem("jacketsAddedToCart")) || [];

  cartArray.push(jacket);
  localStorage.setItem("jacketsAddedToCart", JSON.stringify(cartArray));
}

const popUp = document.querySelector(".popup");

function successPopup() {
  try {
    jacketContainer.innerHTML += `<div class="popup"><div class="jacket-image"><img src="${jacket.image}" alt=${jacket.name}/></div> <div class="jacket-information">
    <p class"popup-para">${jacket.name} was successfully added to bag!</p><p class="orange-price">${jacket.price}$</p>
    <a class="cta cta-white cta-popup" href="index.html">Shop more</a>
    <a class="cta cta-white cta-popup" href="checkout-bag.html">Go to cart</a>
    </div>
    `;
  } catch (error) {
    jacketContainer.innerHTML += alert("Jacket was not added, try again");
  }
}
