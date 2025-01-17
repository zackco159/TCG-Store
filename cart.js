// Lưu trữ sản phẩm trong giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(item => item.id === productId); // Lấy sản phẩm theo ID
    if (!product) return; // Nếu không tìm thấy sản phẩm, dừng lại

    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1; // Thêm thuộc tính số lượng
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
    updateCartCount();
    displayCart(); // Cập nhật giỏ hàng
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

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Giỏ hàng trống!</p>';
        updateCartCount(); // Đảm bảo số lượng giỏ hàng được cập nhật
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Giá: ${item.price} VNĐ</p>
            <p>Số lượng: 
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </p>
            <button onclick="removeFromCart(${item.id})">Xóa</button>
        `;
        cartList.appendChild(itemDiv);
    });

    updateCartCount();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (typeof change === 'number') {
            item.quantity += change;
            if (item.quantity < 1) item.quantity = 1; // Đảm bảo số lượng không âm
        } else {
            item.quantity = parseInt(change) || 1; // Nếu không hợp lệ, gán là 1
        }
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

// Gọi hàm hiển thị giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});
