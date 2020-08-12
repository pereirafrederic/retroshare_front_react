import React from "react";
import "./App.scss";
import Container from "./components/externe/bulma/Container";
import Title from "./components/externe/bulma/Title";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import { FlexboxPlacement } from "./enumeration/Enums";

function App() {
  return (
    <div className="App">
      <Header />
      <nav className="App-nav">
        <div>{"nav 1"}</div>
        <div>{"nav 2 "}</div>
      </nav>
      <section className="App-section">
        <div className="container is-fluid">
          <Title title="bob" size={2} />
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
        </div>
        <div className="container is-fluid">
          <Title
            title="energy"
            subtitle="expor"
            flexboxPlacement={FlexboxPlacement.RIGHT}
            size={2}
          />
          <a href="http://localhost:3000/app">
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.
          </a>
        </div>
        <Container fuild={false}>
          <a href="http://localhost:3000/app">
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.
          </a>
        </Container>
      </section>

      <Footer>
        <div>{"footer 1"}</div>
        <div>{"footer 2 "}</div>
      </Footer>
    </div>
  );
}

export default App;
