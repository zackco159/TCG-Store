let products = [];

// Hàm để hiển thị sản phẩm
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Xóa nội dung cũ

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Giá: ${product.price} VNĐ</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Hàm tìm kiếm sản phẩm
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const productDivs = document.querySelectorAll('.product');
    
    productDivs.forEach(productDiv => {
        const name = productDiv.querySelector('h2').textContent.toLowerCase();
        productDiv.style.display = name.includes(query) ? 'block' : 'none';
    });
});

// Gọi hàm để lấy dữ liệu sản phẩm từ cart.js
document.addEventListener('DOMContentLoaded', () => {
    products = [
        { id: 1, name: "Sản phẩm 1", price: 100, image: "./images/product-1.jpg" },
        { id: 2, name: "Sản phẩm 2", price: 200, image: "./images/product-2.jpg" },
        { id: 3, name: "Sản phẩm 3", price: 150, image: "./images/product-3.jpg" },
    ];
    displayProducts(); // Hiển thị sản phẩm khi trang tải
});
