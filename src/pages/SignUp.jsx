import "../css/SignIn.css";
import Logo from "../img/Logo.png";
import Apple from "../img/apple.png";
import Google from "../img/google.png";
import { Link, useNavigate } from "react-router";
import { userSignUpSchema } from "../validation/Form";

function SignUp() {
  const nav = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      passwordConfirm: event.target[3].value,
    };
    const isValid = await userSignUpSchema.isValid(formData);

    if (isValid & formData.password === formData.passwordConfirm) nav("/signin");
    else {
      if (formData.password !== formData.passwordConfirm)
        alert("Please make sure the passwords you enter are the same.");
      else if (formData.password.length < 8)
        alert("Password Must be at least 8 charcters.");
    }
  }

  return (
    <section className="w-screen h-screen xl:w-full xl:h-full flex flex-col py-8 gap-y-2 text-center">
      <div className="SignIn-Container flex flex-col xl:w-1/3 rounded-3xl border-2 py-8 px-12 m-auto gap-y-1">
        <img src={Logo} alt="Logo" className="w-48 m-auto mb-4" />
        <div className="text-3xl">Sign Up</div>
        <span className="text-sm mb-6">Create your free account</span>
        <button className="border-2 rounded-3xl w-full py-2 px-16 text-sm flex justify-center items-center gap-x-2">
          <img src={Google} alt="Google" className="w-6" />{" "}
          <span>Sign up with Google</span>
        </button>
        <button className="border-2 rounded-3xl w-full py-2 px-16 text-sm flex justify-center items-center gap-x-2">
          <img src={Apple} alt="Apple" className="w-6" />
          <span>Sign up with Apple</span>
        </button>
        <Link
          to="/SignIn"
          className="border-2 rounded-3xl w-full py-2 px-16 text-sm flex justify-center items-center mb-6"
        >
          Skip for now
        </Link>
        <form className="flex flex-col gap-y-2 text-gray-500" onSubmit={handleSubmit}>
          <input
            className="py-2 px-8 rounded-xl"
            type="text"
            placeholder="Username"
          />
          <input
            className="py-2 px-8 rounded-xl"
            type="email"
            placeholder="Email"
          />
          <input
            className="py-2 px-8 rounded-xl"
            type="password"
            placeholder="Password"
          />
          <input
            className="py-2 px-8 rounded-xl mb-2"
            type="password"
            placeholder="Confirm Password"
          />

          <input
            type="submit"
            value="Create your free account"
            className="w-full bg-red-400 text-white rounded-lg text-sm py-2 cursor-pointer"
          />

          <div className="w-full flex text-gray-400 text-center">
            By signing up you agree to our <div className="underline pl-1 text-gray-500">Terms of Service.</div>
          </div>
        </form>
      </div>
      <Link to="/SignIn">Already have an account?Log In</Link>
    </section>
  );
}

export default SignUp;
