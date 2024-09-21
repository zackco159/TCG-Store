document.addEventListener('DOMContentLoaded', () => {
    const productDetail = document.getElementById('product-detail');

    const product = {
        id: '1',
        name: 'Thẻ Bài XYZ',
        price: 100000,
        image: './images/product-xyz.jpg',
        description: 'Thẻ bài hiếm với sức mạnh đặc biệt.'
    };

    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Giá: ${product.price} VNĐ</p>
        <button onclick="addToCart(${JSON.stringify(product)})">Thêm vào giỏ hàng</button>
    `;
});
