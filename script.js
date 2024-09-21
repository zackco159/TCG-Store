// Dữ liệu sản phẩm mẫu
const products = [
    { id: 'product1', name: 'Sản phẩm 1', price: 100000, image: './images/product-1.jpg' },
    { id: 'product2', name: 'Sản phẩm 2', price: 200000, image: './images/product-2.jpg' },
    { id: 'product3', name: 'Sản phẩm 3', price: 150000, image: './images/product-3.jpg' }
];

// Hàm để hiển thị sản phẩm
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; // Xóa nội dung cũ

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Giá: ${product.price} VNĐ</p>
            <button class="btn-add" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Thêm vào giỏ</button>
        `;
        productList.appendChild(productDiv);
    });

    // Thêm sự kiện cho nút "Thêm vào giỏ"
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            addToCart({ id, name, price });
        });
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

// Hiển thị sản phẩm khi trang tải
displayProducts();
