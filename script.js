let products = [
    { id: 1, name: "Thẻ Magic", price: 100, category: "Magic", image: "./images/product-1.jpg" },
    { id: 2, name: "Thẻ Yu-Gi-Oh", price: 200, category: "Yu-Gi-Oh", image: "./images/product-2.jpg" },
    { id: 3, name: "Thẻ Pokemon", price: 150, category: "Pokemon", image: "./images/product-3.jpg" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hiển thị sản phẩm
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Giá: ${product.price} VNĐ</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Tìm kiếm sản phẩm
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
});

// Lọc sản phẩm theo danh mục
function filterByCategory(category) {
    const filteredProducts = category === 'All' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// Thêm vào giỏ hàng
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const itemInCart = cart.find(item => item.id === id);
    
    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Giá: ${item.price} VNĐ</p>
            <div>
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})">Xóa</button>
        `;
        cartList.appendChild(cartItem);
    });
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) item.quantity = 1; // Không cho phép số lượng nhỏ hơn 1
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

// Cập nhật số lượng trong giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Hiển thị giỏ hàng khi trang tải
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCart();
    updateCartCount();
});
