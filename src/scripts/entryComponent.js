const makeJournalEntryComponent = journalEntry => {
  return `
    <div>
        <h1>Journal Entry</h1>
        <h3>Date: ${journalEntry.date}</h3>
        <h3>Concepts: ${journalEntry.concepts}</h3>
        <p>Journal Entry: ${journalEntry.journal_entry}</p>
        <p>Mood: ${journalEntry.mood}</p>
    </div>
    `;
};
