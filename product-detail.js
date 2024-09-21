document.getElementById('add-to-cart').addEventListener('click', function() {
    const product = {
        id: 'product1', // ID sản phẩm
        name: 'Tên Sản Phẩm',
        price: 100000
    };

    addToCart(product);
});
