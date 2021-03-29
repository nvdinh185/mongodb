var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { id: 154, name: 'Chocolate Heaven' },
    { id: 155, name: 'Tasty Lemons' },
    { id: 156, name: 'Vanilla Dreams' }
  ];
  dbo.collection("products").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});