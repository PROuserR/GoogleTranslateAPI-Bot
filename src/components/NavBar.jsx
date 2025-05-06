import { BiHomeAlt } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiFileBlank } from "react-icons/bi";
import { BiFile } from "react-icons/bi";
import { BiSolidMagicWand } from "react-icons/bi";
import { BiChip } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="hidden lg:flex w-1/3">
      <section className="flex flex-col h-full px-2 py-4">
        <BiQuestionMark className="w-5 h-5 m-auto border rounded-full p-0.5 text-gray-300" />
        <BiCog className="w-8 h-8 text-gray-300" />
      </section>
      <main className="flex flex-col w-full gap-y-8 border-l border-gray-500 p-4">
        <section className="flex gap-x-4 items-center">
          <div className="bg-red-400 rounded-xl w-12 h-12"></div>
          <Link to="/" className="text-2xl font-bold">Amiazo Chat</Link>
        </section>
        <section className="flex flex-col h-full w-full ">
          <span className="font-bold text-xl mb-8">Menu</span>
          <div className="text-gray-400 text-lg font-semibold flex flex-col gap-y-3">
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiHomeAlt className="w-6 h-6" />
              <span className="pl-2">Dashboard</span>
            </div>
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiChat className="w-6 h-6" />
              <span className="pl-4">Chatbots</span>
            </div>
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiFileBlank className="w-6 h-6" />
              <span className="pl-4">Files</span>
            </div>
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiFile className="w-6 h-6" />
              <span className="pl-4">Prompts</span>
            </div>
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiSolidMagicWand className="w-6 h-6" />
              <span className="pl-4">File Wizard</span>
            </div>
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiChip className="w-6 h-6" />
              <span className="pl-4">API</span>
            </div>
            <div className="flex items-center pl-2 hover:text-red-400 border-l-4 border-black hover:border-red-400">
              <BiBookOpen className="w-6 h-6" />
              <span className="pl-4">User Guide</span>
            </div>
          </div>
          <button className="flex w-full rounded-3xl bg-red-400 text-black px-2 py-4 items-center justify-center mt-auto gap-x-2">
            <BiDollarCircle className="w-6 h-6 text-gray-600" />
            <span className="text-lg">View Plan</span>
          </button>
        </section>
        <section className="flex gap-x-4 mt-auto">
          <div className="bg-red-400 rounded-xl w-12 h-12"></div>
          <div className="flex flex-col">
            <span>John Smith</span>
            <span className="text-gray-400 text-sm">8 Dialogues</span>
          </div>
        </section>
      </main>
    </nav>
  );
}

export default NavBar;
