import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import People from "./Components/People";
import Planets from "./Components/Planets";

import { useState } from "react";

function App() {
  const [page, setPage] = useState("People");
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "People" ? <People /> : <Planets />}
      </div>
    </div>
  );
}

export default App;
