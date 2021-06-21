import React, { Component } from "react";

class NoteForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your note" />
        <button>Create note</button>
      </form>
    );
  }
}

export default NoteForm;
