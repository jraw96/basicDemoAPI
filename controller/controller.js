// An example package to import
//const http = require('request')


// Use a global variable array to simulate a database. For Demo purposes only, RBC does not recommend this strategy for projects
// with sensitive or private information
var myTotallyRealDatabase = ["Memes", "Youtube Videos", "League of Legends"]

// Backend function for getting items
module.exports.getMyItems = function (req, res){

  // Create a response object
  var myResponseObj = {}

  // Save our database information into the object
  myResponseObj.myItems = myTotallyRealDatabase

  // Send it back to the route it came from, to be send back to the front end
  res.send(myTotallyRealDatabase)
}

// Backend function for inserting an item
module.exports.insertMyItem = function (req, res){

  // Extract information from request
  var myNewItem = req.body.item

  // Save into database
  myTotallyRealDatabase.push(myNewItem)

  // Create object and put our newly updated database into it
  var myObj = {}
  myObj.myItems = myTotallyRealDatabase

  // Send back to route it came from, then back to front end
  res.send(myObj)
}
  

// Perform any background functions and work here 
module.exports.deleteMyItem = function (req, res){

  //Extract inforation from request object
  var deleteItem = req.body.item

  // Loop through the database until we find the delete item that matches our req object. Then remove it. 
  for (var i = 0; i <= myTotallyRealDatabase.length - 1; i++){
    if(myTotallyRealDatabase[i].localeCompare(deleteItem) === 0){
        myTotallyRealDatabase.splice(i, 1)
    }
  }
  
    // Create object and put our newly updated database into it
    var myObj = {}
    myObj.myItems = myTotallyRealDatabase
  
    // Send back to route it came from, then back to front end
    res.send(myObj)
}


