// api call functions linking our routes to a series of data sources
// these data sources hold arrays of information on table-data, waitinglist
// in each of the cases below when a user vists a link 
// ex: localhost:PORT/api/admin... they will be shown a JSON of the data in the table

const { appendFile } = require("fs");
let tableData = require("../data/tableData");
let waitlistData = require("../data/waitingListData");

// ROUTING
// API GET REQUESTS go HERE
// below will handle when users visit a page
// in each of the below cases 
module.exports = function(app) {
    app.get("api/tables", function(req, res) {
        res.json(tabledata)
    });

    app.get("api/waitlist", function(req, res) {
        res.json(tabledata)
    });
}

app.post("/api/tables", function(req, res) {
    //servers respond to requests and let users know if we have table or not :/
})

if ()