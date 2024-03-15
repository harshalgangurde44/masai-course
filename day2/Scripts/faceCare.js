// data to map
const faceCareData = [
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
    id: 201,
    originalPrice: 325,
    discountedPrice: 276,
    name: "Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_d67de8c9-902c-4f11-a140-f6d0ac1e1dbc.jpg?v=1679086680&width=550",
    id: 202,
    originalPrice: 1309,
    discountedPrice: 113,
    name: "Daily Glow Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1WhiteBG.jpg?v=1666951621&width=550",
    id: 203,
    originalPrice: 1175,
    discountedPrice: 999,
    name: "Deep Pore Cleansing Regime",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Milky-Brew-Primary-Image-Option-2.jpg?v=1676272300&width=550",
    id: 204,
    originalPrice: 229,
    discountedPrice: 195,
    name: "Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1copy2_133a81ec-9aa6-4325-9598-5cccbeebe767.jpg?v=1679491518&width=550",
    id: 205,
    originalPrice: 399,
    discountedPrice: 339,
    name: "Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_cd1d318a-916d-46c2-8de5-e999a947b75b.jpg?v=1666169735&width=550",
    id: 206,
    originalPrice: 448,
    discountedPrice: 380,
    name: "Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
  },
];

// append to this div
let faceCareContainer = document.getElementById("faceCareContainer");

// Iterate over the faceCareData array and update the UI
faceCareData.forEach((item) => {
  // Create a div element for each face care item
  let faceCareItem = document.createElement("div");
  faceCareItem.classList.add("face-care-item"); // Add a CSS class for styling

  // Create an img element for the face care item image
  let img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  faceCareItem.appendChild(img); // Append the image to the face care item

  // Create a p element for the face care item name
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = item.name;
  faceCareItem.appendChild(nameParagraph); // Append the name paragraph to the face care item

  // Create a p element for the original price
  let originalPriceParagraph = document.createElement("p");
  originalPriceParagraph.textContent = "Original Price: $" + item.originalPrice;
  faceCareItem.appendChild(originalPriceParagraph); // Append the original price paragraph to the face care item

  // Create a p element for the discounted price
  let discountedPriceParagraph = document.createElement("p");
  discountedPriceParagraph.textContent =
    "Discounted Price: $" + item.discountedPrice;
  faceCareItem.appendChild(discountedPriceParagraph); // Append the discounted price paragraph to the face care item

  // Create a button for adding to cart
  let addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.dataset.name = item.name; // Set the dataset for the name
  addToCartButton.dataset.price = item.discountedPrice; // Set the dataset for the price
  addToCartButton.classList.add("add-to-cart-btn"); // Add a CSS class for styling
  addToCartButton.addEventListener("click", () => addToCart(item)); // Add click event listener to add item to cart
  faceCareItem.appendChild(addToCartButton); // Append the button to the face care item

  // Append the face care item to the faceCareContainer
  faceCareContainer.appendChild(faceCareItem);
});

// Function to add item to cart
function addToCart(item) {
  // Retrieve cart items from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Push the item to the cart array
  cart.push(item);
  // Update localStorage with the updated cart array
  localStorage.setItem("cart", JSON.stringify(cart));
  // Update cart count in the navbar
  updateCartCount(cart.length);
}

// Function to update cart count in the navbar
function updateCartCount(count) {
  let cartCountElement = document.getElementById("cartCount");
  cartCountElement.textContent = count;
}
