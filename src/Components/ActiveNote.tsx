import { Note } from '../../types/types';

export const ActiveNote = ({ note,}: { note: Note | null}) => {
  return (
    <section className="my-notes">
      <h3>My note</h3>
      <div>
        <b>Title: </b>
        {note?.title}
      </div>
      <div>
        <b>Content: </b>
        {note?.content}
      </div>
      <button>Delete this note</button>
    </section>
  );
};
