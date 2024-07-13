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

// display product
function displayProducts(products) {
   
  const productListContainer = document.querySelector('.product-list');
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product', 'bg-white', 'p-4', 'rounded', 'shadow-md');

    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productName.classList.add('text-lg', 'font-bold');

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productPrice.classList.add('text-gray-700', 'mt-2');

    // Add to cart button
    const addToCart = document.createElement('button');
    addToCart.textContent = 'Add to Cart';
    addToCart.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mt-4');
    addToCart.addEventListener('click', addToCart)

    // Append elements => product container
    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(addToCart);

    productListContainer.appendChild(productElement);
});
}
// add to cart
function addToCart(product){
  cart.push(product);
  updateCartDisplay();
};
// update cart display
function updateCartDisplay(){

};
// remove from cart
// clear cart
window.addEventListener('DOMContentLoaded', (event) => {
  displayProducts(products);

});