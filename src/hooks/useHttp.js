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
      error: action.errorMessage || "Something went wrong",
    };
  }
  return state;
};

const useHttps = (requestedFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async function (additionalData) {
      dispatch({ type: "SEND" });
      try {
        const receivedData = await requestedFunction(additionalData);
        dispatch({ type: "SUCCESS", receivedData });
      } catch (error) {
        dispatch({ type: "ERROR", error });
      }
    },
    [requestedFunction]
  );
  return {
    sendRequest,
    ...httpState,
  };
};
export default useHttps;
