import React, { createContext, useState } from "react";
import { getRepos } from "../services/githubServices";

export const SearchContext = createContext();

const SearchContextProvider = props => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    setLoading(true);
    setSearchQuery("");
    const { repos, error } = await getRepos(searchQuery);
    setRepos(repos);
    setErrors(error);
    setLoading(false);
  };

  return (
    <SearchContext.Provider
      value={{
        props,
        searchQuery,
        errors,
        repos,
        loading,
        handleSearchChange,
        handleSearchSubmit
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
