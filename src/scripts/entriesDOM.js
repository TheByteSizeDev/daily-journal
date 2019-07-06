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
  let editBtn = document.createElement("button")
  let editDiv = document.createElement("div")
  div.setAttribute("id", `entryContainer-${entries.id}`)
  div.innerHTML = makeJournalEntryComponent(entries)
  largerDiv.appendChild(div)
  deleteBtn.textContent = "delete"
  editBtn.textContent = "edit"
  editDiv.setAttribute("id", `editFormContainer-${entries.id}`)
  deleteBtn.addEventListener("click", () => {
    deleteJournalPost(entries.id)
    .then( data => {
      getAndDisplayEntry(data)
    })
  })
  editBtn.addEventListener("click", () => {
    let editForm = makeEditForm(entries)
    addEditFormToDOM(editDiv.id, editForm)
    
  })
  largerDiv.appendChild(deleteBtn)
  largerDiv.appendChild(editBtn)
  largerDiv.appendChild(editDiv)
  return largerDiv
}

function addEditFormToDOM(editContainer, editForm) {
  document.querySelector(`#${editContainer}`).innerHTML = editForm
  console.log(editForm)
  document.querySelector("#saveBtn").addEventListener("click", () => {
  console.log("this was clicked")
  let date = document.querySelector("#editDate").value
  let concepts = document.querySelector("#editConcepts").value
  let journal = document.querySelector("#editEntry").value
  let mood = document.querySelector("#editMood").value
  let id = document.querySelector("#entryId").value
  let updatedEntry = makeJournalObject(date, concepts, journal, mood)
  updatedEntry.id = id
  updateJournalPost(updatedEntry)
  .then( () => {
    getAndDisplayEntry()
  })
})
}