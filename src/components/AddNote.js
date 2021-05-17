import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    } else {
      alert("note must contain text");
    }
    setNoteText("");
  };

  return (
    <div className='note new'>
      <textarea
        onChange={handleChange}
        value={noteText}
        placeholder='write note'
        cols='10'
        rows='9'></textarea>
      <div className='note-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className='save' onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
