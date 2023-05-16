import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handlSubmit = event => {
    event.preventDefault();
    let result = this.props.namesContact.includes(this.state.name);
    if (result) {
      alert(`${result.name} is already in contacts`);
      this.setState({
        name: '',
      });
    } else {
      this.props.addContact({ ...this.state });
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handlSubmit}>
        <label className={css.label}>
          <p>Name</p>
          <input
            name="name"
            type="text"
            placeholder="your name..."
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          <p>Number</p>
          <input
            name="number"
            type="tel"
            placeholder="add valid number..."
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  namesContact: PropTypes.arrayOf(PropTypes.string.isRequired),
  addContact: PropTypes.func.isRequired,
};