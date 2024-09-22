let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
    updateCartCount();
    displayCart();
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Hiển thị giỏ hàng trong popup
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Giỏ hàng trống</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <h4>${item.name}</h4>
                <p>Giá: ${item.price} VNĐ</p>
                <p>Số lượng: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Xóa</button>
            `;
            cartList.appendChild(itemDiv);
        });
    }

    updateCartCount();
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
    window.location.href = 'checkout.html';
}

// Bật/tắt giỏ hàng popup
function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

// Gọi hàm hiển thị giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});
