import { useState, useEffect } from 'react';

import '../app.css'
import { Requests } from '../api';
import { Note } from '../../types/types';
import { NotesList } from '../NotesList';
import { ActiveNote } from './ActiveNote';
import { CreateNoteForm } from './CreateNoteForm';
import toast from 'react-hot-toast';

const notes: Note[] = [
  {
    id: 1,
    title: 'note 1',
    content: 'i am note 1',
  },
  {
    id: 2,
    title: 'note 2',
    content: 'i am note 2',
  },
  {
    id: 3,
    title: 'note 3',
    content: 'i am note 3',
  },
];

const getAllNotes = () =>
  fetch('http://localhost:3000/notes').then((response) => response.json());

export function App() {
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [allNotes, setAllNotes] =useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(false)
 
 /* useEffect(()=> {
    //this function gets called when anything inside b changes
  }[])  when empty[], triggers onMount...fires once on loading(twice in dependency mode).  Jon says always use at least empty array even though optional
  */
useEffect(()=> {
  getAllNotes().then(setAllNotes)
},[])

const createNote=(note: Omit<Note, "id">) => {
 
  setIsLoading(true)
  Requests.createNote(note)
   .then(()=> refetchData())
   .then(()=> toast.success("Thank you for creating this note"))
   .finally(() => setIsLoading(false))
  
}
  
    const refetchData = () => {
      setIsLoading(true)
      return  Requests.getAllNotes().then((notes) => {
        setAllNotes(notes)})
        .finally(() =>setIsLoading(false))
    }

   /*  const deleteNote = (note:Note)=> {
      Requests.deleteNote(note)
      .then(()=> {refetchData()})}  // or then(this.refetchData()) */
    

return (
  <>
    <h1>Notes App</h1>
    <h2>{isLoading?"Loading....":""}</h2>
    <NotesList 
    setActiveNote={setActiveNote}
      allNotes={allNotes}
      />
   <ActiveNote note={activeNote} />
  
  <CreateNoteForm createNote={createNote} isLoading={isLoading}/>
  </>
);
}
