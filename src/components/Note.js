import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
const Note = ({ text, date, id, handleDeleteNote }) => {
  const crossLine = (e) => {
    e.target.classList.toggle("crossed-line");
  };
  return (
    <div className='note'>
      <span
        onClick={(e) => {
          crossLine(e);
        }}>
        {text}
      </span>
      <div className='note-footer'>
        <small>{date}</small>
        <AiFillDelete
          onClick={() => {
            handleDeleteNote(id);
          }}
          className='icon'
          size='1.5em'
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Note;
