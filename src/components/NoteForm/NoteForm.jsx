import React, { Component } from "react";
import "./style.css"

class NoteForm extends Component {

  constructor(props){
    super(props);
    this.title = "";
    this.text = "";
  }

  handleTitleChange(event){
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleTextChange(event){
    event.stopPropagation();
    this.text = event.target.value;
  }

  createNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="note-form"
            onSubmit={this.createNote.bind(this)}
      >
        <input 
            type="text" 
            placeholder="Title" 
            className="note-form_input"
            onChange={this.handleTitleChange.bind(this)}
        />
        <textarea 
            rows={15}
            placeholder="Write your note..."
            className="note-form_input"
            onChange={this.handleTextChange.bind(this)} 
        />
        <button className="note-form_input note-form_submit">
            Create note
        </button>
      </form>
    );
  }
}

export default NoteForm;
