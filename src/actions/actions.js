export function fetchRepos() {
  return function(dispatch) {
    dispatch({
      type: "FETCH_REPOS_REQUEST",
    });

    return fetch(
      "https://api.github.com/search/repositories?q=sort=stars&order=desc",
    )
      .then(response => response.json().then(body => ({response, body})))
      .then(({response, body}) => {
        if (!response.ok) {
          dispatch({
            type: "FETCH_REPOS_FAILURE",
            error: body.error,
          });
        } else {
          dispatch({
            type: "FETCH_REPOS_SUCCESS",
            repos: body.items,
          });
        }
      });
  };
}