let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

function displayReviews(productId) {
    const reviewList = document.getElementById('reviews-list');
    reviewList.innerHTML = '';

    const productReviews = reviews[productId] || [];
    productReviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.innerHTML = `<p>${review}</p>`;
        reviewList.appendChild(reviewDiv);
    });
}

function addReview() {
    const reviewText = document.getElementById('review-text').value;
    if (!reviewText) return;

    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
    if (!reviews[productId]) reviews[productId] = [];

    reviews[productId].push(reviewText);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    displayReviews(productId);
}

// Hiển thị đánh giá khi trang tải
document.addEventListener('DOMContentLoaded', () => {
    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
    displayReviews(productId);
});
