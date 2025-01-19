const userinput = document.getElementById('userinput'); // Access input field directly
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');

pencil.addEventListener('click', function () {
    console.log("Pencil clicked: Clearing all items");
    allItems.innerHTML = ""; // Clear all the added items
    userinput.value = ""; // Optional: Clear the input field as well
});

// Add item when 'Enter' key is pressed
userinput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

// Function to add item
const addItem = () => {
    if (userinput.value.trim() !== "") { // Check if input is not empty
        const h2 = document.createElement('h2');
        h2.innerHTML = "-" + userinput.value;
        console.log("Item added:", userinput.value);

        // Append the item to the list
        allItems.insertAdjacentElement('beforeend', h2);

        // Clear the input field after adding
        userinput.value = "";

        // Add click listener to mark item as completed
        h2.addEventListener('click', function () {
            h2.style.textDecoration = h2.style.textDecoration === "line-through" ? "none" : "line-through";
        });
    } else {
        console.log("Input is empty. No item added.");
    }
};
