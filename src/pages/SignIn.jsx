import "../css/SignIn.css";
import Logo from "../img/Logo.png";
import Apple from "../img/apple.png";
import Google from "../img/google.png";
import { Link, useNavigate } from "react-router";
import { userSignInSchema } from "../validation/Form";

function SignIn() {
  const nav = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await userSignInSchema.isValid(formData);

    if (isValid) nav("/chat");
    else {
      if (formData.password.length < 8)
        alert("Password Must be at least 8 charcters");
    }
  }

  return (
    <section className="w-screen h-screen flex flex-col text-center gap-y-4 p-8 xl:p-0 xl:w-full xl:h-full xl:py-16">
      <div className="SignIn-Container flex flex-col rounded-3xl border-2 py-8 px-12 w-full xl:w-1/3 m-auto gap-y-1">
        <img src={Logo} alt="Logo" className="w-48 m-auto mb-4" />
        <div className="text-3xl">Log in</div>
        <span className="text-sm mb-6">Welcome back to AMAIZO</span>
        <button className="border-2 rounded-3xl w-full py-2 px-16 text-sm flex justify-center items-center gap-x-2">
          <img src={Google} alt="Google" className="w-6" />
          <span>Sign up with Google</span>
        </button>
        <button className="border-2 rounded-3xl w-full py-2 px-16 text-sm flex justify-center items-center gap-x-2">
          <img src={Apple} alt="Apple" className="w-6" />
          <span>Sign up with Apple</span>
        </button>
        <Link
          to="/signup"
          className="border-2 rounded-3xl w-full py-2 px-16 text-sm flex justify-center items-center mb-6"
        >
          Sign up with Single Sign-On
        </Link>
        <form
          className="flex flex-col gap-y-2 text-gray-500"
          onSubmit={handleSubmit}
        >
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
          <Link className="mb-8">Forgot Password?</Link>
          <input
            type="submit"
            className="w-full bg-red-400 rounded-xl py-1.5 text-white cursor-pointer"
            value="Sign in"
          />
        </form>
      </div>
      <Link to="/signup">Don't have an account?Sign up</Link>
    </section>
  );
}

export default SignIn;
