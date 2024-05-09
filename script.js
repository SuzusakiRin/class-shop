document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: "ノート", stock: 10 },
        { name: "ペン", stock: 0 },
        { name: "消しゴム", stock: 3 },
        { name: "定規", stock: 5 },
        { name: "コンパス", stock: 0 }
    ];

    const itemsContainer = document.getElementById('items');

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const stockStatus = document.createElement('div');
        stockStatus.classList.add('stock-status');
        if (item.stock > 0) {
            stockStatus.textContent = '在庫あり';
        } else {
            stockStatus.textContent = '在庫なし';
            stockStatus.classList.add('out-of-stock');
        }

        itemElement.appendChild(itemName);
        itemElement.appendChild(stockStatus);
        itemsContainer.appendChild(itemElement);
    });
});
