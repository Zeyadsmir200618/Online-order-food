const cartItems = [
  {
    name: "Burger",
    price: 10,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },

  {
    name: "Pizza",
    price: 15,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  }
];

const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");

function displayCart() {

  cartContainer.innerHTML = "";

  let total = 0;

  cartItems.forEach((item, index) => {

    total += item.price * item.quantity;

    cartContainer.innerHTML += `
    
      <div class="cart-item">

        <div class="food-info">

          <img src="${item.image}" alt="${item.name}">

          <div>
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
          </div>

        </div>

        <div class="quantity-box">

          <button onclick="decreaseQuantity(${index})">-</button>

          <span>${item.quantity}</span>

          <button onclick="increaseQuantity(${index})">+</button>

        </div>

        <button class="remove-btn"
          onclick="removeItem(${index})">
          Remove
        </button>

      </div>
    `;
  });

  totalPrice.textContent = total;
}

function increaseQuantity(index) {
  cartItems[index].quantity++;
  displayCart();
}

function decreaseQuantity(index) {

  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
  }

  displayCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  displayCart();
}

displayCart();