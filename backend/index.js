import express from "express";
import mysql from "mysql";

const app = express();

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlroot',
    database: 'test'
})

app.use(express.json());

app.get("/", (request, response) => {
    response.json("Hello from backedn");
})

app.get("/books", (request, response) => {
    const query = "SELECT * FROM books";
    db.query(query, (error, data) => {
        if (error) response.json("There is an error");
        return response.json(data);
    })
})

app.listen(8000, () => {
    console.log('Connected');
})