import React, { useState } from "react";

import { useSelector } from "react-redux";
import { StorePlayers, ItemPlayers } from "../../store/ducks/ReducerPlayers/types";

import "./SearchPlayers.css";

const SearchPlayers = () => {
  const players = useSelector(
    (state: StorePlayers) => state.players.dataPlayers
  );

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>(null);

  const pesquisa = (e: any) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    if (players !== null) {
      const resultsArray = players.filter((person: ItemPlayers) =>
        person.player.toLowerCase().includes(search)
      );
      setResults(resultsArray);
    }

    if (search === "") {
      setResults(null);
    }
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="grid-search">
      <span>
        {" "}
        <strong>Search Players</strong>{" "}
      </span>{" "}
      <br />
      <input
        className="searchInput"
        type="text"
        placeholder="search"
        id="search"
        value={search}
        onChange={pesquisa}
      />
      {results !== null &&
        results.map((item: ItemPlayers) => {
          if (results !== "") {
            return (
              <div key={item.id} className="card-search">
                <span style={{ color: "#ed1b66" }}>
                  {" "}
                  <strong style={{ color: "black" }}>Name: </strong>
                  {item.player}
                </span>
                <span style={{ color: "#ed1b66" }}>
                  {" "}
                  <strong style={{ color: "black" }}>Age: </strong>
                  {item.age}
                </span>
              </div>
            );
          }
          return null
        })}
    </div>
  );
};

export default SearchPlayers;
