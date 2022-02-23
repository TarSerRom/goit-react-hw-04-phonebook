import PropTypes from 'prop-types';
import './ContactList.css'

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => {
        return (
          <li className="contacts_item" key={id}>
            <p>{name}</p>
            <p className='contacts_number'>{number}</p>
            <button className=" contacts__button-delete" onClick={onDelete} id={id}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};