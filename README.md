<h1>Lab Summary</h1>

<h2>Part 1: Install Dependencies</h2>
    <ol>
        <li>Open your terminal in the project directory.</li>
        <li>Install the necessary packages using either Yarn or npm:</li>
</ol>

  <code>
<pre>   
   # npm
    npm install @react-navigation/native @react-navigation/stack
    npm install react-native-gesture-handler react-native-safe-area-context react-native-screens
</pre>
    </code>


<h2>Part 2: Set Up Navigation</h2>
    <ol>
        <li>Open the <code>App.js</code> file.</li>
        <li>Import the required components from <code>react-navigation/stack</code>.</li>
        <li>Create a stack navigator using <code>createStackNavigator</code>.</li>
        <li>Wrap the entire app content in a <code>NavigationContainer</code> component.</li>
    </ol>

<h2>Part 3: Create Screens</h2>
    <ol>
        <li>Create separate components for different screens: <code>HomeScreen.jsx</code> and <code>AboutScreen.js</code>.</li>
        <li>Render the Stack Navigator component in the <code>App</code> component.</li>
    </ol>

<h2>Part 4: Implement Navigation</h2>
    <ol>
        <li>Inside your <code>HomeScreen</code> and <code>AboutScreen</code> components, use <code>props.navigation</code> to navigate to other screens.</li>
    </ol>

<h2>Part 5: Reusable Layout Components</h2>
    <ol>
        <li>Organize your project's folder structure, creating folders for components, screens, and a new "layouts" folder.</li>
        <li>In the "layouts" folder, create a file called <code>MainLayout.jsx</code> with a functional component that serves as a common layout for all screens.</li>
        <li>Import the <code>MainLayout</code> component in your screen components and wrap the content of each screen component with it.</li>
        <li>Optionally, add a Header and/or Footer component to the <code>MainLayout</code> component.</li>
    </ol>

<h2>Part 6: Enhance App (Optional)</h2>
    <ol>
        <li>Enhance your app by adding optional features such as an Easter egg on the About screen, styling screens and navigation elements, and implementing a Drawer Navigator using the React Navigation documentation.</li>
    </ol>

<p>Note: This summary is provided in HTML format for clarity and readability but is intended to be applied to your project's README.md file or documentation.</p>

<p><strong>Note:</strong></p>
This project and README are intended for educational use. Feel free to improve the README as needed to enhance its clarity and completeness. © Property of Southern Alberta Institute of Technology (SAIT) 2023
