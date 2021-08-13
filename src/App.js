import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Test note",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode} darkmode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) => note.text.includes(searchText))}
          handleAddNote={AddNote}
          handleDeleteNote={DeleteNote}
        />
      </div>
    </div>
  );
};
export default App;
