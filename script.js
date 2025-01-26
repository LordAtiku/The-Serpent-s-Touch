function requestOrder() {
    const soldOutTag = document.getElementById('soldOut');
    const availableTag = document.getElementById('available');
    const orderLimit = parseInt(document.getElementById('orderLimit').innerText);
    const requestButton = document.querySelector("button");

    if (orderLimit <= 0) {
        soldOutTag.style.display = 'inline';
        availableTag.style.display = 'none';
        requestButton.disabled = true;
        alert('Orders are currently closed. Check back later.');
    } else {
        const newLimit = orderLimit - 1;
        document.getElementById('orderLimit').innerText = newLimit;
        alert('Your order request has been submitted!');
        if (newLimit <= 0) {
            soldOutTag.style.display = 'inline';
            availableTag.style.display = 'none';
            requestButton.disabled = true;
        }
    }
}
