const domEntries = {
    createSectionContainer() {
        const container = document.createElement("div");
        let articleElement = document.querySelector(".entryLog");
        articleElement.appendChild(container);
    },

    appendToDom() {
        data.getJournalEntry().then(eachEntry => {
            eachEntry.forEach(entry => {
            const section = document.createElement("section");
            document.querySelector("div").appendChild(section);

            entryComponent.createElement("h1", entry.date);
            entryComponent.createElement("h3", entry.concept);
            entryComponent.createElement("p", entry.entry);
            entryComponent.createElement("h5", entry.mood);
            });
        });
    }
};