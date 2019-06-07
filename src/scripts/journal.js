// ****************** Daily Journal 3 ********************* //
        // You've worked on exercises in which you wrote functions that returned HTML 
        // components. Now write a function that builds a journal entry HTML string template.

            /*
                Purpose: To create, and return, a string template that
                represents a single journal entry object as HTML

                Arguments: journalEntry (object)
            */


const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div>
        <h1>Journal Entry</h1>
        <h3>Date: ${journalEntry.date}</h3>
        <h3>Concepts: ${journalEntry.concepts}</h3>
        <p>Journal Entry: ${journalEntry.journal_entry}</p>
        <p>Mood: ${journalEntry.mood}</p>
    </div>
    `
}

// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

        /*
            Purpose: To render all journal entries to the DOM

            Arguments: entries (array of objects)
        */

const journalTextDiv = document.querySelector("#entry_log")



const renderJournalEntries = (entries) => {
    console.log("entries", entries);
    for(i = 0; i < entries.length; i++) {
        let finishedDiv = makeJournalEntryComponent(entries[i]); // Passes in each object in array objectJournalEntry
        // console.log("finished div", finishedDiv)
        journalTextDiv.innerHTML += finishedDiv // Concats values to create finished #entry_log HTML
    }
}

// ************************ Daily Journal 4 ****************************

// Fetch from the API
fetch("http://localhost:3000/entries") 
    .then(data => data.json())  // Parse as JSON
    .then(entries => {
        renderJournalEntries(entries)
    })