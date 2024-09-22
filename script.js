let products = [];

// Hiển thị danh sách sản phẩm
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

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

// Tìm kiếm sản phẩm
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const productDivs = document.querySelectorAll('.product');
    
    productDivs.forEach(productDiv => {
        const name = productDiv.querySelector('h2').textContent.toLowerCase();
        productDiv.style.display = name.includes(query) ? 'block' : 'none';
    });
});

// Tải dữ liệu sản phẩm
document.addEventListener('DOMContentLoaded', () => {
    products = [
        { id: 1, name: 'Sản phẩm 1', price: 100000, image: 'images/product-1.jpg' },
        { id: 2, name: 'Sản phẩm 2', price: 200000, image: 'images/product-2.jpg' },
        { id: 3, name: 'Sản phẩm 3', price: 300000, image: 'images/product-3.jpg' }
    ];
    displayProducts();
});
