import { Component } from 'react';
import PropTypes from 'prop-types';
import { HiSearch } from 'react-icons/hi';
import css from './Searchbar.module.css';
import toast from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = evt => {
    this.setState({
      value: evt.target.value,
    });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    const { value } = this.state;

    if (!value.trim()) {
      return toast.error('Please enter your request');
    }

    this.props.onSearch(value);

    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={css.SearchFormButton}>
            <HiSearch className={css.SearchFormButton} />
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
