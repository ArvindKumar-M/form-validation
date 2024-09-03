import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = (data) => {
    console.log(data);
  };
  return (
    <>
      <div id="container">
        <form onSubmit={handleSubmit(formData)}>
          <p>Create Form</p>
          <div>
            <div className="input-group error">
              <label htmlFor="name">Username:</label>
              <input type="text" id="name" name="username" />
              <div id="user-error" className="message"></div>
            </div>
            <div className="input-group error">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <div id="password-error" className="message"></div>
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
              <option defaultValue={""}>
                ---Choose a servCannot read properties of undefined (reading
                'username')er---
              </option>
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
            <button id="btn" type="submit">
              Login
            </button>
            <button>Reset</button>
          </div>
        </form>
      </div>
      );
    </>
  );
};

export default Form;
