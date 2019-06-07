// ***********Daily Journal 2***************

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const objectsJournalEntry = {
    date: "5/20/2019",
    concepts: "Ids, let/const/var, etc",
    journal_entry: "Oh…yeah…the guy in the $4,000 suit is holding the elevator for a guy who doesn't make that in three months. Come on! No Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. That's how Tony Wonder lost a nut. I've been in the film business for a while but I just cant seem to get one in the can. Even though sooooo many people in this office are begging for it. The only thing I found in the fridge was a dead dove in a bag",
    mood: "happy",
}

const journalEntries = []

/*Eventually, you will have multiple journal entries, so you need 
to define an appropriately named variable that will have the value of an array.
Once you define that variable and give it a default value of a blank array, use the 
push() method to add the journalEntry object you defined above to the array. */

journalEntries.push(objectsJournalEntry)

/*  Take a few minutes and define two or three more JavaScript objects to represent 
journal entries for some other things that you have learned about so far at NSS.

Add those new objects to your journal entries array.*/

const objectsJournalEntry2 = {
    date: "6/20/2019",
    concepts: "Lorem Ipsum blah blah blah",
    journal_entry: "Te quiero. English, please. I love you! Great, now I'm late.",
    mood: "Burn it all down",
}

const objectsJournalEntry3 = {
    date: "7/20/2019",
    concepts: "Lorem Ipsum blah blah bleh",
    journal_entry: "Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to.",
    mood: "Bleh",
}

journalEntries.push(objectsJournalEntry2)
journalEntries.push(objectsJournalEntry3)


console.log('Journal Entries', journalEntries)

