import React from "react";

const RepoDetails = ({ repo }) => {
  return (
    <div className="repo-details">
      <a href={repo.repoUrl} className="repo-details__repo-link">
        {repo.name} &#128540;
      </a>
      <ul className="repo-details__list">
        {repo.contributors.length ? (
          <React.Fragment>
            {repo.contributors.map((contributor, i) => (
              <li key={i}>
                <a
                  className="repo-details__contributer-link"
                  href={contributor.html_url}
                >
                  <span>#{i + 1} - </span>
                  {`${contributor.login} (${contributor.contributions} commits)`}
                </a>
              </li>
            ))}
          </React.Fragment>
        ) : (
          <li>No contributers</li>
        )}
      </ul>
    </div>
  );
};

export default RepoDetails;
