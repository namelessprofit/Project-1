$(document).ready(function() {
    console.log('app.js loaded');


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
//deleting an meal entry
    $('#savedMeals').on('click', '.taco', function(e) {
        var deletedEntryId = $(this).closest('.entry-class').data('meal-id');
        console.log('stuff!!', deletedEntryId);
        console.log(this);
        console.log("I AM CLICKED FOR DELETE");
        // $.delete('/api/entry/:EntryId', formData, function(entry) {
        console.log('deleted post');
        removeEntries(deletedEntryId); // render the servers response

    });

//document ready closes here.
});
//
//function shows multiple entries that are saved
function renderMultipleEntries(entries) {
    console.log(entries);
    entries.forEach(function(entry) {
        renderEntry(entry);
    });
}
// this function takes a single entry and renders it to the page
function renderEntry(entry) {
    console.log('rendering entry', entry);


    var entryHtml = (`

<div class="entry-class" data-meal-id=${entry._id}>
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
           <button class='btn btn-info edit-entry'>Edit Entry</button>
       </fieldset>
      <button class='btn btn-danger taco'>Delete Entry</button>
</div>
   `);
    $('#savedMeals').prepend(entryHtml);
};

function removeEntries(e) {
    console.log('entries removed' + e);
    $.ajax({
        url: '/api/entry/' + e,
        method: 'DELETE',
        success: deleteEntrySuccess
    });
    location.reload();  
};

function deleteEntrySuccess(data) {
    var deletedEntryId = data._id;
    console.log('removing following entry');
    $('div[data-entry-id=' + deletedEntryId + ']').remove();

};

// When the add entry button is clicked
function handleAddEntryClick(e) {
    console.log('add-entry clicked');
    var currentEntryId = $(this).closest('.entry').data('entry-id');
    console.log('id', currentEntryId);
};
