// 外部から管理できる在庫状況のデータ
const stockData = {
    "商品A": { price: "500円", inStock: true },
    "商品B": { price: "600円", inStock: false },
    "商品C": { price: "700円", inStock: true },
    "商品D": { price: "800円", inStock: false },
    "商品E": { price: "900円", inStock: true }
};

// 在庫状況を表示する関数
function displayStockStatus() {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';

    for (const [item, { price, inStock }] of Object.entries(stockData)) {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';

        const namePriceContainer = document.createElement('div');
        namePriceContainer.className = 'name-price-container';

        const nameElement = document.createElement('span');
        nameElement.textContent = item;

        const priceElement = document.createElement('span');
        priceElement.textContent = price;

        namePriceContainer.appendChild(nameElement);
        namePriceContainer.appendChild(priceElement);

        const statusElement = document.createElement('span');
        statusElement.className = 'status ' + (inStock ? 'in-stock' : 'out-of-stock');
        statusElement.textContent = inStock ? '在庫あり' : '在庫なし';

        itemElement.appendChild(namePriceContainer);
        itemElement.appendChild(statusElement);
        itemsContainer.appendChild(itemElement);
    }
}

// 初期表示
displayStockStatus();