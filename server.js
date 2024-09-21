const express = require('express');
const app = express();
const path = require('path');

// Thiết lập thư mục chứa tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Trang thanh toán
app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'checkout.html'));
});

// Trang chi tiết sản phẩm
app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-detail.html'));
});

// Bắt đầu server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
