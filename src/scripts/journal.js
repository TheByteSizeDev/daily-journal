/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

API.getJournalEntries().then(listEntries);
runRadioButtons()
triggerListener()



//objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

//renderJournalEntries  makeJournalEntryComponent  getJournalEntries

/*TODO Journal 8:
-create button on each journal entry
create click event for buttons
on click need to take grab object in API and delete it
Then it needs to refresh journal entries on page*/

/* TODO: Journal 9:
****Add button to edit component function
****add text to the button
****need to append the div for the form element
****need to create the form element as part of it with the save button (possibly as another function)
**** Then need to create click event that adds form to DOM
need to make sure that the value from the form is populated from the text
****need to add a click event to the form element save button that triggers PUT command
Means I need to grab the id
*/
