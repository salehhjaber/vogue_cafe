function viewDetails(title, description, price, image) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = '$' + price;
    document.getElementById('modal-image').src = image;
    $('#productModal').modal('show');
}
