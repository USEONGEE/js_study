export const ActionType = { 
  ADD_MONEY: "ADD_MONEY",
  SUB_MONEY: "SUB_MONEY"
}

const init = Math.round(250000 + Math.random() * 250000);

const money = (state = init, action) => {
  switch(action.type) {
    case 'ADD_MONEY':
      return state + action.payload;
    case 'SUB_MONEY':
      return state - action.payload;
    default:
      return state;
  }
}

export default money;