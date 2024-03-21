// Problem 7
function findDetails(foodDeliveryService) {
  const { restaurants } = foodDeliveryService;
  const { pizza, burger } = restaurants.italianCorner.menu;
  return {
    pizzaAvailable: pizza.available,
    burgerAvailable: burger.available,
    pizzaPrice: pizza.price,
    burgerPrice: burger.price,
  };
}

function calculateTotalRevenue(foodDeliveryService) {
  const { restaurants } = foodDeliveryService;
  let totalRevenue = 0;
  for (const restaurant of Object.values(restaurants)) {
    for (const order of restaurant.orders) {
      totalRevenue += order.total;
    }
  }
  return `Total Revenue: ${totalRevenue}`;
}

// Problem 8
function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  return {
    fullName: `${firstName} ${lastName}`,
    age,
    hobbies,
    getInfo() {
      return `${this.fullName}'s age is ${this.age}.`;
    },
    getResult() {
      const avgMark =
        marksArray.reduce((acc, cur) => acc + cur, 0) / marksArray.length;
      return avgMark >= 50 ? "Result: PASS" : "Result: FAIL";
    },
  };
}
