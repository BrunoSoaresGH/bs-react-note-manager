import React, { Component } from "react";
import "./style.css"

class NoteForm extends Component {
  render() {
    return (
      <form className="note-form">
        <input 
            type="text" 
            placeholder="Title" 
            className="note-form_input"
        />
        <textarea 
            rows={15}
            placeholder="Write your note..."
            className="note-form_input" 
        />
        <button className="note-form_input note-form_submit">
            Create note
        </button>
      </form>
    );
  }
}

export default NoteForm;
