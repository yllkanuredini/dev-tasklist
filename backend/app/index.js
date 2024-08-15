const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise"); // Using promise-based API

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

const pool = mysql.createPool({
  host: "mysql",
  user: "my_user",
  password: "my_password",
  database: "my_database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// API endpoint to fetch bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM bookings");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).send("Internal Server Error");
  }
});

// API endpoint to fetch a booking by its id
app.get("/booking/:id", async (req, res) => {
  const bookingId = req.params.id;
  try {
    const [rows] = await pool.query("SELECT * FROM bookings WHERE id = ?", [
      bookingId,
    ]);
    if (rows.length === 0) {
      res.status(404).send("Booking not found");
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

// API endpoint to add a booking
app.post("/api/bookings", async (req, res) => {
  const { service, doctor_name, start_time, end_time, date } = req.body;
  console.log("req.body -> ", req.body);
  const insertQuery = `INSERT INTO bookings (service, doctor_name, start_time, end_time, date) VALUES (?, ?, ?, ?, ?)`;
  try {
    await pool.query(insertQuery, [
      service,
      doctor_name,
      start_time,
      end_time,
      date,
    ]);
    res.status(201).send("Booking inserted successfully");
  } catch (error) {
    console.error("Error inserting booking:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
