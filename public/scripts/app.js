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
    // TODO: Send an object literal, not a serialized query string
   var formData = $(this).serialize();
   console.log('formData', formData);
   $.post('/api/entry', formData, function(entry) {
     console.log('entry after post', entry);
     renderEntry(entry); // render the servers response
   });
   $(this).trigger("reset");
 });

// catch and handle the click on an entry add button
// $('#entry').on('click', '.add-entry', handleAddEntryClick );
// $('#entry').on('click', '.edit-entry', handleAlbumEditClick);
// $('#entry').on('click', '.save-entry', handleSaveChangesClick);

// Save an entry
// $('#saveEntry').on('click', handleNewEntrySubmit);
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

// $.get('/event/findAll', function (items) {
//   items.forEach(function(item){
// console.log(item);
//     var newHTML = "fieldset" + item + "/fieldset";
//     $('#savedMeals').prepend(newHTML);
//   })
// })

 var entryHtml = (`

   <form id="entry" action="" method="post">
      <fieldset>
           <span>${entry.userName}</span>
       </fieldset>
       <fieldset>
           <span>${entry.dishName}</span>
       </fieldset>
       <fieldset>
           <span>${entry.foodOrigin}</span>
       </fieldset>
       <fieldset>
           <span>${entry.calories}</span>
       </fieldset>
       <fieldset>
           <span>${entry.foodDescription}</span>
       </fieldset>
       <fieldset>
           <button name="edit" type="edit" id="contact-edit" data-submit="...Sending">Edit Entry</button>
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

// //when the entry modal submit button is clicked
// function handleNewEntrySubmit(e) {
//  e.preventDefault();
//  var $modal = $('#modal');
//  var $entryField = $modal.find('entryField');


 // get data from modal fields
 // the server expects to see the keys,..... so we MUST use them.


//Get data from modal fields
