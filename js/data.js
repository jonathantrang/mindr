/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var previousData = localStorage.getItem('code-journal');

if (previousData !== null) {
  data = JSON.parse(previousData);
}

function windowBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal', dataJSON);
}

window.addEventListener('beforeunload', windowBeforeUnload);
