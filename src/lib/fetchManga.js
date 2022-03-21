export const fetchManga = async (fetchURL) => {
  const response = await fetch(fetchURL, {
    method: "GET",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  });
  const data = await response.json();
  return data;
};

// export const fetchChapters = async (fetchData) => {
//   // console.log(fetchData);
//   const response = await fetch(
//     `https://kitsu.io/api/edge/manga/${fetchData}/chapters?sort=-number`,
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/vnd.api+json",
//         "Content-Type": "application/vnd.api+json",
//       },
//     }
//   );
//   const data = await response.json();
//   return data;
// };

// export const fetchMangaDetails = async (fetchURL) => {
//   const response = await fetch(fetchURL, {
//     method: "GET",
//     headers: {
//       Accept: "application/vnd.api+json",
//       "Content-Type": "application/vnd.api+json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// export const fetchMangaGenres = async (fetchData) => {
//   try {
//     const response = await fetch(
//       `https://kitsu.io/api/edge/manga/${fetchData}/genres`,
//       {
//         method: "GET",
//         headers: {
//           Accept: "application/vnd.api+json",
//           "Content-Type": "application/vnd.api+json",
//         },
//       }
//     );
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
