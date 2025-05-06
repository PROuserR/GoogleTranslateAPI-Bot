import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <main className="text-white w-full h-full justify-center items-center">
      <div className="flex flex-col gap-y-8 text-center w-2/3 h-1/2 m-auto py-44">
        <div className="WelcomePage-Ellipse"></div>
        <h1 className="text-8xl font-bold tracking-[1rem] mb-4">
          AI-Powered Productivty.
        </h1>
        <p className="text-2xl font-thin w-4/5 m-auto">
          AI-Powered Tools In One To SuperCharge Your Team Productivty. With
          Taskade, All Your Work Is In Sync In One Unified Workspace.
        </p>
        <Link
          to="/SignIn"
          className="text-2xl w-fit py-2 px-20 rounded-3xl border-2 border-red-400 m-auto"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}

export default App;
