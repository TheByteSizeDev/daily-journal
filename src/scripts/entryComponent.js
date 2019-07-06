const makeJournalEntryComponent = journalEntry => {
  return `
        <h1>Journal Entry</h1>
        <h3>Date: ${journalEntry.date}</h3>
        <h3>Concepts: ${journalEntry.concepts}</h3>
        <p>Journal Entry: ${journalEntry.journal_entry}</p>
        <p>Mood: ${journalEntry.mood}</p>
    `;
};

const makeEditForm = (entry) => {
  return `
    <div id="editForm-${entry.id}>
    <label for="JournalDate">Date of Entry</label>
      <input id="editDate" type="date" name="JournalDate" value="${entry.date}"/>
      <input id="entryId" type="hidden" value="${entry.id}">
      <label for="journalConcepts">Concepts Covered</label>
        <input id="editConcepts" type="text" name="journalConcepts" value="${entry.concepts}"/>
      <label for="journalEntry">Journal Entry</label>
        <input id="editEntry" type="text" name="journalEntry" value="${entry.journal_entry}"/>
      <label for="JournalMood">Mood for the day</label>
        <select id="editMood" name="moods" value>
          <option value="happy" ${entry.mood === "happy" ? "selected" : ""}>Happy</option>
          <option value="excited" ${entry.mood === "excited" ? "selected" : ""}>Excited</option>
          <option value="frustrated" ${entry.mood === "frustrated" ? "selected" : ""} >Frustrated</option>
          <option value="burn it" ${entry.mood === "burn it" ? "selected" : ""}>Burn it all down</option>
        </select>
    </div>
    <button id="saveBtn">save</button>
  `
}

/* make a function to create an object for the entry*/
const makeJournalObject = (date, concept, journalEntry, mood) => {
  return {
    date: date,
    concepts: concept,
    journal_entry: journalEntry,
    mood: mood
  };
};
