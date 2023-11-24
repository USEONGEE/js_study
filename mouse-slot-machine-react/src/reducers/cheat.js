export const ActionType = {
  DO_CHEAT: "DO_CHEAT"
}


const cheat = (state = false, action) => {
  switch (action.type) {
    case ActionType.DO_CHEAT:
      state = true;
      return state;
    default:
      return state;
  }
}

export default cheat;