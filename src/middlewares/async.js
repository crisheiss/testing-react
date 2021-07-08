export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check to see if action has promise on payload property
    // If it doesn't, send the action to next middleware
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // If it does, wait for it to resolve (get data and dispatch it).
    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
