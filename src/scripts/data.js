// Module that contains all API fetch calls.

const data = {
    // Fetch call that grabs the entries from the API.
    getJournalEntry() {
        console.log("getJournalEntry")
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
    },

    addJournalEntry(newEntry) {
    // Fetch call that add new entry objects to the database.
        console.log("addJournalEntry", newEntry)
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
        .then(response => response.json)
    }
};

export default data