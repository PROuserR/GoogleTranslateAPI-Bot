import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <main className="text-white h-screen xl:w-full xl:h-full flex justify-center items-center">
      <div className="WelcomePage-Ellipse"></div>
      <div className="flex flex-col gap-y-8 text-center my-auto xl:py-44 xl:w-2/3 xl:h-1/2">
        <h1 className="text-6xl xl:text-8xl font-bold xl:tracking-[1rem] mb-4">
          AI-Powered Productivty.
        </h1>
        <p className="text-xl font-thin w-full xl:w-4/5 m-auto">
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
