// Uses the 'click' function to create elements, by referencing
// the 'button' element

let textElement = document.querySelector('#textElement');
let inputField = document.querySelector('#myTextInput');
let list = document.querySelector('#myList'); 

textElement.addEventListener('click', function() {
    

    
    let newItem = document.createElement('li');
    let inputValue = inputField.value;
    newItem.innerText = inputValue; // Set the text of the list item to the input value

    inputField.value = ""; // Clears input field after submission (event fires)

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', function() {
        newItem.remove(); // This will remove the list item along with the button inside it
    });

    // Append the button to the list item
    newItem.appendChild(removeBtn);

    // Append the list item (with the button) to the list
    list.appendChild(newItem);
});

// Uses the 'Enter' button to create elements by referencing 
// the input field

inputField.addEventListener('keydown', function(event) {
    
    if(event.key === 'Enter' || event.keyCode === 13) {

        let newItem = document.createElement('li');
        let inputValue = inputField.value;
        newItem.innerText = inputValue; // Set the text of the list item to the input value

        inputField.value = ""; // Clears input field after submission (event fires)

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', function() {
            newItem.remove(); // This will remove the list item along with the button inside it
        });

        // Append the button to the list item
        newItem.appendChild(removeBtn);

        // Append the list item (with the button) to the list
        list.appendChild(newItem);
    }
    

});