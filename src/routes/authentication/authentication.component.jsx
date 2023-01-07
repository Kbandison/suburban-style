import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div>
      <h1>Sign-In/Sign Up</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
