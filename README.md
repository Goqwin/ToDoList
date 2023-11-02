<h1> Lab-Layout-Components </h1>
<h2>CPRG303: Mobile Development Lab-Assignment </h2>

<h3> Lab 4: State Lifting and Event Handling</h3>

<h3>Part 1: Implement and Pass addTask Function</h3>
<ul>
    <li><strong>Define addTask in App Component:</strong><br>
        Inside the App component, define a new function called addTask. This function will later be responsible for updating the task list.
    </li>
    <li><strong>Provide addTask as a Property:</strong><br>
        When rendering the ToDoForm component inside App, provide this addTask function as a property so it can be used within the form.
    </li>
    <li><strong>Access addTask in ToDoForm:</strong><br>
        Within the ToDoForm component, access the passed addTask function from the component's properties.
    </li>
</ul>

<h3>Part 2: Pass Task to App Component</h3>
<ul>
    <li><strong>Create Local State for Task Text:</strong><br>
        In the ToDoForm component, create a local state variable, say taskText. This will hold the text the user types for a new task.
    </li>
    <li><strong>Connect State to Input Field:</strong><br>
        Connect this state variable (taskText) to the text input field. This ensures that when a user types something, the state variable updates accordingly.
    </li>
    <li><strong>Set Up Button Action:</strong><br>
        For the submission button in the form, set up an action such that when it's pressed, the addTask function is called with the current value of taskText (i.e., the new task).
    </li>
</ul>

<h3>Part 3: Implement addTask in App Component</h3>
<ul>
    <li><strong>Update Task List in addTask:</strong><br>
        Inside the addTask function in the App component, introduce logic to update the list of tasks. This will involve adding the new task (passed to it when called) to the existing list of tasks.
    </li>
    <li><strong>Append New Task:</strong><br>
        Ensure that when updating the list, the new task gets appended to the end of the existing tasks.
    </li>
</ul>

<h3>Part 4: Enhancing Your App (Optional)</h3>
<ul>
    <li><strong>Clear Input Field:</strong><br>
        After a new task is successfully added, clear the input field in ToDoForm. This provides a clean slate for the user to add another task.
    </li>
    <li><strong>Check for Duplicate Tasks:</strong><br>
        Before adding a new task to the list, check if it already exists in the current task list. If it does, avoid adding it again to prevent duplicates. Optionally, provide feedback to the user if they try to add a duplicate task.
    </li>
</ul>


<p><strong>Note:</strong></p>
This project and README are intended for educational use. Feel free to improve the README as needed to enhance its clarity and completeness. © Property of Southern Alberta Institute of Technology (SAIT) 2023
