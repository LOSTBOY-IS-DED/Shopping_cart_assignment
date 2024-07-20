const products = [
  { id: 1, name: "T-Shirt", price: 10 },
  { id: 2, name: "Jeans", price: 20 },
  { id: 3, name: "Jacket", price: 30 },
  { id: 4, name: "Sneakers", price: 40 },
  { id: 5, name: "Hat", price: 50 },
  { id: 6, name: "Socks", price: 60 },
  { id: 7, name: "Watch", price: 70 },
  { id: 8, name: "Sunglasses", price: 80 },
  { id: 9, name: "Laptop", price: 900 },
  { id: 10, name: "Tablet", price: 300 },
  { id: 11, name: "Smartphone", price: 600 },
  { id: 12, name: "Headphones", price: 120 },
  { id: 13, name: "Camera", price: 500 },
  { id: 14, name: "Keyboard", price: 80 },
  { id: 15, name: "Mouse", price: 60 },
  { id: 16, name: "Monitor", price: 200 },
  { id: 17, name: "Printer", price: 150 },
  { id: 18, name: "Desk Lamp", price: 30 },
  { id: 19, name: "Office Chair", price: 120 },
  { id: 20, name: "Bookshelf", price: 70 },
  { id: 21, name: "Backpack", price: 40 },
  { id: 22, name: "Water Bottle", price: 15 },
  { id: 23, name: "Notebook", price: 5 },
  { id: 24, name: "Pen", price: 2 },
  { id: 25, name: "Pencil", price: 1 },
  { id: 26, name: "Eraser", price: 0.5 },
  { id: 27, name: "Highlighter", price: 3 },
  { id: 28, name: "Stapler", price: 10 },
  { id: 29, name: "Scissors", price: 6 },
  { id: 30, name: "Tape", price: 4 },
  { id: 31, name: "Ruler", price: 2 },
  { id: 32, name: "Glue Stick", price: 1 },
  { id: 33, name: "Paper Clips", price: 0.5 },
  { id: 34, name: "Binder", price: 4 },
  { id: 35, name: "Folder", price: 3 },
  { id: 36, name: "File Organizer", price: 10 },
  { id: 37, name: "Whiteboard", price: 50 },
  { id: 38, name: "Chalk", price: 2 },
  { id: 39, name: "Paint", price: 20 },
  { id: 40, name: "Brushes", price: 10 },
  { id: 41, name: "Canvas", price: 15 },
  { id: 42, name: "Easel", price: 25 },
  { id: 43, name: "Palette", price: 5 },
  { id: 44, name: "Clay", price: 10 },
  { id: 45, name: "Modeling Tools", price: 8 },
  { id: 46, name: "Apron", price: 12 },
  { id: 47, name: "Art Smock", price: 15 },
  { id: 48, name: "Sketch Pad", price: 7 },
  { id: 49, name: "Colored Pencils", price: 10 },
  { id: 50, name: "Markers", price: 12 },
];

const cart = [];
//Function to display products on the webpage
function displayProducts() {
  let productListContainer = document.querySelector(`.product-list`);
  //clear any existing content in the product list container
  productListContainer.innerHTML = '';

  products.forEach(product => {
    let productElement = document.createElement('div');
    productElement.classList.add('product');

    //Create the HTML Content for the product
    productElement.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price.toFixed(2)}</p>
    <button oneclick="addToCart(${product.id})">Add to Cart</button>
    `;

    //Append the product element to the product list container
    productListContainer.appendChild(productElement);
  });
}
// Function to add a product to the cart (similar to previous implementation)
function addToCart(productId) {
  // Your addToCart logic here (as previously discussed)
  console.log(`Adding product with ID ${productId} to cart...`);
}

// Call the displayProducts function when the page loads or whenever needed
displayProducts();


// display product

const displayProducts = () => {
  const productList = document.querySelector(".product-list");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "bg-white shadow-md rounded p-4";
    productCard.innerHTML = `
      <h2 class="text-lg font-bold">${product.name}</h2>
      <p class="text-gray-600">Price: ${product.price}</p>
      <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onclick="addToCart(${product.id})">Add to cart</button>
    `;
    productList.appendChild(productCard);
  });
};



// add to cart

const addToCart = (productId) => {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item)=>item.id===productId);
  if(cartItem){
    cartItem.quantity++;
  }
  else{
    cart.push({...product,quantity:1});
  }
  updateCartDisplay();
};

// update cart display

const updateCartDisplay = () => {
  const cartItemList = document.querySelector(".cart-items");
  cartItemList.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    const cartItem = document.createElement("li");
    cartItem.className = "bg-white shadow-md rounded p-4";
    cartItem.innerHTML = `
    ${item.name} = ${item.price} * ${item.quantity}
    <button class="ml-2 px-2 py-1 bg-red-700 text-white rounded" onclick="removeFromCart(${item.id})">Remove</button>
  `;
    cartItemList.appendChild(cartItem);
  });
  document.querySelector(".total-price").textContent = totalPrice ;
};

// remove from cart

const removeFromCart = (productId) => {
  const index = cart.findIndex((product) => product.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCartDisplay();
  }
};

// clear cart
const clearCart = () => {
  cart.length = 0;
  updateCartDisplay();
};

document.addEventListener("DOMContentLoaded",displayProducts);