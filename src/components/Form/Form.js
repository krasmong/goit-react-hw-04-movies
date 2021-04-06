import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './Form.module.css';

class Form extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.warn('Заполните форму поиска');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <div className={s.Searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.formButton}>
            <BiSearchAlt style={{ marginRight: 8 }} />
          </button>

          <input
            className={s.formInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
