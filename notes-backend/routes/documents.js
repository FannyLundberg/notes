var express = require('express');
var router = express.Router();

const mySql = require("mysql2");


// Kunna posta ett nytt dokument
router.post("/", function(req, res) {

    req.app.locals.con.connect((error) => {
        if (error) {
            console.log(error)
        }
    
        let sql = `
            INSERT INTO documents (title, text)
            VALUES ("${req.body.title}", "${req.body.text}")
        `;
    
        req.app.locals.con.query(sql, (error, documents) => {
            if (error) {
            console.log(error)
            }
            
            res.json(documents);
            console.log(documents)
        })
    })
});


module.exports = router;