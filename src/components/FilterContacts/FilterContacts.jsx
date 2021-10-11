import s from "components/FilterContacts/FilterContacts.module.css";

function FilterContacts({ onSubmit, filter }) {
  return (
    <form className={s.findForm}>
      <label className={s.findFormLabel}>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={
          event => {
          const data = event.target.value;
          onSubmit(data)
        }
        } />
      </label>
    </form>
  );
}

export default FilterContacts;
