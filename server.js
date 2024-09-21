const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình express để phục vụ các tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa các đường dẫn
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Bắt lỗi không tìm thấy
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
