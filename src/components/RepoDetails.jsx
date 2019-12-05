import React from "react";

const RepoDetails = ({ repo }) => {
  console.log("RepoDetails");
  console.log(repo);
  return (
    <div className="border-bottom  py-4">
      <a href={repo.repoUrl} className="mb-0 repo__link">
        {repo.name}
      </a>
      <ul className="mb-0">
        {repo.contributors.length ? (
          <React.Fragment>
            {repo.contributors.map((contributor, i) => (
              <li key={i}>
                <a className="contributer__link" href={contributor.html_url}>
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
