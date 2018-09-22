import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes'

export const getInputChange = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItem = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItem = index => ({
  type: DELETE_TODO_ITEM,
  index
})