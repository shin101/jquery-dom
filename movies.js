// append them to the DOM along with a button to remove each title and rating from the DOM.

$('#submit').on('click',function(event){
    console.log('outer');
    event.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    $('form').append('<div class="item">' +title + rating +'<button id="delete">Delete</button>' + '</div>');

    // $('form').append("<button id='delete'>Delete</button>");
    // $('#delete').on('click', function(e) {
    //     e.preventDefault();
    //     $(e.target).closest('.item').remove();
    // });
});

$('form').on('click', '.item', function(e) {
    e.preventDefault();
    console.log(e.target);
    $(e.target).closest('.item').remove();
});

// When the button to remove is clicked, remove each title and rating from the DOM.

// $('remove').on('click',function(){
//     $(this).remove();
// })