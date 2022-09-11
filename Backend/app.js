const express = require("express");
const mongoose =require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) // localhost:5000/books

// app.use('/', (req, res, next) => {
//     res.send("This is our starting app");
// });

mongoose.connect(
    "mongodb+srv://itstimeup:1231234@cluster0.anb1rzu.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));