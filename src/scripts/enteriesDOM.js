import data from "./data"
import entryComponent from "./entryComponent"

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
            section.setAttribute("id", "sectionId");
            document.querySelector("div").appendChild(section);

            entryComponent.createElement("h3", entry.date);
            entryComponent.createElement("h2", entry.concept);
            entryComponent.createElement("p", entry.entry);
            entryComponent.createElement("h5", entry.mood);
            });
        });
    }
};

export default domEntries