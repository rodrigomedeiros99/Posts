import { Fragment } from "react";
import Card from "./components/card";

function App() {
  return (
    <Fragment>
      <Card title="Pôster: Star Wars (1997)" button="Buy Now" />
      <br></br>
      <Card title="Pôster: Empire Strikes back (1988)" button="Buy Now" />
      <br></br>
      <Card title="Pôster: Return of the jedi (1983)" button="Buy Now" />
    </Fragment>
  );
}

export default App;
