// Function to add new item to the list
function addItem() {
    var inputField = document.getElementById("todo-input");
    var itemText = inputField.value.trim();

    if (itemText !== "") {
        var ul = document.getElementById("todo-list");
        var li = document.createElement("li");
        li.textContent = itemText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        ul.appendChild(li);

        inputField.value = "";
    } else {
        alert("Please enter a valid item.");
    }
}

