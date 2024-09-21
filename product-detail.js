const product = {
    id: 'product1',
    name: 'Tên Sản Phẩm',
    price: 100000,
    image: './images/product-1.jpg'
};

document.getElementById('product-image').src = product.image;
document.getElementById('product-name').innerText = product.name;
document.getElementById('product-price').innerText = `${product.price} VNĐ`;

document.getElementById('add-to-cart').addEventListener('click', () => {
    addToCart(product);
});
