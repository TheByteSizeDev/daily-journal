/* TODO:
-create function to take each radio button and add click event
-need to create click event that when selected it will grab the selected name's value
-then it will need to use a function that filters through each one of the objects and -filter the selected mood and put it into a new array
-append it to the DOM */

let radioButtons = document.getElementsByName("mood");

radioButtons.forEach(node => {
  node.addEventListener("click", () => {
    const mood = event.target.value;
    // journalTextDiv.innerHTML = " "
    API.getJournalEntries().then(data => {
      let filterData = data.filter(entries => entries.mood === mood);
      // console.log("What's being brought in?", filterData)
      listEntries(filterData)
      })
    })
  });
