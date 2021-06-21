import { Component } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="content">
        <NoteForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
