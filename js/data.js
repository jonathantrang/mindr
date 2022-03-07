/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  localStorage.setItem('code-journal-entries', JSON.stringify(data));
});

var previousData = localStorage.getItem('code-journal-entries');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
