/* global data */
/* exported data */

var $photoUpdate = document.querySelector('.photo');
var $title = document.querySelector('.title');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $saveButton = document.querySelector('.save-button');

// this will update the placeholder photo
function photoUpdate(event) {
  $photoUpdate.setAttribute('src', event.target.value);
}

// this will submit a new submission
function newSubmission(event) {
  var title = $title.getElementById('title', event.target.value);
  var photoUrl = $photoUrl.getElementById('photo-url', event.target.value);
  var notes = $notes.getElementById('notes', event.target.value);
  var submission = {
    title,
    photoUrl,
    notes
  };
  console.log(submission);
}

$photoUrl.addEventListener('input', photoUpdate);
$saveButton.addEventListener('submit', newSubmission);
