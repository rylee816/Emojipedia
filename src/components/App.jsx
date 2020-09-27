import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function newEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(newEntry)}</dl>
    </div>
  );
}

export default App;
