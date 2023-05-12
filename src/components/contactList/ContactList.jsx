import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { UserContact } from '../userContact/UserContact';

export const ContactList = ({ contactSeach, deleteContacts }) => {
  return (
    <ul className={css.list}>
      {contactSeach.map(({ name, number, id }) => {
        return (
          <li className={css.user} key={id}>
            <UserContact name={name} number={number} />
            <button
              className={css.btn}
              onClick={() => {
                deleteContacts(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactSeach: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

// export const ContactList = ({ contactSeach, deleteContact }) => {
//   if (contactSeach.length === 0) {
//     return <p className={css.message}>No contacts found.</p>;
//   }

//   return (
//     <ul className={css.list}>
//       {contactSeach.map(({ name, number, id }) => {
//         return (
//           <li className={css.user} key={id}>
//             <p>Name: {name}</p>
//             <p>Number: {number}</p>
//             <button
//               className={css.btn}
//               onClick={() => {
//                 deleteContact(id);
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
    
//   );
// };

// ContactList.propTypes = {
//   contactSeach: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
