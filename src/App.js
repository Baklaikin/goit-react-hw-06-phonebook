import { useState, useEffect } from "react";
import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import { addToContacts, deleteContact } from "../src/redux/actions";
// import store from "redux/store";
// import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import "./App.css";

function App({ value, addContact, onDeleteItem }) {
  const [filter, setFilter] = useState("");

  // const formSubmitHandler = (data) => {
  //   console.log(`contact name in formsubmithandler:`, data)
  //   console.log(`this is userContacts:`, value)
  // //   value.find((item) => {
  // //     if (item.name.toLowerCase().trim() === data.name.toLowerCase().trim()) {
  // //       console.log(`I do not understand`)
  // //       return alert(`${data.name} is already in contacts`);
  //   //     } else { return
  //   store.dispatch(addContact(data))
  // // }
  // // })
  //   // addContact(data);
  // };

  const handleFilterField = (event) => setFilter(event.target.value);
  // const deleteButtonHandler = (name) => {
  //   // setContacts(() => {
  //   //   return contacts.filter((contact) => {
  //   //     return contact.id !== id;
  //   //   });
  //   // });
  //   onDeleteItem(name)
  // };
  localStorage.setItem("items", JSON.stringify(value));
  return (
    <>
      <MainContainer>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={addContact} />
        <h2>Contacts:</h2>
        <FilterContacts value={filter} onSubmit={handleFilterField} />
        <ContactList
          contacts={value}
          filter={filter}
          onDeleteItem={onDeleteItem}
        />
      </MainContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (value) => dispatch(addToContacts(value)),
    onDeleteItem: (value) => dispatch(deleteContact(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
