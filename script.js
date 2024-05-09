const inventory = [
    { name: 'ノート', price: 150, quantity: 10 },
    { name: 'ペン', price: 100, quantity: 20 },
    { name: '鉛筆', price: 80, quantity: 30 },
];

function renderInventory() {
    const inventoryTableBody = document.querySelector('#inventory-table tbody');
    inventoryTableBody.innerHTML = '';

    inventory.forEach((item, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `¥${item.price}`;
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        inventoryTableBody.appendChild(row);
    });
}

document.getElementById('add-item-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseInt(document.getElementById('item-price').value, 10);
    const itemQuantity = parseInt(document.getElementById('item-quantity').value, 10);

    inventory.push({
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
    });

    renderInventory();

    document.getElementById('add-item-form').reset();
});

renderInventory();
