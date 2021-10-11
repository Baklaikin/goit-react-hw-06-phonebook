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

export const setFilterField = (data) => {
  return {
    type: FILTER,
    payload: data,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
