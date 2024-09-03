import React, { useState } from "react";
import "./style.css";

const FormValidation = () => {
  const initialValues = { username: "", password: "" };
  const [formValues, SetFormValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    SetFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputErrors(validate(formValues));
  };
  const validate = (values) => {
    const errors = {};
    const digits = /[0-9]/g;
    if (!values.username) {
      errors.username = "Username name must be required";
    }
    if (!values.password) {
      errors.password = "Password is required ";
    } else if(values.password.length < 8){
       errors.password = "Password must have atleast 8 characters"
    }else if (!digits.test(values.password)) {
      errors.password = "Password requires atleast 1 digit";
    }
    return errors;
  };

  const resetForm = () => {
    SetFormValues(initialValues);
  };
  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <p className="header">Create Form</p>
        <div>
          <div className="input-group error">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
            />
            <p id="user-error" className="message">
              {inputErrors.username}
            </p>
          </div>
          <div className="input-group error">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <p id="password-error" className="message">
              {inputErrors.password}
            </p>
          </div>
          <br />
          <div>
            <label>City of Employment:</label>
            <input type="text" />
          </div>
        </div>
        <br />

        <div>
          <label>Web Server:</label>
          <select id="servers">
            <option defaultValue={""}>---Choose a server---</option>
            <option defaultValue={"Apache HTTP Server"}>
              Apache HTTP Server
            </option>
            <option defaultValue={"Microsoft Internet Information Services"}>
              Microsoft Internet Information Services
            </option>
            <option defaultValue={"Lighttpd"}>Lighttpd</option>
            <option defaultValue={"Sun Java System Web Server"}>
              Sun Java System Web Server
            </option>
          </select>
        </div>
        <br />

        <div className="center">
          <label>Please specify your role:</label>
          <div>
            <div>
              <input type="radio" name="roles" />
              <label>Admin</label>
            </div>
            <div>
              <input type="radio" name="roles" />
              <label>Engineer</label>
            </div>
            <div>
              <input type="radio" name="roles" />
              <label>Manager</label>
            </div>
            <div>
              <input type="radio" name="roles" />
              <label>Guest</label>
            </div>
          </div>
        </div>

        <div className="center align">
          <label>Single Sign-on to the following:</label>

          <div>
            <div>
              <input type="checkbox" name="" value="mail" />
              <label>Mail</label>
            </div>

            <div>
              <input type="checkbox" value="payroll" />
              <label>Payroll</label>
            </div>

            <div>
              <input type="checkbox" value="self-service" />
              <label>Self-service</label>
            </div>
          </div>
        </div>

        <div id="buttons">
          <button className="bton" type="submit" value="submit">
            Login
          </button>
          <button
            className="bton"
            id="btn2"
            type="reset"
            value="reset"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
