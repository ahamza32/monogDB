const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please check your data entry no name"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "dragon fruit",
  rating: 2,
  review: "pretty solid as a fruit.",
});

const human = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("person", human);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 4,
  review: "you try",
});

const coconut = new Fruit({
  name: "cocunut",
  rating: 2,
  review: "love the water",
});

// pineapple.save();

const person1 = new Person({
  name: "john",
  age: 11,
  favoriteFruit: coconut,
});

// person1.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (name) {
      console.log(name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "6324fe7711f9da3328235d09" },
//   { name: "peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("updated");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "6324fe7711f9da3328235d09" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else console.log("an item has been removed");
// });

// Person.deleteMany({ name: "alamin" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted many");
//   }
// });
