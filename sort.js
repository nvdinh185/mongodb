var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydbTest");
  var sortBy = { name: 1 };
  dbo.collection("customers").find().sort(sortBy).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});