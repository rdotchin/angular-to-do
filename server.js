const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "app" directory
app.use(express.static(__dirname + "/app"));

app.listen(PORT, function(){
   console.log("listening on " + PORT);
});