// Dữ liệu sản phẩm
const products = [
    { id: 1, name: "Sản phẩm 1", price: 100 },
    { id: 2, name: "Sản phẩm 2", price: 200 },
    { id: 3, name: "Sản phẩm 3", price: 150 }
];

// Lưu trữ sản phẩm trong giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm hiển thị sản phẩm
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

    // Thêm sự kiện cho nút "Thêm vào giỏ"
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.id;
            const productName = event.target.dataset.name;
            const productPrice = event.target.dataset.price;

            addToCart({ id: productId, name: productName, price: productPrice });
        });
    });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    const existingProduct = cart.find(item => item.id == product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1; // Thêm thuộc tính số lượng
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
    updateCartCount();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Xóa nội dung cũ

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Giá: ${item.price} VNĐ</p>
            <p>Số lượng: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)"></p>
            <button onclick="removeFromCart('${item.id}')">Xóa</button>
        `;
        cartList.appendChild(itemDiv);
    });

    updateCartCount();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Thanh toán
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    window.location.href = 'checkout.html'; // Chuyển đến trang thanh toán
}

// Bật tắt giỏ hàng
function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

// Gọi hàm hiển thị sản phẩm và giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
});
