const initialState = {
  navbarOptions: [["Home", "home"], ["Login", "user"], ["Register", "sign in"]]
};

export const clibraryReducer = (state = initialState, action) => {
  console.log(initialState);
  return state;
};