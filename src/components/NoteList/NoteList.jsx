import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css"

class NoteList extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note-list_item" key={index}>
              <NoteCard
                id={index} 
                deleteNote={this.props.deleteNote}
                title={note.title} 
                text={note.text}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
