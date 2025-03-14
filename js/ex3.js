const styleParagraphs = () => {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
        p.style.backgroundColor = "yellow";
        p.style.padding = "10px";
        p.style.borderRadius = "5px";
    });
};
