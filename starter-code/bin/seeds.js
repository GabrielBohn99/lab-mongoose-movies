const mongoose = require("mongoose");
// const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const dbName = "fabricio";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebrities = [
//   {
//     name: "Scarlett Johansson",
//     occupation: "actress",
//     catchPhrase:
//       "I hope they make a video game of me. At least i would not have any cellulite then"
//   },
//   {
//     name: "Arnold Schwarzenegger",
//     occupation: "famous",
//     catchPhrase: "I'll be back"
//   },
//   {
//     name: "Xuxa Meneghel",
//     occupation: "TV host",
//     catchPhrase: "Não existe homem para mim no Brasil"
//   }
// ];

const movies = [
  {
    title: "Back to the future",
    genre: "Sci-fi",
    plot: "Crazy scient create travel time machine."
  },
  {
    title: "Exterminator",
    genre: "Sci-fi",
    plot:
      "When the world in the future is lost the only hope is a killer robot comming to the past and eliminating NetScape."
  },
  {
    title: "007 SkyFall",
    genre: "action",
    plot: "Secret agent is back to active to save the world."
  }
];

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
