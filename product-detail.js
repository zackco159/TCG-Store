const products = [
    { id: 1, name: "Sản phẩm 1", price: 100, image: "./images/product-1.jpg" },
    { id: 2, name: "Sản phẩm 2", price: 200, image: "./images/product-2.jpg" },
    { id: 3, name: "Sản phẩm 3", price: 150, image: "./images/product-3.jpg" },
];

const productId = new URLSearchParams(window.location.search).get('id');
const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById("product-detail").innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>Giá: ${product.price} VNĐ</p>
        <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
    `;
} else {
    document.getElementById("product-detail").innerHTML = `<p>Sản phẩm không tồn tại.</p>`;
}
