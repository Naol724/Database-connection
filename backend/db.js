const mysql = require("mysql")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "school"
});

db.connect((err) =>{
  if(err){
    console.log("Database connection error:", err);
    return;
  }
  console.log("Connected to mysql(MAMP)");
})

module.exports = db;