import data from "./data"
import entryComponent from "./entryComponent"

// Module that appends list of entries to the DOM.

// Takes data from data module and iterates over to create contact components.

const domEntries = {
// Function that appends entries to DOM
    appendToDom() {
        console.log("appendToDom")
        data.getJournalEntry()
        .then(allEntries => {
            // Create a document fragment that each entry will append to.
            let largeDocFrag = document.createDocumentFragment();
            // Iterate over each entry
            allEntries.forEach(eachEntry => {
                console.log("entryData", eachEntry)
                let entryHtml = entryComponent.createEntryComponent(eachEntry);
                largeDocFrag.appendChild(entryHtml)
            })
            let displayContainer = document.querySelector(".entryLog");

            displayContainer.appendChild(largeDocFrag);
        })
    }
};

export default domEntries
