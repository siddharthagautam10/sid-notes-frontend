import React, { useState } from 'react';
import { createNote } from '../../api/api';

function AddNote ({ setNotes, showNoteform }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.length > 200) {
      alert('Note content cannot exceed 200 characters');
      return;
    }
    try {
      const response = await createNote({ content });
      setNotes(prevNotes => [...prevNotes, response.data]);
      showNoteform(false);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{border:'1px solid', padding:'10px', paddingTop:'30px', width:'300px', position:'relative'}}>
      <a onClick={()=>showNoteform(false)} style={{position:'absolute', right:'10px', top:0}}>Close</a>
      <div><textarea
        placeholder="Add a new note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        maxLength="200"
        style={{width:'100%'}}
      />
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNote;
