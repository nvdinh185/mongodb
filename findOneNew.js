const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  const customers = dbo.collection("customers");

  try {
    const res = await customers.findOne({ username1: 'nvdinh123' });
    console.log("res: ", res);

    customers.findOne({}, function (err, user) {
      console.log("user: ", user);
      // throw new Error("Something went wrong...");
    });
  } catch (err) {
    console.log("Lỗi: ", err);
  } finally {
    // db.close();
  }

  customers.findOne(
    { id: "5" },
    function (err, result) {
      if (err) { console.log(err) }
      if (result) {
        console.log(result);
      } else {
        console.log("Không tìm thấy!");
      }
    });
  db.close();

});