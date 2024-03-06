/* eslint-disable react/prop-types */

import Note from "./components/Note";

const App = (props) => {
  const { notes } = props;

  const result = notes.map(note => note.content)
  console.log(result)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note}/>
        ))}
      </ul>
      
    </div>
  );
};

export default App;
