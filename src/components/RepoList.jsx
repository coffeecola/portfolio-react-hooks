import React, { useContext } from "react";
import RepoDetails from "./RepoDetails";
import { SearchContext } from "../contexts/SearchContext";

const RepoList = () => {
  const { repos, loading, errors } = useContext(SearchContext);

  return (
    <section className="container section-repolist">
      {errors ? <p className="u-margin-bottom-small">{errors.message}</p> : ""}

      {loading ? (
        <p className="u-margin-bottom-small">Loading...</p>
      ) : (
        repos.map(repo => <RepoDetails key={repo.id} repo={repo} />)
      )}
    </section>
  );
};

export default RepoList;
