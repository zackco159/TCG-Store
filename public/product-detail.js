// Dữ liệu sản phẩm mẫu
const products = [
    { id: 1, name: "Sản phẩm 1", price: 100, image: "./images/product-1.jpg" },
    { id: 2, name: "Sản phẩm 2", price: 200, image: "./images/product-2.jpg" },
    { id: 3, name: "Sản phẩm 3", price: 150, image: "./images/product-3.jpg" },
];

// Hàm hiển thị sản phẩm
function displayProduct(productId) {
    const product = products.find(p => p.id === productId);
    const productDetail = document.getElementById('product-detail');

    if (product) {
        productDetail.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Giá: ${product.price} VNĐ</p>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        `;
    } else {
        productDetail.innerHTML = '<p>Sản phẩm không tồn tại!</p>'; // Thông báo khi sản phẩm không tìm thấy
    }
}

// Gọi hàm hiển thị sản phẩm khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    displayProduct(productId);
});
