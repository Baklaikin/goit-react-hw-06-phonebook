import s from "components/FilterContacts/FilterContacts.module.css";

function FilterContacts({ onSubmit, value }) {
  return (
    <form className={s.findForm}>
      <label className={s.findFormLabel}>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={event => {
          console.log(event.target.value)
          onSubmit(event.target.value)
        }
        } />
      </label>
    </form>
  );
}

export default FilterContacts;
