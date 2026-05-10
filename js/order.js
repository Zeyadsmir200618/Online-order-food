const orders = [

  {
    id: 1001,
    food: "Burger Meal",
    date: "May 1, 2026",
    total: 20,
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },

  {
    id: 1002,
    food: "Pepperoni Pizza",
    date: "May 3, 2026",
    total: 15,
    status: "Preparing",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },

  {
    id: 1003,
    food: "Chicken Pasta",
    date: "May 5, 2026",
    total: 18,
    status: "OnTheWay",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb"
  }
];

const ordersContainer =
  document.getElementById("orders-container");

orders.forEach(order => {

  ordersContainer.innerHTML += `

    <div class="order-card">

      <img src="${order.image}" alt="${order.food}">

      <h2>Order #${order.id}</h2>

      <p><strong>Food:</strong> ${order.food}</p>

      <p><strong>Date:</strong> ${order.date}</p>

      <p><strong>Total:</strong> $${order.total}</p>

      <p class="status ${order.status.toLowerCase()}">
        ${order.status}
      </p>

    </div>
  `;
});