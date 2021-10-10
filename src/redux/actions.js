import { ADD, DELETE, FILTER } from "../redux/constants";

export const addToContacts = ({ id, name, number }) => {
  return {
    type: ADD,
    payload: {
      id,
      name,
      number,
    },
  };
};

export const setFilterField = (value) => {
  return {
    type: FILTER,
    payload: value,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
