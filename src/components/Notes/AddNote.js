import React, { useState } from 'react';
import { createNote } from '../../api/api';

function AddNote ({ setNotes }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.length > 200) {
      alert('Note content cannot exceed 200 characters');
      return;
    }
    try {
      const response = await createNote({ content });
      setNotes(prevNotes => [...prevNotes, response.data.note]);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a new note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNote;
