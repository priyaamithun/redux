import { ADD_REMAINDER, DELETE_REMAINDER } from '../Constants'

const remainder = (action) => {
  
  let {text, dueDate } = action
  return {
    id: Math.random(),
    text, 
    dueDate
  }
}

const removeById = (state = [], id) => {
  const remainders = state.filter((remainder) => remainder.id !== id)
  console.log('new reduced remainder', remainders)
  return remainders
}
export const remainders = (state = [], action) => {
  let remainders = null

  switch (action.type) {
    case ADD_REMAINDER:
      remainders = [...state, remainder(action)]
      console.log('remainder as state', remainders)
      return remainders
    case DELETE_REMAINDER:
      remainders = removeById(state, action.id)
      return remainders

    default:
      return state
  }
}

export default remainders
