const generateTable = () => {
    const outputDiv = document.getElementById('output');

    const table = document.createElement('table');
    table.style.width = '50%';
    table.style.margin = '0 auto';

    for (let i = 1; i <= 12; i++) {
        const row = table.insertRow();

        const cell = row.insertCell(0);
        cell.textContent = i;

        if (i % 4 === 0) {
            cell.classList.add('blue-background');
        }
    }

    outputDiv.appendChild(table);
};

generateTable();
