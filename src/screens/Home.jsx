import React, { useState } from 'react';
import { SafeAreaView, Alert, Button } from 'react-native';
import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';


function Home({navigation}) {
    const [tasks, setTasks] = useState([
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]);
  
    const addTask = (newTask) => {
      if (!tasks.includes(newTask)) {
        setTasks(prevTasks => [...prevTasks, newTask]);
      } else {
        Alert.alert('Error', 'Task already exists.');
      }
    };
  
    return (
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm onAdd={addTask} />

        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    );
  }
  
export default Home;

