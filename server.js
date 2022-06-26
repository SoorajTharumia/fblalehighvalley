require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI || 'https://fblaserver.herokuapp.com/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (!err) {
        console.log('MongoDB connected successfully');}
    else {
        console.log('Error in connecting to MongoDB');}
});

const attractionSchema = new mongoose.Schema({
    name: String, cuisine: String, address: String, price: Number,
    website: String, category: String, phone_number: String, tickets: String,
}, {collection: 'attractions'});

const Attractions = mongoose.model('Attractions', attractionSchema);

app.get("/", (req, res) => {
    Attractions.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log("Server is running on port 3001");
});
