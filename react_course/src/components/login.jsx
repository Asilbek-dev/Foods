import Joi from "joi-browser";
import Form from "./common/form";

export default class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
    title: "Login",
  };
  schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    password: Joi.string().min(4).required().label("Password"),
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
              <this.renderInput name = "password" label = "Password" type="password"/>
              <this.renderSubmit label = "Send"/>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
