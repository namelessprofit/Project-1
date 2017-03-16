$(document).ready(function() {
 console.log('app.js loaded');


 // $.ajax({
 //   method: 'GET',
 //   url: '/api/user', // creating api of users... check on this not sure what's going on
 //   success: renderUsers
 // });

 $.ajax({
   method: 'GET',
   url: '/api/entry', // creating api of users... check on this not sure what's going on
   success: renderMultipleEntries
 });

 $('#entryForm form').on('submit', function(e) {
   e.preventDefault();
   var formData = ({
       userName: $('#userName').val(),
       dishName: $('#dishName').val(),
       origin: $('#origin').val(),
       calories: $('#calories').val(),
       ingredients: $('#ingredients').val()
   });
   console.log('formData', formData);
   $.post('/api/entry', formData, function(entry) {
     console.log('entry after post', entry);
     renderEntry(entry); // render the servers response
   });
   $(this).trigger("reset");
 });

});

function renderMultipleEntries(entries) {
  console.log(entries);
  entries.forEach(function(entry) {
    renderEntry(entry);
  });
}
// this function takes a single entry and renders it to the page
function renderEntry(entry) {
 console.log('rendering entry', entry);


$('#btn btn-danger').on('submit', function deleteEntry(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/entry/:EntryId',
      success: removeEntries
})
})
function removeEntries(entries) {
var deletedEntryId = data._id
console.log('entries removed', deletedEntryId);
$('div[data-entry-id=' + deletedEntryId + ']').remove();
}
//TODO: Prevent Default
  // AJAX REQUEST
  // delete
  // url; api/entry/ + entryID you grab from the delete button
  // success: on success, remove the entry from the view via jquery.
// });
 var entryHtml = (`

   <form id="entry" action="" method="post" >

      <fieldset>
           <span>${entry.userName}</span>
       </fieldset>
       <fieldset>
           <span>${entry.dishName}</span>
       </fieldset>
       <fieldset>
           <span>${entry.origin}</span>
       </fieldset>
       <fieldset>
           <span>${entry.calories}</span>
       </fieldset>
       <fieldset>
           <span>${entry.ingredients}</span>
       </fieldset>
       <fieldset>
           <button class= 'btn btn-info edit-entry'>Edit Entry</button>
       </fieldset>
       <fieldset>
           <button class= 'btn btn-danger delete-entry' data-id="${entry._id}">Delete Entry</button>
       </fieldset>
   </form>
   `);
 $('#savedMeals').prepend(entryHtml);
}

// When the add entry button is clicked
function handleAddEntryClick(e) {
 console.log('add-entry clicked');
 var currentEntryId = $(this).closest('.entry').data('entry-id');
 console.log('id', currentEntryId);
}
