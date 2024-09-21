// Giả lập dữ liệu sản phẩm cho chi tiết sản phẩm
const product = {
    id: 1,
    name: "Sản phẩm 1",
    price: 100000,
    description: "Mô tả sản phẩm 1",
    image: "./images/product-1.jpg"
};

// Hiển thị chi tiết sản phẩm
function displayProductDetail() {
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" />
        <p>Giá: ${product.price} VNĐ</p>
        <p>${product.description}</p>
        <button onclick="addToCart(product)">Thêm vào giỏ hàng</button>
    `;
}

document.addEventListener('DOMContentLoaded', displayProductDetail);
