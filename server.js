const express = require('express');
const app = express();
const logger = require("morgan");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;


// Morgan and body-parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));


// Serve static content for the app from the "app" directory
app.use(express.static("app/todo"));

app.listen(PORT, function(){
   console.log("listening on " + PORT);
});

