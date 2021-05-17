import { AiFillDelete } from "react-icons/ai";

const Note = ({ text, date, id, handleDeleteNote }) => {
  return (
    <div className='note'>
      <span>{text}</span>
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
