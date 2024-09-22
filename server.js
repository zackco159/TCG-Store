const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Chứa file tĩnh như HTML, CSS, JS

// Dữ liệu người dùng
let users = [];

// Đăng ký người dùng
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    users.push({ username, email, password });
    res.send('Đăng ký thành công');
});

// Đăng nhập người dùng
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send('Đăng nhập thành công');
    } else {
        res.status(401).send('Sai thông tin đăng nhập');
    }
});

app.listen(port, () => console.log(`Server đang chạy trên cổng ${port}`));
