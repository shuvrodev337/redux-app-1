const CustomLogger = (state) => (next) => (action) => {
  console.log("prev state =>", state.getState());
  console.log("action => ", action);
  next(action);
  console.log("current state =>", state.getState());
};

export default CustomLogger;
