import {AiFillDelete} from 'react-icons/ai'

const Note = ({text,date,id}) =>{
    return ( 
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <AiFillDelete className='icon' size='1.5em' style={{cursor:'pointer'}}/>
            </div>
        </div>
    )
}

export default Note