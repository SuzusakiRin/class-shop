// 外部から管理できる在庫状況のデータ
const stockData = {
    "商品A": true,
    "商品B": false,
    "商品C": true,
    "商品D": false,
    "商品E": true
};

// 在庫状況を表示する関数
function displayStockStatus() {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';

    for (const [item, inStock] of Object.entries(stockData)) {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';

        const nameElement = document.createElement('span');
        nameElement.textContent = item;

        const statusElement = document.createElement('span');
        statusElement.className = 'status ' + (inStock ? 'in-stock' : 'out-of-stock');
        statusElement.textContent = inStock ? '在庫あり' : '在庫なし';

        itemElement.appendChild(nameElement);
        itemElement.appendChild(statusElement);
        itemsContainer.appendChild(itemElement);
    }
}

// 初期表示
displayStockStatus();