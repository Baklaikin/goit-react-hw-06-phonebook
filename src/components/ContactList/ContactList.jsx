import s from "components/ContactList/ContactList.module.css";
import store from "redux/store";

const ContactList = ({filter, onDeleteItem }) => {
  const data = store.getState();
  const filtered = data.contacts.items.filter((contact) => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
  return (
    <ul className={s.list}>
      {filtered.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.deleteBtn}
              type="button"
              name="delete"
              onClick={()=>onDeleteItem(name)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
