import { Component } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  createNote(title, text){
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesArray
    }
    this.setState(newState)
  }

  deleteNote(index){
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({notes: noteArray})  
  }

  render() {
    return (
      <section className="content">
        <NoteForm createNote={this.createNote.bind(this)}/>
        <NoteList 
          deleteNote={this.deleteNote.bind(this)}
          notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
