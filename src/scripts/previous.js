/*    This javascript is nothing. It isn't linked to anything. I just wanted
a file to hold all of the work I did in previuos daily journals so I could
look back it wistfull later and think on how far I've come. Ahhhhh to be young
again */

// ***********Daily Journal 2***************

/*
            Define the keys and value for a JavaScript object that
            represents a journal entry about what you learned today
        */

const objectsJournalEntry = {
  date: "5/20/2019",
  concepts: "Ids, let/const/var, etc",
  journal_entry:
    "Oh…yeah…the guy in the $4,000 suit is holding the elevator for a guy who doesn't make that in three months. Come on! No Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. That's how Tony Wonder lost a nut. I've been in the film business for a while but I just cant seem to get one in the can. Even though sooooo many people in this office are begging for it. The only thing I found in the fridge was a dead dove in a bag",
  mood: "happy"
};

const journalEntries = [];

/* Eventually, you will have multiple journal entries, so you need 
    to define an appropriately named variable that will have the value of an array.
    Once you define that variable and give it a default value of a blank array, use the 
    push() method to add the journalEntry object you defined above to the array. */

journalEntries.push(objectsJournalEntry);

/*  Take a few minutes and define two or three more JavaScript objects to represent 
    journal entries for some other things that you have learned about so far at NSS.

    Add those new objects to your journal entries array.*/

const objectsJournalEntry2 = {
  date: "6/20/2019",
  concepts: "Lorem Ipsum blah blah blah",
  journal_entry: "Te quiero. English, please. I love you! Great, now I'm late.",
  mood: "Burn it all down"
};

const objectsJournalEntry3 = {
  date: "7/20/2019",
  concepts: "Lorem Ipsum blah blah bleh",
  journal_entry:
    "Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to.",
  mood: "Bleh"
};

journalEntries.push(objectsJournalEntry2);
journalEntries.push(objectsJournalEntry3);

console.log("Journal Entries", journalEntries);

// *************** DAILY JOURNAL 3 ***********************

// Overall Goals of Journal Entry 3---Starts Here ***

// You have built your form for entering in journal entries, so now you need to define how
//the data that you will be collecting in the form should be stored. Your learning objective
//for this chapter is to build a function that returns an HTML representation of a journal entry data structure,
//and render it to the DOM.

// The First Journal Entry Rendered to the DOM
// By the end of this chapter - once you have all the functionality written -
// you will see your journal entry beneath your form.

// Overall Goals of Journal Entry 3--Ends Here ***

// Combining the definition of the daily journal objects, and the daily journal collection. Open journal.js
// and define your journal entry objects by inside the journal entries array.

const objectsJournalEntry = [
  {
    date: "5/20/2019",
    concepts: "Ids, let/const/var, etc",
    journal_entry:
      "No Pop-pop does not get a treat, I just brought you a [bleep]ing pizza.",
    mood: "happy"
  },
  {
    date: "6/20/2019",
    concepts: "Lorem Ipsum blah blah blah",
    journal_entry:
      "Te quiero. English, please. I love you! Great, now I'm late.",
    mood: "Burn it all down"
  },
  {
    date: "7/20/2019",
    concepts: "Lorem Ipsum blah blah bleh",
    journal_entry:
      "Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to.",
    mood: "Bleh"
  }
];

// You've worked on exercises in which you wrote functions that returned HTML
// components. Now write a function that builds a journal entry HTML string template.

/*
                Purpose: To create, and return, a string template that
                represents a single journal entry object as HTML

                Arguments: journalEntry (object)
            */

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

// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

/*
            Purpose: To render all journal entries to the DOM

            Arguments: entries (array of objects)
        */

const journalTextDiv = document.querySelector("#entry_log");

const renderJournalEntries = entries => {
  console.log("entries", entries);
  for (i = 0; i < entries.length; i++) {
    let finishedDiv = makeJournalEntryComponent(entries[i]); // Passes in each object in array objectJournalEntry
    // console.log("finished div", finishedDiv)
    journalTextDiv.innerHTML += finishedDiv; // Concats values to create finished #entry_log HTML
  }
};
// Invoke the render function

renderJournalEntries(objectsJournalEntry); // This passes ALL journal entries


// ************************ Daily Journal 4 ****************************

// Fetch from the API
fetch("http://localhost:3000/entries") 
    .then(data => data.json())  // Parse as JSON
    .then(entries => {
        renderJournalEntries(entries)
    })