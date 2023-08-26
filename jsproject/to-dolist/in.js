document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    let inputBx = document.querySelector('#inputBx');
    let list = document.querySelector('#list');
    
    inputBx.addEventListener("keyup", function(e) {
        if (e.key === "Enter") {
            addItem(inputBx.value);
            inputBx.value = "";
        }
    });
    
    let addItem = function(itemText) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${itemText}<i class="remove-item"> remove</i>`;
        list.appendChild(listItem);
           
        let removeButton = listItem.querySelector('.remove-item');
        removeButton.addEventListener('click', function() {
            list.removeChild(listItem);
        });
    }
});
