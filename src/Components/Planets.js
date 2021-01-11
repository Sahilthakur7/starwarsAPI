import React, { useState } from "react";
import { useQuery } from "react-query";

import Planet from "./Planet";

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(
    ["Planets", page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  );
  console.log("data-", data);
  console.log("status-", status);
  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Data is being loaded</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button onClick={() => setPage((old) => Math.max(old - 1, 0))}>
            Prev Page
          </button>
          {page}
          <button onClick={() => setPage((old) => old + 1)}>Next Page</button>
          <div>
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
