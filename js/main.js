/* global data */
/* exported data */

var $form = document.querySelector('#entry-form');
var $title = document.querySelector('.title');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $photoUpdate = document.querySelector('.photo');

function photoUpdate(event) {
  $photoUpdate.setAttribute('src', event.target.value);
}

function checkSubmit(event) {
  event.preventDefault();
  var submission = {
    title: $title.value,
    photoUrl: $photoUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.push(submission);
  $photoUpdate.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

$form.addEventListener('submit', checkSubmit);
$photoUrl.addEventListener('input', photoUpdate);
