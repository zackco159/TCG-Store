// Dữ liệu sản phẩm
const products = [
    { id: 1, name: "Sản phẩm 1", price: 100 },
    { id: 2, name: "Sản phẩm 2", price: 200 },
    { id: 3, name: "Sản phẩm 3", price: 150 }
];

// Hàm để hiển thị sản phẩm
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Xóa nội dung cũ

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Giá: ${product.price} VNĐ</p>
            <button class="btn-add" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Thêm vào giỏ</button>
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

// Mở/đóng giỏ hàng
document.getElementById('cart-btn').addEventListener('click', () => {
    const cartWindow = document.getElementById('cart-window');
    cartWindow.style.display = cartWindow.style.display === 'none' ? 'block' : 'none';
    updateCartDisplay();
});

// Cập nhật giỏ hàng hiển thị
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price} VNĐ</span>
            <button class="remove-btn" data-id="${item.id}">Xóa</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    // Thêm chức năng xóa sản phẩm khỏi giỏ
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            removeFromCart(id);
        });
    });

    // Cập nhật số lượng sản phẩm trong giỏ
    document.getElementById('cart-btn').innerText = `Giỏ Hàng (${cart.length})`;
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Hiển thị sản phẩm khi trang tải
displayProducts();
