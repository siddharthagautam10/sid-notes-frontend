import React, { useState, useEffect } from 'react';
import { fetchNotes } from '../../api/api';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  console.log('sdfghj')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNotes();
        setNotes(response.data.notes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Notes</h2>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <AddNote setNotes={setNotes} />
      {filteredNotes.map(note => (
        <NoteItem key={note._id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
}

export default NotesList;
