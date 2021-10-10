import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const data = JSON.parse(localStorage.getItem("items"));
let initialState;
if (data !== null) {
  initialState = {
    contacts: {
      items: [...data],
      filter: "",
    },
  };
} else {
  initialState = {
    contacts: {
      items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    },
  };
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "phonebook/addToContacts":
      const isInList = state.contacts.items.find(
        (item) => item.number === payload.number
      );
      if (isInList) {
        alert(`${payload.name} is already in contacts`);
        return state;
      } else {
        return {
          ...state,
          contacts: {
            ...state.contacts,
            items: [...state.contacts.items, payload],
          },
        };
      }

    case "phonebook/filterContacts":
      return {
        ...state,
        filter: payload,
      };

    case "phoneBook/deleteContact":
      const filtered = state.contacts.items.filter((contact) => {
        return contact.name !== payload;
      });
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...filtered],
        },
      };

    default:
      return state;
  }
};
const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
