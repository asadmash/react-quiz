import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import SignupForm from "../SignupForm";
// import SignupForm from "../SignupForm";
// import classes from "../../styles/Signup.module.css";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
