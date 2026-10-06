import { useState } from "react";
import "./App.css";

//Main Component
function App() {
  //State-variabel with object
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
      <h1>Workout Companion</h1>
    </header>
    <section>
     <WorkoutForm text={text} setText={setText} onAdd={addExercises} />
     <ul className="workout-list">
      {exercises.map((workout) => (
        <li key={workout.id} className={workout.done ? "workout completed" : "workout"}>
          <button type="button" onClick={() => toggleDone(workout.id)}>
            {workout.done ? "Deselect" : "Done"}
          </button>{" "}
          {workout.text}{" "}
          <button type="button" onClick={() => removeExercise(workout.id)}>
            Delete
          </button>
        </li>
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
        placeholder="Add new exercise"
      />
      <button type="submit">Add</button>
    </form>
  );
}
 



