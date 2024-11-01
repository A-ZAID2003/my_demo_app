import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios'; 

const AllNotes = () => {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoaading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try{
            const response = await axios.get("http://localhost:5000/notes");
            setNotes(response.data);
            } catch (err) {
            setError(err.message);
            } finally {
            setLoaading(false);
            }
        };

        fetchNotes(); 
    }, []);

    if (loading) return <p>Loading Notes...</p>
    if (error) return <p>Error: {error} </p>

    const onDelete = async (_id) => {
    console.log("Deleting note with id:", _id);  // Log the ID for debugging
    try {
        await axios.delete(`http://localhost:5000/notes/${_id}`);
        setNotes(notes.filter(note => note._id !== _id));  // Filter out the deleted note
    } catch (err) {
        console.error("Failed to delete note:", err.message);
    }
};

  return (
    <div className="container mt-5">
      <h2>All Notes</h2>
      {notes.length === 0 ? (
        <p>No notes available..</p>
      ) : (
        <ul className='list-group'>
            {notes.map((note) => (
                <li key={note._id} className='list-group-item mb-3'>
                    <h5>{note.title}</h5>
                    <p>{note.content}</p>
                    <button type="button" className="btn btn-danger" onClick={() => onDelete(note._id)}>Delete</button>
                </li>
            ))}
        </ul>
    )}
    </div>
  );
};

export default AllNotes
