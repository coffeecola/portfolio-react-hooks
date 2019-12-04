import React from "react";
import RepoList from "./components/RepoList";
import SearchInput from "./components/SearchInput";
import SearchContextProvider from "./contexts/SearchContext";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header jumbotron">
        <div className="container">
          <h1 className="text-white display-3">Github Repo</h1>
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
