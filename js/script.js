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

// Adding the delete button "X"
// and CLASS DELETE (DISPLAY: NONE) from the css
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);

  crossOutButton.on('click', function() {
    li.addClass('delete');
  })

// Make the whole list sortable by drag & drop
  $('#list').sortable();
}
