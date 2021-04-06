import React, { Component } from 'react';
import { toast } from 'react-toastify';

import s from './Form.module.css';

class Form extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      toast.error('This field cannot be empty');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          onChange={this.handleChange}
          value={this.state.value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Serch images and photos"
        />
        <button className={s.button} type="submit">
          <span className={s.buttonLabel}></span>
        </button>
      </form>
    );
  }
}

export default Form;
