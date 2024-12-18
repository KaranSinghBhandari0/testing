require('dotenv').config();
const express = require('express');
const connectDB = require('./connectDB');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
	connectDB();
});

app.get('/', (req, res) => {
    res.send('this is root');
});

// account routes
app.use("/user", require('./routes/auth'));