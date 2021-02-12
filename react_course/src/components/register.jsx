import Joi from "joi-browser";
import Form from "./common/form";

export default class Login extends Form {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
    title: "Register",
  };
  schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(4).required().label("Password"),
    confirmPassword: Joi.string().min(4).required().label("Password"),
  };

  doSubmit = () =>{
    console.log("Success operation...")
  }

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-4 offset-4">
            <this.renderTitle/>
            <form>
              <this.renderInput name = "username" label = "Username"/>
              <this.renderInput name = "email" label = "Email"/>
              <this.renderInput name = "password" label = "Password" type="password"/>
              <this.renderInput name = "confirmPassword" label = "ConfirmPassword" type="password"/>
              <this.renderSubmit label = "Registration"/>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
