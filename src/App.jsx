import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

import Coreconcept from "./components/Coreconcept";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/Header/Tabbutton/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Crocodylia"); // degisen veriyi tutmak

  function handleSelect(content) {
    setSelectedTopic(content);
  }

  return (
    <div className="x">
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            <Coreconcept data={CORE_CONCEPTS}></Coreconcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Details</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "Crocodylia"}
              label="Crocodylia"
              onSelect={() => {
                //button content
                handleSelect("Crocodylia");
              }}
            ></TabButton>
            <TabButton
              isSelected={selectedTopic === "Lizard"}
              label="Lizard"
              onSelect={() => {
                handleSelect("Lizard");
              }}
            ></TabButton>
            <TabButton
              isSelected={selectedTopic === "Snake"}
              label="Snake"
              onSelect={() => {
                handleSelect("Snake");
              }}
            ></TabButton>
            <TabButton
              isSelected={selectedTopic === "Tortoises"}
              label="Tortoises"
              onSelect={() => {
                handleSelect("Tortoises");
              }}
            ></TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
