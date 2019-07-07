import { ADD_REMAINDER, DELETE_REMAINDER } from '../Constants'

export const addRemainder = (text, dueDate) => {
  const action = {
    type: ADD_REMAINDER,
    text,
    dueDate
  }
  console.log('action in addRemainder', action)
  return action
}

export const deleteRemainder = (id) => {
  const action = {
    type: DELETE_REMAINDER,
    id
  }
  console.log('action in deleteRemainder', action)
  return action
}
