const express = require("express")

// this sets up the basic properties for our express server
const path = require("path");

const app = express()
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points us to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
