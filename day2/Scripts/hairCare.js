// data to map
const hairCareData = [
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Cappuccino-Coffee-Shampoo.jpg?v=1644475260&width=550",
    id: 301,
    originalPrice: 499,
    discountedPrice: 424,
    name: "Anti-Dandruff Cappuccino Shampoo with Natural AHA - 250ml",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_13872b7d-0760-471f-8011-983191fa1b61.jpg?v=1634705420&width=550",
    id: 302,
    originalPrice: 1029,
    discountedPrice: 875,
    name: "Coffee Hair Boost & Hair Fall Control Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_e1dd14f3-fb54-4622-bd1e-4ebaebf937fd.jpg?v=1637243621&width=550",
    id: 303,
    originalPrice: 689,
    discountedPrice: 586,
    name: "De-stress Hair Oiling Routine",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_ec1f3313-1406-417f-86cf-b5f7a3d8520d.jpg?v=1636548356&width=550",
    id: 304,
    originalPrice: 1229,
    discountedPrice: 1045,
    name: "Cappuccino- Anti-Dandruff Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_2.jpg?v=1646893970&width=550",
    id: 305,
    originalPrice: 599,
    discountedPrice: 509,
    name: "Intense Damage Repair Latte Hair Mask with Coconut Milk & Shea Butter - 200g",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
    id: 306,
    originalPrice: 399,
    discountedPrice: 339,
    name: "Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
  },
];

// append to this div
let hairCareContainer = document.getElementById("hairCareContainer");

// Iterate over the hairCareData array and create HTML elements for each item
hairCareData.forEach((item) => {
  // Create a div element for the hair care item
  let hairCareItem = document.createElement("div");
  hairCareItem.classList.add("hair-care-item"); // Add a CSS class for styling

  // Create an img element for the hair care item image
  let img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  hairCareItem.appendChild(img); // Append the image to the hair care item

  // Create a p element for the hair care item name
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = item.name;
  hairCareItem.appendChild(nameParagraph); // Append the name paragraph to the hair care item

  // Create a p element for the original price
  let originalPriceParagraph = document.createElement("p");
  originalPriceParagraph.textContent = "Original Price: $" + item.originalPrice;
  hairCareItem.appendChild(originalPriceParagraph); // Append the original price paragraph to the hair care item

  // Create a p element for the discounted price
  let discountedPriceParagraph = document.createElement("p");
  discountedPriceParagraph.textContent =
    "Discounted Price: $" + item.discountedPrice;
  hairCareItem.appendChild(discountedPriceParagraph); // Append the discounted price paragraph to the hair care item

  // Create a button for adding to cart
  let addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.dataset.name = item.name; // Set the dataset for the name
  addToCartButton.dataset.price = item.discountedPrice; // Set the dataset for the price
  addToCartButton.classList.add("add-to-cart-btn"); // Add a CSS class for styling
  hairCareItem.appendChild(addToCartButton); // Append the button to the hair care item

  // Append the hair care item to the hairCareContainer
  hairCareContainer.appendChild(hairCareItem);
});
