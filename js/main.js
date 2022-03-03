/* global data */
/* exported data */

var $photoUpdate = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');
var $saveButton = document.querySelector('.save-button');
var $title = document.querySelector('.title');
var $notes = document.querySelector('.notes');

function photoUpdate(event) {
  $photoUpdate.setAttribute('src', event.target.value);
}

function checkSubmit(event) {
  if (event.target === $saveButton) {
    var submission = {
      $title,
      $photoUrl,
      $notes
    };
    localStorage.setItem(submission);
  }
}

$photoUrl.addEventListener('input', photoUpdate, checkSubmit);
$title.addEventListener('input', checkSubmit);
$notes.addEventListener('input', checkSubmit);
$saveButton.addEventListener('submit', checkSubmit);

/*
  1. Prompt
    a. Listen for a submit event on the journal entry form
  2. How to get there?
    a. How to check for submit events?
    b. What does this submit event do?
  3. Write steps to achieve without code
    a. Have variables that check when event occurs on the save button
    a. Create a function for the event
    b. Have an addEventListener method that checks for the submit event and the callback function when the event occurs

*/
