import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import {
  addToContacts,
  deleteContact,
  setFilterField,
} from "../src/redux/actions";
import { connect } from "react-redux";
import "./App.css";

function App({ value, filter, addContact, onDeleteItem }) {
  localStorage.setItem("items", JSON.stringify(value));
  return (
    <>
      <MainContainer>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={addContact} />
        <h2>Contacts:</h2>
        <FilterContacts value={filter} onSubmit={setFilterField} />
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
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (value) => dispatch(addToContacts(value)),
    onDeleteItem: (value) => dispatch(deleteContact(value)),
    setFilterField: (event) => dispatch(setFilterField(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
