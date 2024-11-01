import axios from "axios";
import { React, useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClickAdd = async () => {
    try {
      await axios.post("http://localhost:5000/notes", {
        title,
        content,
      });
      setTitle("");
      setContent("");
      alert("Note added Successfully");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="m-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="title"
          placeholder="Your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="notes" className="form-label">
          Your Notes...
        </label>
        <textarea
          className="form-control"
          id="notes"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClickAdd}>
        Add
      </button>
    </div>
  );
};

export default AddNote;
