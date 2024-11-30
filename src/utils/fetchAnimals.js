async function fetchDogs(n = 9, dogAPIKey) {
  const response = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=" + n,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": dogAPIKey,
      },
      redirect: "follow",
    },
  )
    .then((resp) => resp.json())
    .catch((err) => console.log("Error occurred on dogs fetching: ", err));
  return response;
}

export { fetchDogs };
