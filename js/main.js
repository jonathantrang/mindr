/* global data */
/* exported data */

var $form = document.querySelector('form');
var $title = document.querySelector('.title');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $photoUpdate = document.querySelector('.photo');
var $entriesTab = document.querySelector('a');
var $ul = document.querySelector('ul');
var $newButton = document.querySelector('.new-button');
var $deleteButton = document.querySelector('.delete-button');
var $h1 = document.querySelector('h1');
var $noEntries = document.querySelector('.no-entries');
var $views = document.querySelectorAll('.view');

$newButton.addEventListener('click', function (event) {
  $h1.textContent = 'New Entry';
  changeView('entry-form');
  data.editing = null;
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (data.editing === null) {
    var submission = {
      title: $title.value,
      photoUrl: $photoUrl.value,
      notes: $notes.value,
      entryId: data.nextEntryId
    };
    data.nextEntryId++;
    data.entries.push(submission);
    $ul.prepend(renderEntry(submission));
  } else {
    var editedSubmission = {
      title: $title.value,
      photoUrl: $photoUrl.value,
      notes: $notes.value,
      entryId: data.editing
    };
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing === data.entries[i].entryId) {
        data.entries[i] = editedSubmission;
        break;
      }
    }
    var $lis = document.querySelectorAll('li');
    var editDomTree = renderEntry(editedSubmission);
    for (i = 0; i < $lis.length; i++) {
      if (parseInt($lis[i].getAttribute('data-entry-id')) === data.editing) {
        $lis[i].replaceWith(editDomTree);
      }
    }
  }
  $photoUpdate.setAttribute('src', 'images/placeholder-image-square.jpg');
  $noEntries.className = 'text-center no-entries hidden';
  changeView('entries');
  $form.reset();
  return false;
});

$photoUrl.addEventListener('input', function (event) {
  $photoUpdate.setAttribute('src', event.target.value);
});

$entriesTab.addEventListener('click', function (event) {
  changeView('entries');
});

$ul.addEventListener('click', function (event) {
  if (event.target.nodeName === 'I') {
    changeView('entry-form');
    var editCurrentEntry = parseInt(event.target.closest('li').getAttribute('data-entry-id'));
    data.editing = editCurrentEntry;
    for (var i = 0; i < data.entries.length; i++) {
      if (editCurrentEntry === data.entries[i].entryId) {
        $title.value = data.entries[i].title;
        $photoUrl.value = data.entries[i].photoUrl;
        $notes.value = data.entries[i].notes;
        $photoUpdate.setAttribute('src', $photoUrl.value);
        $h1.textContent = 'Edit Entry';
        $deleteButton.className = 'delete-button';
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function (event) {
  changeView(data.view);
  for (var i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
});

function renderEntry(submission) {
  var $li = document.createElement('li');
  $li.setAttribute('data-entry-id', submission.entryId);

  var $row = document.createElement('div');
  $row.className = 'row';
  $li.appendChild($row);

  var $columnFirstHalf = document.createElement('div');
  $columnFirstHalf.className = 'column-half';
  $row.appendChild($columnFirstHalf);

  var $img = document.createElement('img');
  $img.setAttribute('src', submission.photoUrl);
  $columnFirstHalf.appendChild($img);

  var $columnSecondHalf = document.createElement('div');
  $columnSecondHalf.className = 'column-half';
  $row.appendChild($columnSecondHalf);

  var $h3 = document.createElement('h3');
  $h3.textContent = submission.title;
  $columnSecondHalf.appendChild($h3);

  var $editIcon = document.createElement('i');
  $editIcon.className = 'fas fa-pen';
  $columnSecondHalf.appendChild($editIcon);

  var $p = document.createElement('p');
  $p.textContent = submission.notes;
  $columnSecondHalf.appendChild($p);

  return $li;
}

function changeView(view) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === view) {
      $views[i].className = '';
    } else {
      $views[i].className = 'hidden';
    }
  }
  data.view = view;
}
