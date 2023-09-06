import  { Component } from 'react';

import '../app.css'
import { Note } from '../../types/types';
import { NotesList } from '../NotesList';
import { ActiveNote } from './ActiveNote';
import {CreateNoteForm} from './CreateNoteForm';
import { Requests } from '../api';
import toast from 'react-hot-toast';
import { SectionLayout } from './Layouts/SectionLayout';

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

/* const getAllNotes = () =>
  fetch('http://localhost:3000/notes').then((response) => response.json()); */

type State = {
  activeNote: Note | null;
  allNotes: Note[];
  isLoading:boolean;
};

 export class App extends Component<Record<string, never>, State> {  //==========<Record<string, never>> means empty props=====================

  state: State = {
    activeNote: null,
    allNotes: [],
    isLoading: false,
  };

  refetchData = () => {
    this.setState({isLoading: true})
    return  Requests.getAllNotes().then((notes) => {
      this.setState({allNotes:notes})}
      ).finally(()=> this.setState({isLoading:false}))
  }
  componentDidMount(): void {
    this.refetchData()
  }
  
  createNote=(note: Omit<Note, "id">) => {
    this.setState({isLoading: true})
Requests.createNote(note)
 .then(()=> {this.refetchData()})
 .then(() => toast.success("Thank you for creating this note"))
.finally(()=>this.setState({isLoading:false}))
}  // or then(this.refetchData())

/* deleteNote = (note:Note)=> {
  Requests.deleteNote(note)
  .then(()=> {this.refetchData()})}  // or then(this.refetchData())

 */
  

  render() {
    const {allNotes, activeNote} = this.state;
    return (
      <>
      
    <SectionLayout backgroundColor={'palegreen'}>
      <h1>hello</h1>
    </SectionLayout>

      <SectionLayout backgroundColor={'blueviolet'}>
      </SectionLayout>

      <SectionLayout backgroundColor={'tomato'}>
        
      </SectionLayout>

        <h1>Notes App</h1>
        <h2>{this.state.isLoading?"Loading....":""}</h2>
        <NotesList 
        setActiveNote={(note) => {
          
          this.setState({activeNote:note});
        }}
          allNotes={allNotes}
          />
       <ActiveNote note={activeNote} />
      
      <CreateNoteForm createNote={this.createNote} isLoading={this.state.isLoading} />
      </>
    );
  
}
 }