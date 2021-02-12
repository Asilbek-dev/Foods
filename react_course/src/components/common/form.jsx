import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../forms/input";
import Select from "../common/select";
import { FaSearch } from "react-icons/fa";

export default class Form extends Component {
  
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, { abortEarly: false });
    console.log("error",error);
    if (error?.details)
      error.details
        .reverse()
        .forEach(({ path, message }) => (errors[path[0]] = message));
    return Object.keys(errors).length > 0 ? errors : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  validationProparty = (name, value) => {
    let message;
    const object = { [name]: value };
    const { error } = Joi.validate(object, { [name]: this.schema[name] });
    if (error?.details) message = error.details[0].message;
    return message ?? null;
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    const errors = { ...this.state.errors };
    const { data } = this.state;
    const errorMassege = this.validationProparty(name, value);
    if (errorMassege) errors[name] = errorMassege;
    else delete errors[name];
    this.setState({
      data: { ...data, [name]: value },
      errors,
    });
  };

  renderInput = ({ name, label,...args }) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        {...args}
      />
    );
  };
  renderSelect = ({ name, label, options, ...args }) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        options={options}
        {...args}
      />
    );
  };
  renderSubmit = ({ label }) => {
    return (
      <button
        onClick={this.handleSubmit}
        className=" btn-sm btn-success float-right"
      >
        {label}
      </button>
    );
  };
  renderTitle = () => {
    return <h1 id="title">{this.state.title}</h1>;
  };
  renderSearch = () => {
    return (
      <div className="input-group mb-3">
        <input
          className="form-control search-btn"
          placeholder="Search..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-sm btn-success rounded-right search-btn px-3"
          type="button"
          id="button-addon2"
        >
          <FaSearch />
        </button>
      </div>
    );
  };
}
