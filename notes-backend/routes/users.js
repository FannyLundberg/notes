var express = require('express');
var router = express.Router();

const mySql = require("mysql2");

// Kontrollera om användarnamn och lösenord stämmer överens
router.post("/", function(req, res) {

  req.app.locals.con.connect((error) => {
    if (error) {
      console.log(error)
    }

    let sql = `
      SELECT * FROM users
    `;

    req.app.locals.con.query(sql, (error, users) => {
      if (error) {
        console.log(error)
      }

      let existingUser = users.find((user) => {
        return user.userName == req.body.userName && user.password == req.body.password
      })

      if (existingUser) {
        res.json({ "message": "success", "userId": existingUser._id });
      } else {
        res.json({ "message": "fail"});
      }
      
    })
  })
});

module.exports = router;
