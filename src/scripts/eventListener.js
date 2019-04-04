import data from "./data"

const eventListener = {
    journalEntryClick() {
        console.log("journalEntryCLick")
        let button = document.getElementById("button");
        button.addEventListener("click", eventListener.submissionListener)
    },

    submissionListener() {
        console.log("submissionListener")
        let dateField = document.getElementById("journalDate").value;
        let conceptField = document.getElementById("conceptTopic").value;
        let entryField = document.getElementById("journalEntry").value;
        let moodField = document.getElementById("moodElements").value;

        let newEntry = {
            date: dateField,
            concept: conceptField,
            entry: entryField,
            mood: moodField
        };

        data.addJournalEntry(newEntry);
    }
}

export default eventListener