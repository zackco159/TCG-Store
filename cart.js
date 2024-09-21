let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
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
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Giá: ${item.price} VNĐ</p>
            <p>Số lượng: <button onclick="updateQuantity('${item.id}', 'decrement')">-</button>
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)">
            <button onclick="updateQuantity('${item.id}', 'increment')">+</button></p>
            <button onclick="removeFromCart('${item.id}')">Xóa</button>
        `;
        cartList.appendChild(itemDiv);
    });

    updateCartCount();
}

function updateQuantity(id, action) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (action === 'increment') {
            item.quantity++;
        } else if (action === 'decrement' && item.quantity > 1) {
            item.quantity--;
        } else if (typeof action === 'number') {
            item.quantity = parseInt(action);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    window.location.href = 'checkout.html';
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});
