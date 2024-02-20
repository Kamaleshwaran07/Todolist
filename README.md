# Todo List

This app is used to add your daily task or weekly task and can keep track of your progress in your task

## App

Created a basic layout of the page. The main part of the app will be divided into two parts:

1. Input Component
2. Card Component

### Input Component

This component has the input fields to enter new tasks and store it in the card component

The Submit button will trigger _handlesubmit()_ function which takes value from title and description and sets the title and description value in _addTododata()_ in the App component which in turn stores the data in todo which is passed to the Card component as props.

### Card Component

Todo data is displayed in a card , which contains title, description, status dropdown, Edit button, Remove Button.

Status Dropdown handles the status of Todo by changing the completed key in the todo object which is intially false.

Remove Button removes that particular Todo by sending id as arguments to the main component where it checks whether the id from the card and id in the Todo object is same, if its same it removes the Todo.

### Filter Dropdown

By changing the status dropdown, the completed key is sent to the _useEffect()_ and the cards are filtered accordingly.

### Editing Button

When the edit button is clicked, in _setEditing_ is set as true and with conditional rendering the form inputs are displayed. The edited title and description will set into the newTitle and newDescription. After clicking the Save button the edited title and description is displayed

