const displayText400 = () => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    const elements = document.querySelectorAll("li[class='400level']");

    elements.forEach(el => {
        let p = document.createElement("p");
        p.textContent = el.textContent;
        outputDiv.appendChild(p);
        console.log(el.textContent);
    });
};
