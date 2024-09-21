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
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}
