// Dependencies
const express = require("express");

// Sets up Express app 
const app = express();
const PORT = process.env.PORT || 3001

// handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));

const htmlRoutes = require("./routes/html-routes")
const apiRoutes = require("./routes/api-routes")

app.use(htmlRoutes);
app.use(apiRoutes);

// Starts server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
