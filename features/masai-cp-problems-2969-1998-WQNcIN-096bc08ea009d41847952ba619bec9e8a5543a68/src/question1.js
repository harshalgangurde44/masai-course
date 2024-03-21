function CreateProduct1(product_name, brand, reviews, price, rating) {
  this.product_name = product_name;
  this.brand = brand;
  this.reviews = reviews;
  this.price = price;
  this.rating = rating;
}

CreateProduct1.prototype.getPrice = function () {
  return this.price;
};

CreateProduct1.prototype.increasePrice = function (amount) {
  this.price += amount;
  return this.price;
};

CreateProduct1.prototype.decreasePrice = function (amount) {
  this.price -= amount;
  return this.price;
};

CreateProduct1.prototype.isExpensive = function () {
  return this.price >= 1000;
};

// Problem 2
function CreateProduct2(product_name, brand, reviews, price, rating) {
  this.product_name = product_name;
  this.brand = brand;
  this.reviews = reviews;
  this.price = price;
  this.rating = rating;
}

CreateProduct2.prototype.getPrice = function () {
  return this.price;
};

CreateProduct2.prototype.increasePrice = function (amount) {
  this.price += amount;
  return this.price;
};

CreateProduct2.prototype.decreasePrice = function (amount) {
  this.price -= amount;
  return this.price;
};

CreateProduct2.prototype.isExpensive = function () {
  return this.price >= 1000;
};

// Problem 3
class CreateProduct3 {
  constructor(product_name, brand, reviews, price, rating) {
    this.product_name = product_name;
    this.brand = brand;
    this.reviews = reviews;
    this.price = price;
    this.rating = rating;
  }

  getPrice() {
    return this.price;
  }

  increasePrice(amount) {
    this.price += amount;
    return this.price;
  }

  decreasePrice(amount) {
    this.price -= amount;
    return this.price;
  }

  isExpensive() {
    return this.price >= 1000;
  }
}

// Problem 4
function findTotal(arr) {
  return arr.map((obj) => {
    let total = Object.values(obj.subjects)
      .filter((val) => typeof val === "object")
      .reduce((acc, cur) => acc + Object.values(cur)[0], 0);
    obj.total = total;
    return obj;
  });
}

// Problem 5
function removeKeyValuePair(user, key) {
  const { [key]: removedKey, ...rest } = user;
  return rest;
}

// Problem 6
function massageArray(inputArray) {
  const areas = [
    { id: 1, name: "British" },
    { id: 2, name: "Malaysian" },
  ];
  const categoriesDirectory = {
    3: "Dessert",
    1: "MainCourse",
    2: "Starter",
  };

  return inputArray.map((item) => ({
    productId: item.idMeal,
    productTitle: item.strMeal,
    Category: categoriesDirectory[item.Category],
    Area: areas.find((area) => area.id === item.Area).name,
    Ingredients: Object.entries(item)
      .filter(([key, value]) => key.startsWith("strIngredient") && value)
      .map(([key, value], index) => ({
        ingredient: value,
        measure: item[`strMeasure${index + 1}`],
      })),
  }));
}
