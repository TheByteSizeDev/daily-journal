const journalTextDiv = document.querySelector("#entry_log");

// const renderJournalEntries = entries => {
//   journalTextDiv.innerHTML = ""
//   for (i = 0; i < entries.length; i++) {
//     let finishedDiv = makeJournalEntryComponent(entries[i]); // Passes in each object in array objectJournalEntry
//     // console.log("finished div", finishedDiv)
//     journalTextDiv.innerHTML += finishedDiv; // Concats values to create finished #entry_log HTML
//   }
// };

function listEntries(entryArr) {
  entryArr.forEach( entry => {
    journalTextDiv.appendChild(createEntryComponent(entry))
  })
}

function createEntryComponent(entries) {
  let largerDiv = document.createElement("div")
  let div = document.createElement("div")
  let deleteBtn = document.createElement("button")
  div.setAttribute("id", `entryContainer-${entries.id}`)
  div.innerHTML = makeJournalEntryComponent(entries)
  largerDiv.appendChild(div)
  deleteBtn.textContent = "delete"
  deleteBtn.addEventListener("click", () => {
    deleteJournalPost(entries.id)
    .then( data => {
      getAndDisplayEntry(data)
    })
  })
  largerDiv.appendChild(deleteBtn)
  // console.log("this div", largerDiv)
  return largerDiv
}