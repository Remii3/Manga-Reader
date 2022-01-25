export default async function fetchAllBooks() {
  const response = await fetch("https://kitsu.io/api/edge/anime", {
    method: "GET",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  });
  const data = await response.json();
  return data;
}
export async function fetchOneBooks() {
  const response = await fetch(
    "https://kitsu.io/api/edge/anime?page[limit]=5",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    }
  );
  const data = await response.json();
  return data;
}
