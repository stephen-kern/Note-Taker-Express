// include packages!
const express = require('express');
const fs = require('fs');
const path = require('path');

// initialize app and set up port
const app = express();
const PORT = process.env.PORT || 3400;

// include other routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// parse all url encoded bodies
app.use(express.urlencoded({ extended: true }));

// parse all JSON payloads
app.use(express.json());

// allow html to use linked files
app.use(express.static("public"));

// route for notes api
app.use("/api", apiRoutes);

// route for index page
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API is now on port ${PORT}`)
});