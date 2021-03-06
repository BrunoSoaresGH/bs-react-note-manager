import React, { Component } from "react";
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/delete.svg"

class NoteCard extends Component {

  delete(){
    const id = this.props.id;
    this.props.deleteNote(id);
  }

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">{this.props.title}</h3>
          <DeleteSVG onClick={this.delete.bind(this)}/>
        </header>
        <p className="card-note_text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;
