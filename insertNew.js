var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");


  var myobj = { username: "nvdinh123", password: true, created_time: Date.now() };
  var myobj1;
  try {
    const notes = await new Promise((resolve, reject) => {
      dbo.collection("customers").insertOne(myobj1, function (err, res) {
        if (err) {
          console.log("Err: " + err);
          reject(err);
        } else {
          resolve(res.insertedCount);
        }
        console.log("inserted");
        db.close();
      });
    })
    console.log(notes);
  } catch (e) {
    console.log("Lỗi: " + e);
  }
});