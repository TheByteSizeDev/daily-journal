const makeJournalEntryComponent = journalEntry => {
  return `
        <h1>Journal Entry</h1>
        <h3>Date: ${journalEntry.date}</h3>
        <h3>Concepts: ${journalEntry.concepts}</h3>
        <p>Journal Entry: ${journalEntry.journal_entry}</p>
        <p>Mood: ${journalEntry.mood}</p>
    `;
};

/* make a function to create an object for the entry*/
const makeJournalObject = (date, concept, journalEntry, mood) => {
  return {
    date: date,
    concepts: concept,
    journal_entry: journalEntry,
    mood: mood
  };
};
