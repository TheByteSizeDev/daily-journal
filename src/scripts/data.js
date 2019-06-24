// fetch("http://localhost:3000/entries")
//     .then(data => data.json())  // Parse as JSON
//     .then(entries => {
//         renderJournalEntries(entries)
//     })

/*  Replace the code in src/scripts/data.js with 
the code below. Since you moved the code to this file, 
you should consider this file an independent, helper 
module now. It should not directly execute any logic 
for the application. The responsbility for how the 
application should operate should reside in src/scripts/journal.js now. */

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  }
};
