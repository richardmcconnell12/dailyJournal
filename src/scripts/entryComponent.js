// This module is a template that creates contact HTML components so the entriesDOM module can append them to DOM.

const entryComponent = {
    createEntryComponent(entryObject) {
        // Function that returns the document fragment with info from entryObject parameter that was passed into function.
        let entryDocFrag = document.createDocumentFragment();

        entryDocFrag.querySelector(".entryLog");
        // Creating the elements of each of the properties of the entry objects.
        let entryDateTag = document.createElement("h3");
        entryDateTag.textContent += "Date:"
        entryDateTag.textContent += " "
        let entryDate = document.createElement("h3");
        entryDate.textContent += "Date: "
        entryDate.textContent += " "
        entryDate.textContent += entryObject.date

        let entryConceptTag = document.createElement("h2");
        entryConceptTag.textContent += "Concept:"
        entryConceptTag.textContent += " "
        let entryConcept = document.createElement("h2");
        entryConcept.textContent += "Concept: "
        entryConcept.textContent += " "
        entryConcept.textContent += entryObject.concept;

        let entryLogTag = document.createElement("p");
        entryLogTag.textContent += "Entry:"
        entryLogTag.textContent += " "
        let entryLog = document.createElement("p");
        entryLog.textContent += "Entry: "
        entryLog.textContent += " "
        entryLog.textContent += entryObject.entry;

        let entryMoodTag = document.createElement("h5");
        entryMoodTag.textContent += "Mood:"
        entryMoodTag.textContent += " "
        let entryMood = document.createElement("h5");
        entryMood.textContent += "Mood: "
        entryMood.textContent += " "
        entryMood.textContent += entryObject.mood

        entryDocFrag.appendChild(entryDate);
        entryDocFrag.appendChild(entryConcept);
        entryDocFrag.appendChild(entryLog);
        entryDocFrag.appendChild(entryMood);

        return entryDocFrag
    }
}

export default entryComponent