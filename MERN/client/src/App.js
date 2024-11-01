import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/notes/")
      .then((res) => setNotes(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Notes</h1>

      {notes ? (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
