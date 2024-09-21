const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/tcg-store', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
});

const Card = mongoose.model('Card', cardSchema);

app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).send('Lỗi lấy dữ liệu thẻ bài');
    }
});

app.post('/cards', async (req, res) => {
    try {
        const newCard = new Card(req.body);
        await newCard.save();
        res.json(newCard);
    } catch (error) {
        res.status(500).send('Lỗi thêm thẻ bài');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
