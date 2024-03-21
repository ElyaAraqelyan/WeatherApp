import React from "react";
import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";

const Searcher = ({ search, setSearch, searchPressed }) => {
  return (
    <form onSubmit={searchPressed}>
      <MyInput
        value={search}
        placeholder="Enter city name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <MyButton onClick={searchPressed}>Search</MyButton>
    </form>
  );
};

export default Searcher;
