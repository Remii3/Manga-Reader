export default async function fetchAllBooks(fetchData) {
  const response = await fetch(
    `https://kitsu.io/api/edge/manga?page[limit]=${fetchData.pages}&page[offset]=${fetchData.offset}&sort=${fetchData.sorting}`,
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
export async function fetchFewBook() {
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
export async function fetchEpisodes(fetchData) {
  const response = await fetch(`${fetchData.chapters}?sort=-number`, {
    method: "get",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  });
  const data = await response.json();
  return data;
}
