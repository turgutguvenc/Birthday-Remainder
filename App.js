import React, { useState } from "react";
import data from "./data";
import List from "./List";
export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List data={people} />
        <button onClick={(e) => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}
