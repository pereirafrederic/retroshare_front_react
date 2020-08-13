import React, { useState } from "react";
import "./App.scss";
import Container from "./components/externe/bulma/Container";
import Title from "./components/externe/bulma/Title";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Navigation from "./components/pages/Navigation";
import { FlexboxPlacement } from "./enumeration/Enum-css";
import { NavLink } from "./interfaces/interface-props";
import myImage from "./logo-retroshare.png";
import {
  mdiPartyPopper,
  mdiMapMarker,
  mdiAccountTie,
  mdiAccountCircle,
} from "@mdi/js";
import Icon from "@mdi/react";

const navLinks: Array<NavLink> = [
  {
    img: (
      <Icon
        path={mdiPartyPopper}
        title="Evenements"
        size={1.5}
        horizontal
        vertical
        rotate={90}
        color="white"
      />
    ),
    texte: "Evenements",
    href: "/evenement",
  },
  {
    img: (
      <Icon
        path={mdiMapMarker}
        title="Lieux"
        size={1.5}
        horizontal
        rotate={0}
        color="white"
      />
    ),
    texte: "Lieux",
    href: "/lieu",
  },
  {
    img: (
      <Icon
        path={mdiAccountTie}
        title="Utilisateurs"
        size={1.5}
        horizontal
        rotate={0}
        color="white"
      />
    ),
    texte: "Utilisateurs",
    href: "/utilisateur",
  },
];

function App() {
  const [connected, setConnected] = useState(true);

  return (
    <div className="App">
      <Header>
        <figure className="image is-93x128">
          <img src={myImage} alt="retroshare" />
        </figure>
        <div className="App-connexion">
          <Icon
            path={mdiAccountCircle}
            title="Mon compte"
            size={2}
            horizontal
            rotate={0}
            color="black"
          />
          <div onClick={() => setConnected(!connected)}>
            {connected ? (
              <Title
                size={5}
                flexboxPlacement={FlexboxPlacement.LEFT}
                title="pereira frédéric"
                subtitle="se déconnecter"
              />
            ) : (
              <Title
                size={5}
                flexboxPlacement={FlexboxPlacement.LEFT}
                title="se connecter"
                subtitle="mdp oublié ?"
              />
            )}
          </div>
        </div>
      </Header>
      <Navigation navLinks={navLinks}></Navigation>
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
