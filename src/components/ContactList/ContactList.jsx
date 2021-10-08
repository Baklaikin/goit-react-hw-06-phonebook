import s from "components/ContactList/ContactList.module.css";

const ContactList = ({ contacts, filter, onDeleteItem }) => {
  const filtered = contacts.filter((contact) => {
    return contact.name
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim());
  });
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
              onClick={() => onDeleteItem(id)}
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
