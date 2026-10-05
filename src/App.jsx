import { useState } from "react";
import "./App.css";

function App() {
  //State-variabel med object. 
  const [exercise, setExercise] = useState([
    { id: 1, text: "Benchpress 3x10", done: false },
    { id: 2, text: "Pullups 3x10", done: true },
  ]);
  //Statevariabel empty, tracks user input.
  const [text, setText] = useState("");

//Trimmad text, indatavalidation, spread operator, date.now (unique timebased id)
function addExercise(e) {
  e.preventDefault();
  const trimmed = text.trim();
  if (!trimmed) return;
  setExercise([
    ...exercise,
    { id: Date.now(), text: trimmed, done:false }
  ]);
  setText("");
}
//Go trough every id, call it for now item, if its the correct one create copy and set done to opposite.
function toggleDone (id) {
  setExercise (
    exercise.map((workout) => (workout.id === id ? {...workout, done: !workout.done} : workout))
  );
}
//Filter trough the list, save all the workout except the matching one, delete it and then display the list again.
function removeExercise (id) {
  setExercise (exercise.filter((workout) => workout.id !== id));

}

return (
  <main>
    <header>
      <h1>Workout Companion</h1>
    </header>
    <section>

    </section>
  </main>
);
}
export default App
 