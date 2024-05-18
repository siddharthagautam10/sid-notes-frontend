import React from 'react';
import { deleteNote } from '../../api/api';

function NoteItem({ note, setNotes }) {
  const handleDelete = async () => {
    try {
      await deleteNote(note._id);
      setNotes(prevNotes => prevNotes.filter(n => n._id !== note._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default NoteItem;
