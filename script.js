const products = [
    { id: 1, name: "Sản phẩm 1", price: 100000 },
    { id: 2, name: "Sản phẩm 2", price: 200000 },
    { id: 3, name: "Sản phẩm 3", price: 150000 }
];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Giá: ${product.price} VNĐ</p>
            <button class="btn-add" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" onclick="addToCart(product)">Thêm vào giỏ hàng</button>
        `;
        productList.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);
