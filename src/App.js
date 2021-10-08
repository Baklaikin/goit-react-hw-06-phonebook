import { useState, useEffect } from "react";
import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    if (data !== null) {
      setContacts((prevState) => [...data]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    contacts.find(
      (item) =>
        item.name.toLowerCase().trim() === data.name.toLowerCase().trim()
    )
      ? alert(`${data.name} is already in contacts`)
      : setContacts((prevState) => {
          const newItem = {
            id: uuidv4(),
            name: data.name,
            number: data.number,
          };
          return [...contacts, newItem];
        });
  };

  const handleFilterField = (event) => setFilter(event.target.value);

  const deleteButtonHandler = (id) => {
    setContacts(() => {
      return contacts.filter((contact) => {
        return contact.id !== id;
      });
    });
  };

  return (
    <>
      <MainContainer>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={formSubmitHandler} />
        <h2>Contacts:</h2>
        <FilterContacts value={filter} onSubmit={handleFilterField} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteItem={deleteButtonHandler}
        />
      </MainContainer>
    </>
  );
}

export default App;
