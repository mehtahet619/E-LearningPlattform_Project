const totalAmount = localStorage.getItem('cartTotal');
document.getElementById('order-total-amount').innerText = totalAmount;

document.getElementById('order-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    alert('Order placed successfully!');

    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');

    window.location.href = 'index.html';
});
