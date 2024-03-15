// add cart data to this div
// let cartContainer = document.getElementById("cartContainer");

// Function to display cart items
function displayCartItems() {
  let cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = ""; // Clear the cart container before adding new items

  let cartItems = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart items from localStorage

  // Iterate over cart items and create HTML elements for each item
  cartItems.forEach((item) => {
    // Create a div element for each cart item
    let cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    // Create an img element for the cart item image
    let img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    cartItemDiv.appendChild(img); // Append the image to the cart item

    // Create a p element for the cart item name
    let nameParagraph = document.createElement("p");
    nameParagraph.textContent = item.name;
    cartItemDiv.appendChild(nameParagraph); // Append the name paragraph to the cart item

    // Create a p element for the discounted price
    let discountedPriceParagraph = document.createElement("p");
    discountedPriceParagraph.textContent =
      "Discounted Price: $" + item.discountedPrice;
    cartItemDiv.appendChild(discountedPriceParagraph); // Append the discounted price paragraph to the cart item

    // Create a button for removing from cart
    let removeFromCartButton = document.createElement("button");
    removeFromCartButton.textContent = "Remove from Cart";
    removeFromCartButton.classList.add("remove-from-cart-btn");
    removeFromCartButton.addEventListener("click", () => removeFromCart(item)); // Add click event listener to remove item from cart
    cartItemDiv.appendChild(removeFromCartButton); // Append the button to the cart item

    // Append the cart item div to the cart container
    cartContainer.appendChild(cartItemDiv);
  });

  // Update total items count
  let totalItemsElement = document.getElementById("totalItems");
  totalItemsElement.textContent = "Total items in cart: " + cartItems.length;

  // Calculate and update total amount
  let totalAmountElement = document.getElementById("totalAmount");
  let totalAmount = cartItems.reduce(
    (total, item) => total + item.discountedPrice,
    0
  );
  totalAmountElement.textContent = "Total Amount: $" + totalAmount.toFixed(2);
}

// Function to apply coupon code
function applyCoupon() {
  let couponInput = document.getElementById("couponInput");
  let couponCode = couponInput.value.trim();

  if (couponCode === "Masai15") {
    let totalAmountElement = document.getElementById("totalAmount");
    let totalAmount = parseFloat(
      totalAmountElement.textContent.split(":")[1].trim().replace("$", "")
    );
    let discountedAmount = totalAmount * 0.15; // 15% discount
    let newTotalAmount = totalAmount - discountedAmount;
    totalAmountElement.textContent =
      "Total Amount: $" + newTotalAmount.toFixed(2);

    let billAmountElement = document.getElementById("billAmount");
    billAmountElement.textContent = `before application of coupon Bill Amount : ${totalAmount.toFixed(
      2
    )} and after Bill Amount : ${newTotalAmount.toFixed(2)}`;
  } else {
    alert("Invalid coupon code. Please try again.");
  }
}

// Function to remove item from cart
function removeFromCart(item) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== item.id
  );
  localStorage.setItem("cart", JSON.stringify(updatedCartItems));

  // Update cartCount in navbar
  let cartCount = updatedCartItems.length;
  document.getElementById("cartCount").textContent = cartCount;

  // Update total items count and total amount
  displayCartItems();
}

// Display cart items when the page loads
window.onload = function () {
  displayCartItems();
};
