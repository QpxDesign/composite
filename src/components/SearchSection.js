import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdFilterList } from "react-icons/md";
import FactSheet from "./FactSheet";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();
let location = history.location;

export default function () {
  const DOED_URL = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=2isPJFEAwppZPL8yc6fmbepPnDRu56bYPyhaBCr0`;
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    findDOEDData();
  };
  async function findDOEDData() {
    setLoading(true);
    fetch(DOED_URL)
      .then((response) => response.json())
      .then((res) => findSchoolData(res, search))
      .then((r) => {
        setResults(r);
        setLoading(false);
      });
  }
  async function findSchoolData(res, schoolName) {
    return await fetch(DOED_URL + "&school_name=" + schoolName)
      .then((res) => res.json())
      .then((r) => {
        return r.results;
      });
  }
  return (
    <>
      <div className="search-wrapper">
        <form onSubmit={() => handleSubmit}>
          <input
            type="search"
            className="search-bar"
            value={search}
            onChange={handleSearch}
          />
          <button className="search-button" onClick={handleSubmit}>
            <BiSearchAlt />
          </button>
        </form>
      </div>
      {loading ? <div style={{ paddingBottom: ".5em" }}>Loading...</div> : null}
      {results !== null && results != undefined && results != "" && !loading ? (
        <FactSheet result={results[0]} />
      ) : null}
      {results !== null && results.length === 0 && !loading ? (
        <span style={{ paddingBottom: ".5em" }}>Nothing Found {":("}</span>
      ) : null}
    </>
  );
}
