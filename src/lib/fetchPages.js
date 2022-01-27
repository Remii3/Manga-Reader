export default async function fetchAllBooks() {
  const response = await fetch(
    "https://kitsu.io/api/edge/manga?page[limit]=10&page[offest]=0,sort=id",
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
export async function fetchOneBook() {
  const response = await fetch(
    "https://kitsu.io/api/edge/manga?page[limit]=5&page[offset]=0",
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
export async function fetchEpisodes(link) {
  const response = await fetch(`${link}?sort=-number`, {
    method: "get",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  });
  const data = await response.json();
  return data;
}
