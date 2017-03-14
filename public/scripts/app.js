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

   <section id="favoriteMeals">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">Your saved meals and recipes.</h2>
                <hr class="primary">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row" id="savedMeals">
            <div class="col-lg-3 col-md-6 text-center">
                <div class="service-box">

                </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
                <div class="service-box">

                </div>
            </div>
        </div>
    </div>
</section>
   `);
 $('#favoriteMeals').prepend(entryHtml);
}

// When the add entry button is clicked, display the modal
function handleAddEntryClick(e) {
 console.log('add-entry clicked');
 var currentEntryId = $(this).closest('.album').data('entry-id');
 console.log('id', currentEntryId);
 $('#entryModal').data('user-id', currentUserId);
 $('#entryModal').modal(); //display the modal
}

//when the entry modal submit button is clicked
function handleNewEntrySubmit(e) {
 e.preventDefault();
 var $modal = $('#entryModal');
 var $entryField = $modal.find('entryField');

 // get data from modal fields
 // the server expects to see the keys,..... so we MUST use them.


//Get data from modal fields
