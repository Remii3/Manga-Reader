import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.receivedData,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage || "",
    };
  }
  return state;
};

export const useHttps = (requestedFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async function (fetchData, mangaType) {
      let fetchURL = "";
      if (mangaType === "CURRENT") {
        fetchURL = `https://kitsu.io/api/edge/manga?filter[id]=${fetchData}&include=genres,chapters`;
      } else if ("ALL_MANGA") {
        fetchURL = `https://kitsu.io/api/edge/manga?page[limit]=${fetchData.pages}&page[offset]=${fetchData.offset}&sort=${fetchData.sort}`;
      }

      dispatch({ type: "SEND" });
      try {
        const receivedData = await requestedFunction(fetchURL);
        if (receivedData.errors) {
          dispatch({ type: "ERROR", errorMessage: receivedData.errors });
        } else {
          dispatch({ type: "SUCCESS", receivedData });
        }
      } catch (error) {
        dispatch({ type: "ERROR", errorMessage: error });
      }
    },
    [requestedFunction]
  );
  return {
    sendRequest,
    ...httpState,
  };
};
