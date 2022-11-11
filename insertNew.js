const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  const dbo = db.db("mydbTest");

  const myobj = { id: 5, username: "nvdinh185", password: "123456", created_time: Date.now() };
  const myobj1 = undefined;
  try {
    const inserted = await new Promise((resolve, reject) => {
      dbo.collection("customers").insertOne(myobj1, function (err, res) {
        if (err) {
          console.log("Err: " + err);
          reject("Error..." + err);
        } else {
          resolve(res.insertedCount);
        }
        console.log("completed");
        db.close();
      });
    })
    console.log(inserted);
  } catch (e) {
    console.log("Lỗi: " + e);
  }
});