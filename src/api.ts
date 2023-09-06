import { Note } from '../types/types';

const BASE_URL = 'http://localhost:3000';

export const Requests = {
  getAllNotes: (): Promise<Note[]> =>
    fetch(`${BASE_URL}/notes`).then((response) => response.json()),

  createNote: (note: Omit<Note, 'id'>) => {
    return fetch(`${BASE_URL}/notes`, {
      body: JSON.stringify(note),
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
  },

  deleteNote: (note: Note) => {
    return fetch(`${BASE_URL}/notes/note.id`, {
      body: JSON.stringify(note),
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
  },
};
