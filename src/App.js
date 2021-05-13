import {useState} from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList'



const App = () =>{
  
const [notes, setNotes] = useState([
  {
    id:nanoid(),
    text:'adsasdasda111111',
    date:'01/01/2001',
  },
  {
    id:nanoid(),
    text:'adsasdasda222222',
    date:'01/01/2001',
  },
  {
    id:nanoid(),
    text:'adsasdasda333333',
    date:'01/01/2001',
  },
])

  return (
    <div className='container'>
    <h1>Notes</h1>
    <NoteList notes={notes}/>
    </div>
  )
}
export default App