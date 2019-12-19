import React from "react";
import RepoList from "./components/RepoList";
import SearchInput from "./components/SearchInput";
import SearchContextProvider from "./contexts/SearchContext";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="header__title">Github Repo</h1>
        </div>
      </header>
      <SearchContextProvider>
        <SearchInput />
        <RepoList />
      </SearchContextProvider>
    </div>
  );
}

export default App;
