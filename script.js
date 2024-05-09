/* リセットスタイル */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #007bff;
    color: #fff;
    text-align: center;
    padding: 1em 0;
    margin-bottom: 1em;
}

header h1 {
    font-size: 2.5em;
}

header h2 {
    font-size: 1.2em;
    margin-top: 0.5em;
}

main {
    flex: 1;
    padding: 1em;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h3 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}

.inventory {
    margin-bottom: 2em;
}

#inventory-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
}

#inventory-table th,
#inventory-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#inventory-table th {
    background-color: #007bff;
    color: #fff;
}

.add-item form {
    display: flex;
    flex-direction: column;
}

.add-item label {
    margin-bottom: 0.5em;
}

.add-item input {
    margin-bottom: 1em;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.add-item button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 0.75em;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.add-item button:hover {
    background-color: #218838;
}

footer {
    background-color: #007bff;
    color: #fff;
    text-align: center;
    padding: 1em 0;
    margin-top: auto;
}
