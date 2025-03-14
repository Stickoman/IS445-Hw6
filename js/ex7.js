const calculateSum = () => {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();
    const outputDiv = document.getElementById('output');

    const integerRegex = /^-?\d+$/;
    const decimalRegex = /^-?\d+\.\d+$/;

    outputDiv.innerHTML = "";

    if (decimalRegex.test(num1) || decimalRegex.test(num2)) {
        outputDiv.innerHTML = `
            <p style="color: red; font-weight: bold;">Error – Decimal input:</p>
            <p style="color: red; font-weight: bold;">Sum of two Integers</p>
            <p style="color: red; font-weight: bold;">Error! You must enter integers. You entered "${num1}" and "${num2}". Try again.</p>
        `;
        return;
    }

    if (!integerRegex.test(num1) || !integerRegex.test(num2)) {
        outputDiv.innerHTML = `
            <p style="color: red; font-weight: bold;">Error – Alphanumeric input:</p>
            <p style="color: red; font-weight: bold;">Sum of two Integers</p>
            <p style="color: red; font-weight: bold;">Error! You must enter integers. You entered "${num1}" and "${num2}". Try again.</p>
        `;
        return;
    }

    const sum = parseInt(num1) + parseInt(num2);
    outputDiv.innerHTML = `
        <p style="color: red; font-weight: bold;">${num1} + ${num2} = ${sum}</p>
    `;
};
