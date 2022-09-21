function newItem() {

// Add li-items to the ordered list using jQuery
  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert ('You must write something!');
  } else {
    $('#list').append(li);
  }

// Crossing out an item from the list of items by doubleclicking
// using addEventListener
li.on('dbclick', function() {
  li.addClass('strike');
})
}
