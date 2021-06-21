import { Component } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

class App extends Component {
  render() {
    return (
      <section>
        <NoteForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
