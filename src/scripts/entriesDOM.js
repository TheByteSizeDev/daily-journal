const journalTextDiv = document.querySelector("#entry_log");

const renderJournalEntries = entries => {
  console.log("entries", entries);
  for (i = 0; i < entries.length; i++) {
    let finishedDiv = makeJournalEntryComponent(entries[i]); // Passes in each object in array objectJournalEntry
    // console.log("finished div", finishedDiv)
    journalTextDiv.innerHTML += finishedDiv; // Concats values to create finished #entry_log HTML
  }
};
