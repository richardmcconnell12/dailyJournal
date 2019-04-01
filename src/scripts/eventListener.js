const eventListener = {
    journalEntryClick() {
        let button = document.getElementById("button");
        button.addEventListener("click", eventListener.submissionListener)
    },

    submissionListener() {
        let dateField = document.getElementById("journalDate").value;
        let conceptField = document.getElementById("conceptTopic").value;
        let entryField = document.getElementById("journalEntry").value;
        let moodField = document.getElementById("moodOfDay").value;

        let newEntry = {
            concept: conceptField,
            date: dateField,
            entry: entryField,
            mood: moodField
        };

        data.addJournalEntry(newEntry);
    }
}