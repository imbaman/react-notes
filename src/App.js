import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "adsasdasda111111",
      date: "01/01/2001",
    },
    {
      id: nanoid(),
      text: "adsasdasda222222",
      date: "01/01/2001",
    },
    {
      id: nanoid(),
      text: "adsasdasda333333",
      date: "01/01/2001",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

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
