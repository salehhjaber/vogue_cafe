function viewDetails(title, description, price, image) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = '$' + price;
    document.getElementById('modal-image').src = image;
    $('#productModal').modal('show');
}
$(document).ready(function() {
    // Retrieve cart items from localStorage if available
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Function to update cart total and indicator
    function updateCartTotal() {
        var total = 0;
        for (var i = 0; i < cartItems.length; i++) {
            total += cartItems[i].price;
        }
        $("#cart-total").text(total.toFixed(2));

        // Update cart indicator
        if (cartItems.length > 0) {
            $("#cart-indicator").removeClass("cart-empty").addClass("cart-filled");
        } else {
            $("#cart-indicator").removeClass("cart-filled").addClass("cart-empty");
        }

        // Save cart items to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    // Event listener for Add to Cart buttons
    $(document).on("click", ".add-to-cart-btn", function() {
        var product = $(this).data("product");
        var price = parseFloat($(this).data("price"));
        addToCart(product, price);
        updateCartTotal();
    });

    // Event listener for Remove from Cart buttons
    $(document).on("click", ".remove-from-cart-btn", function() {
        var index = $(this).data("index");
        removeFromCart(index);
        updateCartTotal();
        // Refresh the page to reflect the changes in the cart
        location.reload();
    });

    // Initial update of cart total
    updateCartTotal();

    // Function to add item to cart
    function addToCart(product, price) {
        cartItems.push({ product: product, price: price });
    }

    // Function to remove item from cart
    function removeFromCart(index) {
        cartItems.splice(index, 1);
    }
});
