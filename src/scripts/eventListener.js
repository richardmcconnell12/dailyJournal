import data from "./data"

// Module that contains the eventListener for the "Submit Journal Entry" button.

const eventListener = {
    journalEntryClick() {
        // Grab the button and adds an event listener to run submissionListener Function.
        console.log("journalEntryCLick")
        let button = document.getElementById("button");
        button.addEventListener("click", eventListener.submissionListener)
    },

    submissionListener() {
        // Function that passes an object and it's value into the API.
        console.log("submissionListener")
        let dateField = document.getElementById("journalDate").value;
        let conceptField = document.getElementById("conceptTopic").value;
        let entryField = document.getElementById("journalEntry").value;
        let moodField = document.getElementById("moodElements").value;

        // Create new object to post to the API.
        let newEntry = {
            date: dateField,
            concept: conceptField,
            entry: entryField,
            mood: moodField
        };

        // Calls the function that passes a new entry to the database.
        data.addJournalEntry(newEntry);
    }
}

export default eventListener