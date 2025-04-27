// Task 1: Change text content dynamically
const demoParagraph = document.getElementById('demo');
demoParagraph.textContent = 'This paragraph was changed with JavaScript DOM!';

// Task 2: Modify CSS styles via JavaScript
demoParagraph.style.color = 'blue';
demoParagraph.style.fontWeight = 'bold';
demoParagraph.style.fontSize = '1.2em';

// Task 3: Add/remove elements on button click
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    // Create new element
    const newElement = document.createElement('p');
    newElement.textContent = 'New element added by JavaScript!';
    newElement.style.color = 'green';
    
    // Insert after the button
    myButton.insertAdjacentElement('afterend', newElement);
    
    // Remove the button after 3 seconds
    setTimeout(() => {
        myButton.remove();
    }, 3000);
});

// Task 4: Form submission handling
const form = document.querySelector('form');
const input = document.getElementById('myInput');
const ideasList = document.getElementById('myUL');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    if (input.value.trim() !== '') {
        // Create new list item
        const newIdea = document.createElement('li');
        newIdea.textContent = input.value;
        
        // Add delete button to each idea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', function() {
            newIdea.remove();
        });
        
        newIdea.appendChild(deleteBtn);
        ideasList.appendChild(newIdea);
        
        // Clear input
        input.value = '';
    }
});

// Bonus: Change h1 color on hover
const mainHeading = document.querySelector('h1');
mainHeading.addEventListener('mouseover', function() {
    this.style.color = 'purple';
});
mainHeading.addEventListener('mouseout', function() {
    this.style.color = '#333';
});

// Bonus: Toggle background color of ideas
const ideasSection = document.querySelector('.ideas');
ideasSection.addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'lightyellow' ? '#fff' : 'lightyellow';
});