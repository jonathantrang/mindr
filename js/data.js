/* exported data */
var $form = document.querySelector('#entry-form');
var $title = document.querySelector('.title');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
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

function checkSubmit(event) {
  event.preventDefault();
  var submission = {
    Title: $title.value,
    'Photo URL': $photoUrl.value,
    Notes: $notes.value,
    nextEntryId: data.nextEntryId
  };
  var submissionEntry = JSON.stringify(submission);
  data.entries.push(submissionEntry);
  localStorage.setItem('code-journal-entries', JSON.stringify(data.entries));
  data.nextEntryId++;
  if (data.nextEntryId++) {
    $form.reset();
  }
}

$form.addEventListener('submit', checkSubmit);
