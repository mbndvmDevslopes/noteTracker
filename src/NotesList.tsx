import { Note } from '../types/types';

export const NotesList = ({
  allNotes,
  setActiveNote,
}: {
  allNotes: Note[];
  setActiveNote: (note:Note|null) => void;
}) => {
  return (
    <section className="notes-list">
      <ul>
        <h3>All Notes</h3>
        {allNotes.map((note) => (
          <li
            key={note.id}
            onClick={() => {
              setActiveNote(note );
            }}
          >
            {note.title}
          </li>
        ))}
      </ul>
    </section>
  );
};
