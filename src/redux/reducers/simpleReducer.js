export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case "JSON_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
