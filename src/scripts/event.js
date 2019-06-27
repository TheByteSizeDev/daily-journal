function triggerListener() {
  document.querySelector("#submit-btn").addEventListener("click", () => {
    let date = document.querySelector("#date").value;
    let concept = document.querySelector("#concepts").value;
    let journalEntry = document.querySelector("#entry").value;
    let mood = document.querySelector("#mood").value;
    if (date != "" && concept != "" && journalEntry != "") {
      //if statement use for both, don't need for drop down, use post inside conditionals
      let entryObj = makeJournalObject(date, concept, journalEntry, mood);
      console.log(entryObj);
      addJournalPost(entryObj)
        .then(API.getJournalEntries)
        .then(renderJournalEntries);
    }
    //let entryOb = the create journal entry object function (factory)
    //add it to dom with addJournalPost
    //API.getJournalEntries().then(renderJournalEntries); Use part of this
    //have to do this in a .then or it won't wait
  });
}
