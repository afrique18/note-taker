// Dependencies
const express = require("express");

// Sets up Express app 
const app = express();
const PORT = process.env.PORT || 3001

// handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));


app.use("./routes/html-Rroutes");
app.use("./routes/api-Routes");

// Starts server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
