import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css"

class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {Array.of("Work", "Work", "Study").map((category, index) => {
          return (
            <li className="note-list_item" key={index}>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;