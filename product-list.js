// Tạo một file mới cho danh sách sản phẩm
const products = [
    { id: 1, name: "Sản phẩm 1", price: 100 },
    { id: 2, name: "Sản phẩm 2", price: 200 },
    { id: 3, name: "Sản phẩm 3", price: 150 }
];

// Hàm để hiển thị danh sách sản phẩm
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Xóa nội dung cũ

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Giá: ${product.price} VNĐ</p>
            <button class="btn-add" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Thêm vào giỏ</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Gọi hàm hiển thị sản phẩm khi trang tải
displayProducts();
