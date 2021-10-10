export const addToContacts = ({ id, name, number }) => {
  return {
    type: "phonebook/addToContacts",
    payload: {
      id,
      name,
      number,
    },
  };
};

export const setFilterField = (event) => {
  return {
    type: "phonebook/filterContacts",
    payload: event.target.value,
  };
};

export const deleteContact = (id) => {
  return {
    type: "phoneBook/deleteContact",
    payload: id,
  };
};
