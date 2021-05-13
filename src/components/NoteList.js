import Note from './Note'

const NoteList = ({notes}) =>{
    return(
        <div className='note-list'>
            {notes.map((note) => (
                 <Note key={note.id} id={note.id} text={note.text} date={note.date}/>
            ))}
        </div>
    )
}


export default NoteList