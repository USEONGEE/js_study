import { combineReducers } from 'redux'
import cheat from './cheat'
import money from './money'

const rootReducer = combineReducers({
  money,
  cheat
})

console.dir(rootReducer)

export default rootReducer;

