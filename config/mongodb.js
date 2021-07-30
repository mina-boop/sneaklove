const mongoose = require("mongoose");
require("dotenv");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/sneakerlove";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    mongoose.connection.on("connected", () =>
      console.log("yay mongodb connected :)")
    );
  })
  .catch((err) => {
    console.log("nay db error sorry :(");
  });

// mongoose.connection.on("connected", () =>
//   console.log("yay mongodb connected :)")
// );

// mongoose.connection.on("error", () => console.log("nay db error sorry :("));
