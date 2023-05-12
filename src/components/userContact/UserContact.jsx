import PropTypes from 'prop-types';
import css from './UserContact.module.css';

export const UserContact = ({ name, number }) => {
  return (
    <div className={css.contacts}>
      <p className={css.name}>{name} :</p>
      <p className={css.number}>{number}</p>
    </div>
  );
};

UserContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
