/* global data */
/* exported data */

var $photoUpdate = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');

function photoUpdate(event) {
  $photoUpdate.setAttribute('src', event.target.value);
}

$photoUrl.addEventListener('input', photoUpdate);
