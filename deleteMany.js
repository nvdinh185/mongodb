var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydbTest");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function (err, obj) {
    if (err) throw err;
    console.log("number row deleted: ", obj.deletedCount);
    db.close();
  });
});