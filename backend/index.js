import express from "express";
import mysql from "mysql";

const app = express();

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
})

app.use(express.json());

app.get("/", (request, response) => {
    response.json("Hello from backedn");
})

app.listen(8000, () => {
    console.log('Connected');
})