// 1. Total revenue, total quantity sold, and average price per unit for each product, sorted by total revenue in descending order:
// javascript

db.sales.aggregate([
  {
    $group: {
      _id: "$product",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      totalQuantity: { $sum: "$quantity" },
      avgPricePerUnit: { $avg: "$price" },
    },
  },
  {
    $sort: { totalRevenue: -1 },
  },
]);
//

// 2.Average age and gender distribution of a user's friends, sorted by the number of friends in descending order:
// javascript
db.users.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1,
      gender: 1,
      numFriends: { $size: "$friends" },
      friends: 1,
    },
  },
  {
    $unwind: "$friends",
  },
  {
    $lookup: {
      from: "users",
      localField: "friends",
      foreignField: "name",
      as: "friendDetails",
    },
  },
  {
    $unwind: "$friendDetails",
  },
  {
    $group: {
      _id: "$name",
      avgFriendAge: { $avg: "$friendDetails.age" },
      genderDistribution: { $push: "$friendDetails.gender" },
      numFriends: { $first: "$numFriends" },
    },
  },
  {
    $unwind: "$genderDistribution",
  },
  {
    $group: {
      _id: { name: "$_id", numFriends: "$numFriends" },
      avgFriendAge: { $first: "$avgFriendAge" },
      genderDistribution: { $push: "$genderDistribution" },
    },
  },
  {
    $project: {
      _id: 0,
      name: "$_id.name",
      avgFriendAge: 1,
      numFriends: "$_id.numFriends",
      genderDistribution: 1,
    },
  },
  {
    $sort: { numFriends: -1 },
  },
]);

// Average rating for each genre, sorted by average rating in descending order:
// javascript
db.movies.aggregate([
  {
    $unwind: "$ratings",
  },
  {
    $group: {
      _id: "$genre",
      avgRating: { $avg: "$ratings.score" },
    },
  },
  {
    $sort: { avgRating: -1 },
  },
]);

// Total revenue and number of orders for each customer, sorted by total revenue in descending order, including customer's name by looking it up in a separate collection:
// javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customerDetails",
    },
  },
  {
    $unwind: "$customerDetails",
  },
  {
    $group: {
      _id: "$customer_id",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      totalOrders: { $sum: 1 },
      customerName: { $first: "$customerDetails.name" },
    },
  },
  {
    $sort: { totalRevenue: -1 },
  },
]);

// Total amount of orders placed by each customer for a given date range:
// javascript
db.orders.aggregate([
  {
    $match: {
      order_date: {
        $gte: ISODate("2022-01-01T00:00:00Z"),
        $lte: ISODate("2022-01-31T23:59:59Z"),
      },
    },
  },
  {
    $group: {
      _id: "$customer_id",
      totalAmount: { $sum: "$total_amount" },
    },
  },
]);

// Number of events of each type triggered by each user for a given date range:
// javascript
db.events.aggregate([
  {
    $match: {
      event_date: {
        $gte: ISODate("2022-01-01T00:00:00Z"),
        $lte: ISODate("2022-01-31T23:59:59Z"),
      },
    },
  },
  {
    $group: {
      _id: { user_id: "$user_id", event_type: "$event_type" },
      count: { $sum: 1 },
    },
  },
  {
    $group: {
      _id: "$_id.user_id",
      events: { $push: { event_type: "$_id.event_type", count: "$count" } },
    },
  },
]);

// Total revenue generated by each product for a given date range:
// javascript
db.sales.aggregate([
  {
    $match: {
      sale_date: {
        $gte: ISODate("2022-01-01T00:00:00Z"),
        $lte: ISODate("2022-01-31T23:59:59Z"),
      },
    },
  },
  {
    $group: {
      _id: "$product_id",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
]);