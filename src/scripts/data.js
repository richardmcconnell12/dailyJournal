const data = {
    getJournalEntry() {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
    },

    addJournalEntry(newEntry) {
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