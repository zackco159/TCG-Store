let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm để hiển thị giỏ hàng
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Xóa nội dung cũ

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h2>${item.name}</h2>
            <p>Giá: ${item.price} VNĐ</p>
        `;
        cartList.appendChild(cartItem);
    });
}

// Gọi hàm hiển thị giỏ hàng khi trang tải
displayCart();
