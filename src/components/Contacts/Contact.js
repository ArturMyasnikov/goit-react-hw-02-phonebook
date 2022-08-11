import s from './Contacts.module.css';

export function ContactListItem({ contact, onDelete }) {
  return (
    <li className={s.item}>
      <p>
        {contact.name} : {contact.number}
      </p>
      <button
        className={s.btn__delete}
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export function ContactList({ contacts, filter, onDelete }) {
  if (filter !== '') {
    return;
  }

  return (
    <ul className="contacts-list">
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
