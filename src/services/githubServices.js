const parse = require("parse-link-header");

const config = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
};

const getAllGithubResults = async (url, results = []) =>
  fetch(url, config).then(res =>
    res
      .json()
      .then(data => ({
        headers: res.headers,
        data
      }))
      .then(async ({ data, headers }) => {
        const link = headers.get("Link");

        if (res.status > 300) {
          return { error: new Error(res.statusText), data: [] };
        }

        const concatResults = [...results, ...data];
        const parsedLink = link && parse(link);

        if (!parsedLink || !parsedLink.next) {
          return { data: concatResults };
        }

        return getAllGithubResults(parsedLink.next.url, concatResults);
      })
      .catch(error => ({ error: new Error(error), data: [] }))
  );

export const getRepos = async userName => {
  const { data, error } = await getAllGithubResults(
    `https://api.github.com/users/${userName}/repos`
  );

  console.log(data);
  return {
    error,
    repos: await Promise.all(
      data.map(({ contributors_url, full_name, html_url, id }) =>
        getAllGithubResults(contributors_url).then(allContributors => ({
          name: full_name,
          repoUrl: html_url,
          id: id,
          contributors: allContributors.data
            .map(({ contributions, html_url, login, avatar_url, id }) => ({
              contributions,
              html_url,
              login,
              avatar_url,
              id
            }))
            .sort((a, b) => b.contributions - a.contributions)
        }))
      )
    )
  };
};
