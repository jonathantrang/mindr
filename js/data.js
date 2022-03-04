/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousData = localStorage.getItem('code-journal-entries');

if (previousData !== null) {
  data.entries = JSON.parse(previousData);
}

function windowBeforeUnload(event) {
  localStorage.setItem('code-journal-entries', JSON.stringify(data.entries));
}

window.addEventListener('beforeunload', windowBeforeUnload);
