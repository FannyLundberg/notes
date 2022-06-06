const { text } = require('express');
var express = require('express');
var router = express.Router();

const mySql = require("mysql2");


// Kunna posta ett nytt dokument
router.post("/", function(req, res) {

    console.log(req.body.title)
    console.log(req.body.text)

    req.app.locals.con.connect((error) => {
        if (error) {
            console.log(error)
        }
    
        let sql = `
            INSERT INTO documents (title, text)
            VALUES ('${req.body.title}', '${req.body.text}')
        `;
    
        req.app.locals.con.query(sql, (error, documents) => {
            if (error) {
                console.log(error)
            }
            
            res.json({"documents": documents});
            console.log(documents)
        })
    })
});


// Hämta alla dokument
router.get("/", function(req, res) {

    req.app.locals.con.connect((error) => {
        if (error) {
            console.log(error)
        }
    
        let sql = `
            SELECT * FROM documents
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


// Kunna uppdatera ett specifikt dokument
router.put("/", function(req, res) {

    console.log(req.body.title, req.body.text)

    req.app.locals.con.connect((error) => {
        if (error) {
            console.log(error)
        }

        let sql = `
            UPDATE documents 
            SET text = "${req.body.text}"
            WHERE title = "${req.body.title}"
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


// Kunna visa ett specifikt dokument
router.post("/read", function(req, res) {

    console.log(req.body.title)

    req.app.locals.con.connect((error) => {
        if (error) {
            console.log(error)
        }
    
        let sql = `
            SELECT * FROM documents WHERE title="${req.body.title}"
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