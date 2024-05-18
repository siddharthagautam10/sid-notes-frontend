import React, { useState, useEffect } from 'react';
import { fetchNotes } from '../../api/api';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import LogoutButton from '../Auth/Logout';


function NotesList() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNotes();
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // if (!notes || notes.length === 0) {
  //   return <p>No notes available.</p>;
  // }
  console.log(notes)
  const filteredNotes = notes && notes.filter(note =>
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <LogoutButton />
      <h2>Notes</h2> 
      <AddNote setNotes={setNotes} />
      {filteredNotes ? (<>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </>) : ''}
      {filteredNotes && filteredNotes.map(note => (
        <NoteItem key={note._id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
}

export default NotesList;
