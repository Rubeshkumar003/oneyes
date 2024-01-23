import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 3060;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rubesh@2001",
  database: "Gender Equality",
});

db.connect((err, result) => {
  if (err) {
    console.log("error there", err);
  } else {
    console.log("successfully connected");
  }
});