export function fetchRepos(url) {
  return function(dispatch) {
    dispatch({
      type: "FETCH_REPOS_REQUEST",
    });

    return fetch(
      "https://api.github.com/search/repositories?q=created:>" + 
      getDate() + 
      "&sort=stars&order=desc",
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

function getDate(){
  var date = new Date();
  date.setDate(date.getDate() - 30);
  return date.toISOString().split('T')[0];
}