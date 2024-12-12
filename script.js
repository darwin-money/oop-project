// 1. Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // 2. ShoppingCartItem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of this item
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // 3. ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      // Check if the item is already in the cart
      let item = this.items.find(item => item.product.id === product.id);
      
      if (item) {
        // If the item exists, update the quantity
        item.quantity += quantity;
      } else {
        // If the item doesn't exist, add a new item
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total price of all items in the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
  
    // Method to display cart items
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Price: ${item.calculateTotalPrice()}`);
      });
      console.log(`Total: $${this.getTotal()}`);
    }
  }
  
  // Testing the classes
  // Create products
  const product1 = new Product(1, 'Laptop', 1000);
  const product2 = new Product(2, 'Smartphone', 600);
  const product3 = new Product(3, 'Headphones', 150);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 2);  // 2 Laptops
  cart.addItem(product2, 3);  // 3 Smartphones
  cart.addItem(product3, 1);  // 1 Headphones
  
  // Display the cart
  cart.displayCart();
  
  // Remove an item from the cart (e.g., remove Laptop)
  cart.removeItem(1);
  
  // Display the cart again
  cart.displayCart();
  