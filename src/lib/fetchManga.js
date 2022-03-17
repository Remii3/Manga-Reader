export async function fetchManga(fetchData) {
  const response = await fetch(
    `https://kitsu.io/api/edge/manga?page[limit]=${fetchData.pages}&page[offset]=${fetchData.offset}&sort=${fetchData.sort}`,
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

export async function fetchChapters(fetchData) {
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
export async function fetchChaptersDetails(fetchData) {
  const response = await fetch(
    `https://kitsu.io/api/edge/manga/${fetchData}/chapters?sort=-number`,
    {
      method: "get",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    }
  );
  const data = await response.json();
  return data;
}
