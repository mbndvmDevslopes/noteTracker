import { useState } from 'react';
import { Note } from '../../types/types';

export const CreateNoteForm = ({
  createNote,
  isLoading,
}: {
  createNote: (note: Omit<Note, 'id'>) => void;
  isLoading: boolean;
}) => {
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(titleInput, contentInput);
        createNote({
          title:titleInput,
          content: contentInput
        });
        setTitleInput('');
        setContentInput('');
      }}
    >
      <h3>Create New Note</h3>
      <div style={{ marginBottom: 45 }}>
        <label htmlFor="title">Title</label>
        <input
          value={titleInput}
          type="text"
          name="title"
          id=""
          placeholder={'title'}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          style={{ minHeight: 100 }}
          value={contentInput}
          type="text"
          name="content"
          placeholder={'content'}
          id=""
          onChange={(e) => setContentInput(e.target.value)}
        />
      </div>
      <button type="submit" disabled= {isLoading}>Submit</button>
    </form>
  );
};
