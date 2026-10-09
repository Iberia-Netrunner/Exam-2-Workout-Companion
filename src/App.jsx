import { useState } from "react";
import "./App.css";
import { Trash } from 'lucide-react';

//Main Component
function App() {
  //State-variabel array with object
  const [exercises, setExercises] = useState([
    { id: 1, text: "Benchpress 3x10", done: false },
    { id: 2, text: "Pullups 3x10", done: false },
  ]);
  
//Statevariabel empty, tracks user input/mirrors.
const [text, setText] = useState("");

//Trimmad text, indatavalidation, spread operator, date.now (unique timebased id)
function addExercises(e) { 
  e.preventDefault();
  const trimmed = text.trim();
  if (!trimmed) return;
  setExercises([
    ...exercises,
    { id: Date.now(), text: trimmed, done:false }
  ]);
  setText("");
}
//Go trough every id, call it for now workout, if its the correct one create copy and set done to opposite.
function toggleDone (id) {
  setExercises (
    exercises.map((workout) => (workout.id === id ? {...workout, done: !workout.done} : workout))
  );
}
//Filter trough the list, save all the workout except the matching one, delete it and then display the list again.
function removeExercise (id) {
  setExercises (exercises.filter((workout) => workout.id !== id));

}
//Value that user types passes it, update function, submit handler as props.
//Package recieved as WorkoutForm
return (
  <main>
    <header>
      <h1>Workout To-Do list</h1>
      <p>Your own Exercise Tracker</p>
    </header>
    <section>
     <WorkoutForm 
           text={text} 
           setText={setText} 
           onAdd={addExercises} 
          />
     <ul className="workout-list">
       {exercises.map((workout) => (
         <WorkoutItem 
           key={workout.id} 
           workout={workout} 
           onToggle={toggleDone} 
           onRemove={removeExercise} 
         />
        ))}
      </ul>
    </section>
  </main>
);
}
export default App

//Child component that stores data from parent component trough props and communicates.
function WorkoutForm(props) {
  return (
    <form onSubmit={props.onAdd}>
      <input
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
        placeholder="Add new exercise..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
 
//Child component that handles single task
function WorkoutItem(props) {
  return (
    <li className={props.workout.done ? "workout completed" : "workout"}>
      <button type="button" onClick={() => props.onToggle(props.workout.id)}>
        {props.workout.done ? "Undo" : "Done"}
      </button>{" "}
      
      <span>{props.workout.text}{" "}</span>
      
      <button type="button" onClick={() => props.onRemove(props.workout.id)} className="trash-button">
       <Trash size={17}/> 
      </button>
    </li>
  );
}
