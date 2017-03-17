$(document).ready(function() {
    // TODO: Removed at production
    console.log('app.js loaded');


    $.ajax({
        method: 'GET',
        url: '/api/entry', // creating api of users... check on this not sure what's going on
        success: renderMultipleEntries
        //TODO: consider adding an err
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
        // TODO: Removed at production
        console.log('formData', formData);

        $.post('/api/entry', formData, function(entry) {
            // TODO: Removed at production
            console.log('entry after post', entry);
            renderEntry(entry); // render the servers response
        });
        $(this).trigger("reset");
    });

    //deleting a meal entry
    $('#savedMeals').on('click', '.taco', function(e) {
        var deletedEntryId = $(this).closest('.entry-class').data('meal-id');
        // TODO: Removed at production
        console.log('stuff!!', deletedEntryId);
        console.log($(this));
        console.log("I AM CLICKED FOR DELETE");
        var deletePath = '/api/entry/' + deletedEntryId
        $.ajax({
          method: "DESTROY"
          url: deletePath,
          success: function(entry) {
            // TODO: Removed at production
            console.log('deleted post');
            removeEntry(deletedEntryId); // render the servers response
          },
          error: //TODO: Enter error handler here
        });

//document ready closes here.
});

//function shows multiple entries that are saved
function renderMultipleEntries(entries) {
    // TODO: Removed at production
    console.log(entries);
    entries.forEach(function(entry) {
        renderEntry(entry);
    });
}
// this function takes a single entry and renders it to the page
function renderEntry(entry) {
    // TODO: Removed at production
    console.log('rendering entry', entry);


    var entryHtml = (`

      <div class="entry-class" data-meal-id=${entry._id}>
      <div class="col-md-4" ; style="padding-top: 65px;">
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
      </div>
   `);
    $('#savedMeals').prepend(entryHtml);
};

function removeEntry(removeId) {
    //TODO: find the 'card' with the data-entry-id of removeID and clear that off of your view
    $('div[data-entry-id=' + deletedEntryId + ']').remove();
};


//TODO: lets find out what this is
// When the add entry button is clicked
function handleAddEntryClick(e) {
    console.log('add-entry clicked');
    var currentEntryId = $(this).closest('.entry').data('entry-id');
    console.log('id', currentEntryId);
};


// TODO: UPDATE possibilities
// 1. Modal :(
// 2. Form widget (challenging)
// 3. create a new separate view for SHOW and then allowing a user to edit from there. Redirect the user then to an EDIT view, where it's nothing BUT a form. They can click on save and that is the execution to update.
