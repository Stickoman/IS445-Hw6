const bodyNodes = () => {
    const bodyElements = document.body.childNodes;
    console.log("Output\n");

    bodyElements.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            console.log("#text");
        } else {
            console.log(node.outerHTML);
        }
    });
};

bodyNodes();
