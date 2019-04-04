import data from "./data"
import entryComponent from "./entryComponent"

const domEntries = {

    appendToDom() {
        console.log("appendToDom")
        data.getJournalEntry()
        .then(allEntries => {

            let largeDocFrag = document.createDocumentFragment();

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