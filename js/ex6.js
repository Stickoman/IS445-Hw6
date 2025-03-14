const words = [
    {
        term: "Procrastination",
        definition: "Avoidance of doing a task that needs to be accomplished"
    },
    {
        term: "Tautology",
        definition: "Logical argument constructed in such a way that it is logically irrefutable"
    },
    {
        term: "Oxymoron",
        definition: "Figure of speech that juxtaposes elements that appear to be contradictory"
    }
];

const createDictionary = () => {
    const contentDiv = document.getElementById('content');
    const dl = document.createElement('dl');

    words.forEach(word => {
        const dt = document.createElement('dt');
        dt.innerHTML = `<strong>${word.term}</strong>`;

        const dd = document.createElement('dd');
        dd.textContent = word.definition;

        dl.appendChild(dt);
        dl.appendChild(dd);
    });

    contentDiv.appendChild(dl);
};

createDictionary();
