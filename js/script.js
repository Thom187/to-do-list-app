function clearInput() {
  $('#input').val('');
}

function newItem() {

// Add li-items to the ordered list using jQuery
  let list = $('#list');
  let li = $('<li aria-label=listItem></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert ('You must write something!');
  } else {
    $('#list').append(li) &&
    clearInput();
  } 

// Crossing out an item from the list of items by doubleclicking
// using EventListener
  li.on('dblclick', function() {
    li.addClass('strike');
  })

// Adding the delete button "X"
// and CLASS DELETE (DISPLAY: NONE) from the css
  let crossOutButton = $('<Button id=crossOutButton>X</Button>');
  li.append(crossOutButton);

  crossOutButton.on('click', function() {
    li.addClass('delete');
  })

// Make the whole list sortable by drag & drop
  $('#list').sortable();
}
