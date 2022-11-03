const express = require('express');
const mysql= require('mysql');
const app = express();


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cruddatabase'
})

app.get('/first', (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie')"
    db.query(sqlInsert, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Data inserted")
    })
    
})

app.listen(3001, ()=> {
    console.log("running on port 3001")
})