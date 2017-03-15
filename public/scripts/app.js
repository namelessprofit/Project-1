$(document).ready(function() {
 console.log('app.js loaded');

 $.ajax({
   method: 'GET',
   url: '/api/user', // creating api of users... check on this not sure what's going on
   success: renderMultipleEntries
 });


 $('#entryForm form').on('submit', function(e) {
   e.preventDefault();
   var formData = $(this).serialize();
   console.log('formData', formData);
   $.post('/api/entry', formData, function(entry) {
     console.log('entry after post', entry);
     renderEntry(entry); // render the servers response
   });
   $(this).trigger("reset");
 });

// catch and handle the click on an entry add button

$('#entry').on('click', '.add-entry', handleAddEntryClick )

Save an entry modal save button
$('#saveEntry').on('click', handleNewEntrySubmit);
});


// function renderMultipleEntries(entries) {
//   entry.forEach(function(entry) {
//     renderEntry(entry);
//   });
// }

// this function takes a single entry and renders it to the page
function renderEntry(entry) {
 console.log('rendering entry', entry);
 var entryHtml = (`

   <form id="entry" action="" method="post">
       <fieldset>
           <input placeholder="User Name" type="text" style="width: 506px;height: 36px;" required autofocus>
       </fieldset>
       <hr>
       <fieldset>
           <input placeholder="Dish Name" type="text" tabindex="2" style="width: 506px;height: 36px;"required>
       </fieldset>
       <hr>
       <fieldset>
           <input placeholder="Country of origin" type="text" tabindex="3" style="width: 506px;height: 36px;">
       </fieldset>
       <hr>
       <fieldset>
           <input placeholder="Calories" type="text" tabindex="3" style="width: 506px;height: 36px;">
       </fieldset>
       <hr>
       <fieldset>
           <textarea placeholder="Ingredients/allergies" tabindex="5" required style="width: 506px;height: 275px;"></textarea>
       </fieldset>
       <fieldset>
           <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
       </fieldset>
   </form>
   `);
 $('#savedMeals').prepend(entryHtml);
}

// When the add entry button is clicked, display the modal
// function handleAddEntryClick(e) {
//  console.log('add-entry clicked');
//  var currentEntryId = $(this).closest('.album').data('entry-id');
//  console.log('id', currentEntryId);
//  $('#entryModal').data('user-id', currentUserId);
//  $('#entryModal').modal(); //display the modal
// }
//
// //when the entry modal submit button is clicked
// function handleNewEntrySubmit(e) {
//  e.preventDefault();
//  var $modal = $('#modal');
//  var $entryField = $modal.find('entryField');


 // get data from modal fields
 // the server expects to see the keys,..... so we MUST use them.


//Get data from modal fields
