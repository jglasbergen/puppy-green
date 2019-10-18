export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

export const jsonAction = () => dispatch => {
    dispatch({
        type: "JSON_ACTION",
        payload: "result_of_json_action"
    });
};