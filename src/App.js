import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import People from "./Components/People";
import Planets from "./Components/Planets";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("People");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "People" ? <People /> : <Planets />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
