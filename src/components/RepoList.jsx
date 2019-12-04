import React, { useContext } from "react";
import RepoDetails from "./RepoDetails";
import { SearchContext } from "../contexts/SearchContext";

const RepoList = () => {
  const { repos, loading, errors } = useContext(SearchContext);

  return (
    <section className="container repo-list">
      {errors ? <p className="mt-3">{errors.message}</p> : ""}

      {loading ? (
        <p className="mt-3">Loading...</p>
      ) : (
        repos.map(repo => <RepoDetails key={repo.id} repo={repo} />)
      )}
    </section>
  );
};

export default RepoList;
